import { Button, Modal } from "antd";
import { useState } from "react";
const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dataProject = [
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Website Clone Tiki",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "", // mieu ta du an lam gi
                technology: "", // cong nghe su dung
                member: "", // bao nhieu thanh vien
                role: "", // vai tro trong du an
                demo: "", //link video, github, deploy
                github: "", // link github
            },
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Website Clone Tiki",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "", // mieu ta du an lam gi
                technology: "", // cong nghe su dung
                member: "", // bao nhieu thanh vien
                role: "", // vai tro trong du an
                demo: "", //link video, github, deploy
                github: "", // link github
            },
        },
        {
            image: "img/svg/camera-diaphragm.svg",
            title: "Website Clone Tiki",
            shortDescription:
                "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "", // mieu ta du an lam gi
                technology: "", // cong nghe su dung
                member: "", // bao nhieu thanh vien
                role: "", // vai tro trong du an
                demo: "", //link video, github, deploy
                github: "", // link github
            },
        },
    ];
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <div className="arlo_tm_section" id="project">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Amazing Projects</h3>
                            <span>Các dự án đã hoàn thiện</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProject.map((item, index) => {
                                    return (
                                        <li key={`project-${index}`}>
                                            <div className="inner">
                                                <div className="icon">
                                                    <img
                                                        className="svg"
                                                        src={item.image}
                                                        alt="camera-diaphragm"
                                                    />
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        {item.shortDescription}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Project;
