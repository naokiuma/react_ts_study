import { useEffect, useState, memo, useRef } from 'react';
import { createUUID } from '../../utils/createUUID';

type HeaderProps = {
    setCategory: any;
	uuid:string;
};


export const Header: React.FC<HeaderProps> = (props) => {
    // let first_uuid = createUUID();
    const inputed_UUID = useRef<HTMLInputElement>(null);
    const [login_disable, set_login_disable] = useState(false);

	// カテゴリーid1：todos
	//0: Object { id: 1, title: "Pay my taxes" }

	// カテゴリーid2：レストラン
	// id 10 ブルーの
	// id 11 デイリーグリル

	// カテゴリーid4：books
    // ログイン処理
    const LoginHundler = () => {
        if (inputed_UUID.current) {
            fetch(
                // 'https://challenge-server.tracks.run/memoapp/memo?category_id=4',
                'https://challenge-server.tracks.run/memoapp/category',

                {
                    method: 'GET',
                    headers: {
                        // 'x-access-token':inputed_UUID.current?.value,
                        'x-access-token': props.uuid,
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
				props.setCategory(data); // データをpropsに渡す例
			});
        }
    };
    return (
        <header>
            <input
                type="text"
                id="access_token"
                placeholder={props.uuid}
                ref={inputed_UUID}
            />
            <button disabled={login_disable} onClick={LoginHundler}>
                Login
            </button>
        </header>
    );
};
