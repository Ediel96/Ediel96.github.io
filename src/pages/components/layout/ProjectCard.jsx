import { Col } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

export const ProjectCard = ({ title, description, imgUrl, link, linkView }) => {
return (
<Col size={12} sm={6} md={4}>

<div className="card-body bg-card">
    <img className="card-img-top border img-border" src={imgUrl}
        alt="spring boot y angular proyecto personal"/>
    <h5 className="card-title tex-center m-4">{title}</h5>
    <p className="card-text tex-center">{description}</p>
    <div className="row">
        <HashLink to={link} className="co-12 m-2 d-flex justify-content-center">
            <button className="vvd"><span>Repositorio</span></button>
        </HashLink>
        {
            linkView.length !== 0 ? (<HashLink to={linkView} className="co-12 m-2 d-flex justify-content-center">
            <button className="vvd"><span>Ejemplo</span></button>
            </HashLink>) : (<div></div> )
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
