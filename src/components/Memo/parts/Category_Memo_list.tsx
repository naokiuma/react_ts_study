import { useState,useRef,useEffect } from "react";

type CategoryListTyep = {
	id:number;
	name:string;
	uuid:string;
	selected_func:any
}
type Memo = {
	id:number;
	title:string;
}


export const Category_Memo_list:React.FC<CategoryListTyep> = (Props)=>{
    const [memos, setMemos] = useState<Memo[]>([]);
	//該当カテゴリーの開閉状態
	const [is_active,set_is_active] = useState(false);

	//カテゴリー内の特定のメモを表示
	const GetMemos = (id:number) => {
		//開いている場合とじる
		if(is_active){
			set_is_active(false)
		}else{
			fetch(
				`https://challenge-server.tracks.run/memoapp/memo?category_id=${id}`,
				{
					method: 'GET',
					headers: {
						'x-access-token': Props.uuid,
						'Content-Type': 'application/json',
					},
				}
			)
			.then((response) => {
				// レスポンスを処理するコードを記述
				return response.json();
			})
			.then((data) => {
				console.log('取得したデータ:', data); // 取得したデータを表示
				set_is_active(true)
				setMemos(data)

				Props.selected_func({title:'test',content:'test_content'})


			});
		}
		
	
    };


	const spanRef = useRef<HTMLSpanElement>(null);
	useEffect(() => {
		//textcontent確認用
		// if (spanRef.current) {
		//   const textContent = spanRef.current.textContent;
		//   console.log(textContent)
		// }
	}, []);


	return(
		<li id={`category-${Props.id}`}>
			<div className="category_inner">
				<span 
					id={`category-${Props.id}-title`}
					ref={spanRef} 
					onClick={()=>GetMemos(Props.id)}
				>
					{Props.name}
				</span>
				{(memos.length > 0 && is_active)&& 
					<ul className="memos">
						{
							memos.map((item)=>(
								<li id={`memo-${item.id}`}>{item.title}</li>
							))
						}
					</ul>
				}
			</div>
		</li>
	)
}
