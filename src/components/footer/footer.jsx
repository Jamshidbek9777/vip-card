import "./style.css"
import {FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className={'socials'}>
                <div className={'icon-container'}>
                    <FaFacebook color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaInstagram color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaTwitter color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaGoogle color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaYoutube color={'black'}/>
                </div>

            </div>

            <div className={'navigation'}>
                <p className={'navigation-item'}>
                    Home
                </p>
                <p className={'navigation-item'}>
                    Home
                </p>
                <p className={'navigation-item'}>
                    Home
                </p>
                <p className={'navigation-item'}>
                    Home
                </p>

            </div>
            <div className={'copyright'}>
                <p>
                    Copyright © 2024; Designed by Xudoynazar
                </p>
            </div>
        </footer>
    )
}