import { useEffect, useState } from "react";
import {createUUID} from "../../utils/createUUID"


export const Header:React.FC = () => {
	console.log('処理が走る')

	let first_uuid = createUUID();
	const [inputed_UUID,setUUID] = useState("")

	const [login_disable,set_login_disable] = useState(false);

	// ログイン処理
	const LoginHundler = ()=>{
		fetch('https://challenge-server.tracks.run/memoapp/category', {
			method: 'GET',
			headers: {
				'x-access-token':inputed_UUID,
				'Content-Type': 'application/json'
			}
		})
		.then(response => {
			// レスポンスを処理するコードを記述
			console.log(response)
		})
	}
	return(
		<header>
			<input type="text" 
				id="access_token" 
				placeholder={first_uuid}
				onChange={(e) => setUUID(e.target.value)}
			/>
			<button disabled={login_disable} onClick={LoginHundler}>Login</button>
		</header>
	)

}