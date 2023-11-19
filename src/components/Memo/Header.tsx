import { useEffect, useState,memo,useRef } from "react";
import {createUUID} from "../../utils/createUUID"


export const Header:React.FC = () => {

	let first_uuid = createUUID();
	const inputed_UUID = useRef<HTMLInputElement>(null);
	const [login_disable,set_login_disable] = useState(false);

	// ログイン処理
	const LoginHundler = ()=>{
		if (inputed_UUID.current) {
			fetch('https://challenge-server.tracks.run/memoapp/category', {
				method: 'GET',
				headers: {
					'x-access-token':inputed_UUID.current?.value,
					'Content-Type': 'application/json'
				}
			})
			.then(response => {
				// レスポンスを処理するコードを記述
				console.log(response)
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