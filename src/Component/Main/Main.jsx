import React, { useState } from "react";
import "./Main.css";
import { AnimatePresence, motion } from "framer-motion";
import { myProjects } from "./MyProjects";
const Main = () => {
    const [active, setActive] = useState("all");
    const [projectData, setProjectData] = useState(myProjects);
    const [filteredData, setFilteredData] = useState(myProjects);
    const handleEvent = (category) => {
        setActive(category);
        if (category === "all") {
            setFilteredData(projectData);
        } else {
            const filtered = projectData.filter((item) =>
                item.category.includes(category)
            );
            setFilteredData(filtered);
        }
    };
    return (
        <div className="contain portfolio" id="projects">
            <div className="right_main">
                <button
                    onClick={() => handleEvent("all")}
                    className={active === "all" ? "active" : null}
                >
                    All Projects
                </button>
                <button
                    onClick={() => handleEvent("css")}
                    className={active === "css" ? "active" : null}
                >
                    Html & Css
                </button>
                <button
                    onClick={() => handleEvent("js")}
                    className={active === "js" ? "active" : null}
                >
                    Javascript
                </button>
                <button
                    onClick={() => handleEvent("React")}
                    className={active === "React" ? "active" : null}
                >
                    React
                </button>
                <button
                    onClick={() => handleEvent("team")}
                    className={active === "team" ? "active" : null}
                >
                    Team Work
                </button>
            </div>
            <div className="left_main">
                <AnimatePresence>
                    {filteredData.map((x, ind) => (
                        <motion.div
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{ type: "spring", damping: 8, stiffness: 50 }}
                            className="card"
                            key={ind}
                        >
                            <img src={x.img} alt="" width="250px" height={200} />
                            <div className="content" style={{ width: "250px" }}>
                                <h1 className="tilte">{x.title}</h1>
                                <p className="subtitle">{x.description}</p>
                                <div className="icon">
                                    <div className="marks">
                                        <a href={x.repo}>
                                            <i className="fa-solid fa-link"></i>
                                        </a>
                                        <a href={x.demo} target="blank">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Main;
