import { TypeAnimation } from "react-type-animation";
import tuananhLogo from "@/assets/img/about/tuan_anh.jpg";
import myCV from "@/assets/cv-tuan_anh.pdf";
import { useRef, useEffect } from "react";
import Parallax from "parallax-js";
const About = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true,
            });

            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }
    }, []);
    return (
        <>
            <div
                className="arlo_tm_section relative"
                id="about"
                style={{ paddingTop: "100px" }}
            >
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Về tác giả</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div
                                        className="about_image_wrap parallax"
                                        data-relative-input="true"
                                        ref={sceneEl}
                                    >
                                        <div
                                            className="image layer"
                                            data-depth="0.2"
                                        >
                                            <img
                                                src="img/about/550x640.jpg"
                                                alt="550x640"
                                            />
                                            <div
                                                className="inner"
                                                data-img-url={tuananhLogo}
                                                style={{
                                                    backgroundImage: `url(${tuananhLogo})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div
                                            className="border layer"
                                            data-depth="0.6"
                                        >
                                            <img
                                                src="img/about/550x640.jpg"
                                                alt="550x640"
                                            />
                                            <div className="inner"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>
                                            Hi there... I'm a &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    "Freelancer",
                                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    "UI/UX Designer",
                                                    2000,
                                                    "Web Developer",
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                // style={{
                                                //     fontSize: "2em",
                                                //     display: "inline-block",
                                                // }}
                                                repeat={Infinity}
                                                placeholder=""
                                                onPointerEnterCapture={() => {}}
                                                onPointerLeaveCapture={() => {}}
                                            />
                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>
                                            Xin chào, mình là{" "}
                                            <strong>Tuấn Anh</strong>, là một
                                            lập trình viên website.
                                            <br />
                                            <br />
                                            Và bây giờ vẫn là noob.
                                        </p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span>
                                                    <label>Ngày sinh:</label>{" "}
                                                    16.12.2003(GenZ)
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Tuổi:</label> 20
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Thành phố:</label>
                                                    Hà Nội
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Sở thích:</label>{" "}
                                                    Gym, Badminton
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Tốt nghiệp:</label>{" "}
                                                    Thăng Long University
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Chuyên ngành:</label>{" "}
                                                    Cử nhân Công nghệ thông tin
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Facebook:</label>{" "}
                                                    <a href="#">
                                                        www.myfacebook.com
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Mail:</label>{" "}
                                                    <a href="mailto:example@gmail.com">
                                                        tinigaming&#64;gmail.com
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download>
                                                    <span>Download CV</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
