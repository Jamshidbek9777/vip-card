import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/index.jsx";
import Header from "./components/header/index.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";
import Login from "./pages/login/login.jsx";
import PrivateRoute from "./components/privateRoute/privateRoute.jsx";
import Admin from "./pages/admin/admin.jsx";
import {ProductDetailPage} from "./pages/ProductDetail/detail.jsx";
import NotFound from "./pages/notfound/notfound.jsx";

function App() {

    return (
        <>
            {}
            <div className='container'>

                <Header/>
                <Routes>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/products"} element={<Products/>}/>
                    <Route path={"product/:id"} element={<ProductDetailPage/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path="/admin" element={
                        <PrivateRoute>
                            <Admin/>
                        </PrivateRoute>
                    }/>
                </Routes>
                <Footer/>


            </div>


        </>

    )
}

export default App
