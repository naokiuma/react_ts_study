import { useState } from "react"
import { Header } from "../../components/Memo/Header"
import {createUUID} from "../../utils/createUUID"

type Category = {
	id: number; // または適切な型
	name: string; // または適切な型
  };

export const MemoMain:React.FC = () => {
	const [category,setCategory] = useState<Category[]>([])
	return(
		<>
			<Header setCategory={setCategory}/>
			{category.length > 0 && 
				<ul>
					{
						category.map((item, index) => (
							<li key={index}>{item.name}</li>
						))
					}
				</ul>
			}

		</>

	)
}
