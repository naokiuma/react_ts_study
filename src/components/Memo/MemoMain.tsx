import { useState } from 'react';
import { Header } from '../../components/Memo/Header';
import { Category_Memo_list } from '../../components/Memo/parts/Category_Memo_list';
import { createUUID } from '../../utils/createUUID';





type Category = {
    id: number;
    name: string;
};

type SelectedMemo = {
    title: string;
    content: string;
};
export const MemoMain: React.FC = () => {
    let first_uuid = createUUID();
	
    const [category, setCategory] = useState<Category[]>([]);
	const [selected_memo,setSelected_memo] = useState<SelectedMemo>();
    return (
        <>
            <Header setCategory={setCategory} uuid={first_uuid}/>
			<div className="contets_wrap">
				<aside className='aside_area'>
					{category.length > 0 && 
						<ul>
							{
								category.map((item) => (
									<Category_Memo_list
										id={item.id}
										name={item.name}
										uuid={first_uuid}
										selected_func = {setSelected_memo}
										key={item.id}
									/>
								))
							}
						</ul>	
					}
				</aside>
				<div className="main_area">
					<div className="_inner">
						{selected_memo?.title && (
							<span>{selected_memo.title}</span>
						)}
						{selected_memo?.content &&(
							<p>{selected_memo.content}</p>
						)}
					</div>
				</div>

			</div>
		

        </>
    );
};
