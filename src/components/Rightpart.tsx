import About from "./content/About";
import Contact from "./content/Contact";
import HomeCV from "./content/HomeCV";
import Project from "./content/Project";
import Skill from "./content/Skill";
interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}
const RightPart = (props: IProps) => {
    return (
        <>
            <div
                className={
                    props.hideLeftPart
                        ? "arlo_tm_rightpart opened"
                        : "arlo_tm_rightpart"
                }
            >
                <div className="rightpart_inner">
                    <HomeCV />

                    {/* <!-- ABOUT --> */}
                    <About />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <Skill />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- SERVICES --> */}
                    <Project />
                    {/* <!-- /SERVICES --> */}

                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}
                </div>
            </div>
        </>
    );
};
export default RightPart;
