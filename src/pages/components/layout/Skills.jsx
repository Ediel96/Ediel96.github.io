
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../../assets/img/color-sharp.png";

// icon front-end
import imgHtml from '../../../assets/eddi/img/icon/html.png';
import imgCss from '../../../assets/eddi/img/icon/css.png';
import imgJavascript from  '../../../assets/eddi/img/icon/javascript.png';
import imgAngular from '../../../assets/eddi/img/icon/angular2.png';
import imgReact from '../../../assets/eddi/img/icon/react2.png';

//icon back-end
import imgPython from '../../../assets/eddi/img/icon/python.png';
import imgNode from '../../../assets/eddi/img/icon/node2.png';
import imgSpringBoot from  '../../../assets/eddi/img/icon/spring-boot.png';
import imgJava from '../../../assets/eddi/img/icon/java.png'


export const Skills = () => {
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

  const skills = {
        frontEnd:
        [
            {
                title:'HTML', 
                level:'Intermedio',
                icon: imgHtml
            },
            {
                title:'CSS', 
                level:'Intermedio',
                icon: imgCss
            },
            
            {
                title:'Javascript', 
                level:'Intermedio',
                icon: imgJavascript
            },
            {
                title:'Angular', 
                level:'Intermedio',
                icon: imgAngular
            },{
                title:'React', 
                level:'Basico',
                icon: imgReact
            },
                    
        ],
        backEnd:[
            {
                title:'Python', 
                level:'Basico',
                icon: imgPython
            },
            {
                title:'Nodejs', 
                level:'Intermedio',
                icon:imgNode
            },{
                title:'Spring Boot', 
                level:'Intermedio',
                icon:imgSpringBoot
            },{
                title:'Java', 
                level:'Intermedio',
                icon:imgJava
            },
        ]
    }

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
