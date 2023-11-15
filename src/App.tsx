import React from 'react';

import Todolist from './components/TodoList';
import NewTodo from './components/NewTodo';
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

const App:React.FC = () => {
	const todos = [{id:'t1', text:'Tyepscrtコースの完了'}];

	return (
	  <div className="App">
		  <NewTodo/>
		  <Todolist items={todos}/>
		
	  </div>
	);
}
  

export default App;
