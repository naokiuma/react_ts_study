import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MemoMain } from './components/Memo/MemoMain';
import { TodoMain } from './components/Todo/TodoMain';

export const RouterConfig: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<TodoMain />} />
                    <Route path="/memo" element={<MemoMain />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
