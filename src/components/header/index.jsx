import "./style.css"
import Logo from "../../assets/logo.jpg"
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()

    return (

        <div className='header'>
            <div>
                <img className={'main-logo'} src={Logo} alt="logo" height={70} onClick={() => navigate("/")}/>
            </div>
            <div className={"header-left"}>
                <p className='header-items' onClick={() => navigate(("/about"))}>Biz haqimizda</p>
                <p className='header-items' onClick={() => navigate(("/products"))}>Products</p>
                <p className='header-items' onClick={() => navigate(("/contact"))}>Contact us</p>

            </div>
        </div>
    )
}