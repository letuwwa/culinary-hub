import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Layout from "../components/Layout.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/contact", element: <Contact/>}
        ]
    }
])


function App() {
  return <RouterProvider router={router}/>
}


export default App
