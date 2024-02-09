import { Routes, Route, NavLink } from 'react-router-dom';
import AR from './AR';
import AdminPage from './AdminPage';

/*const App = () => {

    let routes = useRoutes([
        { path: "*", element: <p>There is nothing here: 404!</p> },
        { path: "home", element: <Home /> },
        { path: "ar", element: <AR /> },
    ]);
    return routes;
};*/

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="ar" element={<AR />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="*" element={<p>There is nothing here: 404!</p>} />
        </Routes>
    );
};

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <nav>
                <NavLink to="/ar">
                    AR
                </NavLink>
            </nav>
            <nav>
                <NavLink to="/admin">
                    Admin Page
                </NavLink>
            </nav>
        </>
    );
};


export default App;