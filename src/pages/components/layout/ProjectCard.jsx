import { Col } from "react-bootstrap";
import { BoxArrowUpRight, Github } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, link, linkView }) => {
return (
<Col size={12} sm={6} lg={6}>

<div className="project-card">
    <img className="project-card-img" src={imgUrl}
        alt="spring boot y angular proyecto personal"/>
    <div className="project-card-content">
        <h5>{title}</h5>
        <p>{description}</p>
    </div>
    <div className="project-actions">
        <a href={link} target="_blank" rel="noreferrer">
            <Github />
            Repositorio
        </a>
        {
            linkView.length !== 0 ? (
                <a href={linkView} target="_blank" rel="noreferrer">
                    <BoxArrowUpRight />
                    Ejemplo
                </a>
            ) : null
        }
    </div>
</div>


{/* <div className="card proj-imgbx">
    <img src={imgUrl} />
    <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
    </div>
</div> */}


</Col>
)
}
