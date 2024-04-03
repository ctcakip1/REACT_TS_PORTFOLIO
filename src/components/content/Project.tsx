import { Button, Modal } from "antd";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string; // mieu ta du an lam gi
        frontend: string; // cong nghe su dung
        backend: string; // cong nghe su dung
        member: number; // bao nhieu thanh vien
        role: string; // vai tro trong du an
        demo: string; //link video, github, deploy
        github: string; // link github
    };
}
const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    };
    const dataProject: IProject[] = [
        {
            image: <FaReact size={50} color="#2bebdf" />,
            title: "Website Clone Tiki",
            shortDescription: "Web thương mại điện tử uy tín",
            detail: {
                description: "Xây dựng website thương mại điện tử clone Tiki", // mieu ta du an lam gi
                frontend: "React(Typescript), Redux Toolkit, AntDesign", // cong nghe su dung
                backend: "ASP.NET CORE, MongoDB", // cong nghe su dung
                member: 1, // bao nhieu thanh vien
                role: "Dev", // vai tro trong du an
                demo: "...", //link video, github, deploy
                github: "...", // link github
            },
        },
        {
            image: <FaTiktok size={50} />,
            title: "Website Clone Tiktok",
            shortDescription: "Web giải trí",
            detail: {
                description: "Xây dựng website giải trí clone TikTok", // mieu ta du an lam gi
                frontend: "React(Typescript), Redux Toolkit, AntDesign", // cong nghe su dung
                backend: "ASP.NET CORE, MongoDB", // cong nghe su dung
                member: 1, // bao nhieu thanh vien
                role: "Dev", // vai tro trong du an
                demo: "...", //link video, github, deploy
                github: "...", // link github
            },
        },
        {
            image: <FaFacebookF size={50} color="#636399" />,
            title: "Website Clone Facebook",
            shortDescription: "Web mạng xã hội lớn nhất",
            detail: {
                description: "Xây dựng website mạng xã hội clone Facebook", // mieu ta du an lam gi
                frontend: "React(Typescript), Redux Toolkit, AntDesign", // cong nghe su dung
                backend: "ASP.NET CORE, MongoDB", // cong nghe su dung
                member: 1, // bao nhieu thanh vien
                role: "Dev", // vai tro trong du an
                demo: "...", //link video, github, deploy
                github: "...", // link github
            },
        },
    ];
    return (
        <>
            <Modal
                title={
                    dataDetail && dataDetail.title
                        ? `Dự án ${dataDetail.title}`
                        : ""
                }
                open={isModalOpen}
                onOk={() => {
                    handleCloseModal();
                }}
                onCancel={() => {
                    handleCloseModal();
                }}
                footer={null}
                maskClosable={false}
            >
                {dataDetail && (
                    <ul>
                        <li>Miêu tả: {dataDetail?.detail.description}</li>
                        <li>Frontend: {dataDetail?.detail.frontend}</li>
                        <li>Backend: {dataDetail?.detail.backend}</li>
                        <li>Vai trò: {dataDetail?.detail.role}</li>
                        <li>
                            Demo:
                            <a href="#" target="_blank">
                                {dataDetail?.detail.demo}
                            </a>
                        </li>
                        <li>
                            Github:
                            <a href="#" target="_blank">
                                {dataDetail?.detail.github}
                            </a>
                        </li>
                    </ul>
                )}
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
                                            <div
                                                className="inner"
                                                title="Xem chi tiết"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setDataDetail(item);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <div className="icon">
                                                    {/* <img
                                                        className="svg"
                                                        src={item.image}
                                                        alt="camera-diaphragm"
                                                    /> */}
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        {item.shortDescription}
                                                    </p>
                                                </div>
                                                <div
                                                    className="view-detail"
                                                    style={{ padding: "5px 0" }}
                                                >
                                                    <span
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        <BsArrowRight />
                                                        &nbsp; Xem chi tiết
                                                    </span>
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
