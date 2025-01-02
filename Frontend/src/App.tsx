import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Dashboard from "./components/Master/Dashboard.tsx";
import AddTask from "./components/Todo-Operation/AddTask.tsx"
import EditTodo from "./components/Todo-Operation/EditTodo.tsx";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="add" element={<AddTask/>}/>
                    <Route path="edit" element={<EditTodo/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
