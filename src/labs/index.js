import Nav from "../Nav";
import Assignment3 from "./a3";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./Store";

function Labs() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                {/* <Assignment3 />
            <Assignment4/> */}
                <Routes>
                    <Route path="/" element={<Navigate to="a3" />} />
                    <Route path="a3" element={<Assignment3 />} />
                    <Route path="a4" element={<Assignment4 />} />
                </Routes>
            </div>
        </Provider>
    );
}
export default Labs;
