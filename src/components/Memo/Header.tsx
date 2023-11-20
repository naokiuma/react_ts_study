import { useEffect, useState,memo,useRef } from "react";
import {createUUID} from "../../utils/createUUID"

type HeaderProps = {
	setCategory: any
};
type Data = {
	value: any; // valueプロパティの型を適切に指定
	// 他のプロパティがあればここに追加
};


export const Header:React.FC<HeaderProps> = (props) => {

	let first_uuid = createUUID();
	const inputed_UUID = useRef<HTMLInputElement>(null);
	const [login_disable,set_login_disable] = useState(false);

	// ログイン処理
	const LoginHundler = ()=>{
		if (inputed_UUID.current) {
			fetch('https://challenge-server.tracks.run/memoapp/category', {
				method: 'GET',
				headers: {
					// 'x-access-token':inputed_UUID.current?.value,
					'x-access-token':first_uuid,
					'Content-Type': 'application/json'
				}
			})
			.then(response => {
				// レスポンスを処理するコードを記述
				return response.json()
			})
			.then(data => {
				console.log('取得したデータ:', data); // 取得したデータを表示			
				props.setCategory(data); // データをpropsに渡す例
			})
		}
	}
	return(
		<header>
			<input type="text" 
				id="access_token" 
				placeholder={first_uuid}
				ref={inputed_UUID}
				/>
			<button disabled={login_disable} onClick={LoginHundler}>Login</button>
		</header>
	)
	
}