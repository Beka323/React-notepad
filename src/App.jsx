import { Routes, Route } from "react-router-dom";
import Index from "./components/index.jsx";
import Home from "./components/home.jsx";
import Add from "./components/add.jsx";
import Edit from "./components/edit.jsx";
import Trash from "./components/trash.jsx";
import View from "./components/view.jsx"
import Favorite from "./components/favorite.jsx";
import NotFound from "./components/notfound.jsx";
function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route index path="/" element={<Home />} />
                    <Route path=":id" element={<Edit />} />
                    <Route path="view/:id" element={<View/>}/>
                    <Route path="add" element={<Add />} />
                    <Route path="trash" element={<Trash />} />
                    <Route path="favorite" element={<Favorite />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default App;
