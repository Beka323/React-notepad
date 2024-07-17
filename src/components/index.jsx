import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
function Index() {
    return (
        <>
            <Header />
            <div className="components">
              <Outlet/>
            </div>
        </>
    );
}
export default Index;
