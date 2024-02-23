import { Routes, Route, NavLink } from 'react-router-dom';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, useCreate } from 'react-admin';
import { UserList, UserEdit, UserCreate } from "./users";
import { ModelList, ModelEdit, ModelCreate } from "./models";
import simpleRestProvider from 'ra-data-simple-rest';

import AR from './AR';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
    return (
        <Admin dataProvider={simpleRestProvider('https://localhost:7121')}>
           {/* <Resource name="users" list={PostList} edit={EditGuesser} /> */}
           <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} recordRepresentation="name" />
           <Resource name="models" list={ModelList} edit={ModelEdit} create={ModelCreate} recordRepresentation="name" />
        
            {/* <QueryClientProvider client={queryClient}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="ar" element={<AR />} />
                <Route path="admin" element={<AdminGridView />} />
                <Route path="new" element={<RentalCreate />} />
                <Route path="edit" element={<EditUser />} />
                <Route path="*" element={<p>There is nothing here: 404!</p>} />
            </Routes>
            </QueryClientProvider> */}
        </Admin>
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
            <nav>
                <NavLink to="/new">
                    New User
                </NavLink>
            </nav>
            <nav>
                <NavLink to="/edit">
                    Edit User
                </NavLink>
            </nav>
        </>
    );
};


export default App;