import meter1 from "../../../assets/img/meter1.svg";
import meter2 from "../../../assets/img/meter2.svg";
import meter3 from "../../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../../assets/img/arrow1.svg";
import arrow2 from "../../../assets/img/arrow2.svg";
import colorSharp from "../../../assets/img/color-sharp.png"

export const Skills = ({skills}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const listSkills = [skills];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {
                            listSkills.length === 0 ? (
                                <p>no tiene contenido</p>
                            ):(
                            
                                listSkills.map((skill, index) => {

                                    return(
                                        <div className="row" key={index}>
                                            <div className="col-lg-6 col-12" >
                                                <h3 className="mb-4">Back-end</h3>
                                                <div className="row">
                                                {
                                                    skill.backEnd.map(( skills, id) => {
                                                        return(
                                                            <div className="col-6" key={id}>
                                                                <img className="img-w" src={skills.icon} alt="" />
                                                                <h5>{skills.title}</h5>
                                                                <p>{skills.level}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </div> 
                                            </div>
                                            <div className="col-lg-6 col-12" >
                                                <h3 className="mb-4">Front-end</h3>
                                                <div className="row">
                                                {
                                                    skill.frontEnd.map(( skills, id) => {
                                                        return(
                                                            <div className="col-6" key={id}>
                                                                <img className="img-w" src={skills.icon} alt="" />
                                                                <h5>{skills.title}</h5>
                                                                <p>{skills.level}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
