import destopLogo from "@/assets/img/logo/g.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const LeftPart = () => {
    return (
        <>
            <div className="arlo_tm_leftpart_wrap">
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#">
                            <img src={destopLogo} alt="desktop-logo" />
                        </a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skill</a>
                            </li>
                            <li>
                                <a href="#project">Project</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaYoutube />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaGithub />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a className="arlo_tm_resize" href="#">
                        <i className="xcon-angle-left"></i>
                    </a>
                </div>
            </div>
        </>
    );
};
export default LeftPart;
