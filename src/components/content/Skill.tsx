import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
    return (
        <>
            <div className="arlo_tm_section" id="skills">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Kỹ năng Frontend</h4>
                                </div>
                                <li>Cắt/ghép template Website Responsive</li>
                                <li>
                                    Framework/Library: Bootstrap, Antd, React.JS
                                </li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div
                                        className="arlo_tm_progress_wrap"
                                        data-size="small"
                                        data-round="c"
                                        data-strip="off"
                                    >
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="95"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    HTML/CSS/Javascript
                                                </span>
                                                <span className="number">
                                                    95%
                                                </span>
                                            </span>
                                            <ProgressBar
                                                completed={95}
                                                bgColor={"#333"}
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="85"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    React.JS(Typescript)
                                                </span>
                                                <span className="number">
                                                    85%
                                                </span>
                                            </span>
                                            <ProgressBar
                                                completed={85}
                                                bgColor={"#333"}
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="75"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    Design UI/UX
                                                </span>
                                                <span className="number">
                                                    75%
                                                </span>
                                            </span>
                                            <ProgressBar
                                                completed={75}
                                                bgColor={"#333"}
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Kỹ năng Backend</h4>
                                </div>
                                <li>Ngôn ngữ lập trình: Javascript, C#</li>
                                <li>Framework: Nest.JS</li>
                                <li>Database: Postgres, MongoDB</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div
                                        className="arlo_tm_progress_wrap"
                                        data-size="small"
                                        data-round="c"
                                        data-strip="off"
                                    >
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="95"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    ASP.NET CORE
                                                </span>
                                                <span className="number">
                                                    95%
                                                </span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={95}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="85"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    Nest.JS
                                                </span>
                                                <span className="number">
                                                    85%
                                                </span>
                                            </span>
                                            <ProgressBar
                                                completed={85}
                                                bgColor={"#333"}
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
                                        <div
                                            className="arlo_tm_progress"
                                            data-value="75"
                                            data-color="#000"
                                        >
                                            <span>
                                                <span className="label">
                                                    Database Postgress/MongoDB
                                                </span>
                                                <span className="number">
                                                    75%
                                                </span>
                                            </span>
                                            <ProgressBar
                                                completed={75}
                                                bgColor={"#333"}
                                                height="8px"
                                                isLabelVisible={false}
                                            />
                                        </div>
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
export default Skill;
