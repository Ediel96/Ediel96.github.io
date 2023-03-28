import imgPerfil from  '../../../assets/eddi/img/pefil-platzi.jpg';

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

//img project
import imgDocker from '../../../assets/eddi/img/project/docker.jpg';
import imgSpringAngular from '../../../assets/eddi/img/project/Spring-MVC-AngularJS.png'

//logo icon
import logo from '../../../assets/eddi/img/logo.png';

export const profile = {
    social:{
        linkedin: 'https://www.linkedin.com/in/hamilton-acevedo-5b6990141/',
        github: 'https://github.com/Ediel96',
    },
    logo : logo,
    info : {
        name : 'Hamilton Acevedo',
        title : 'Yo soy desarrollador Full Stack',
        description : 'Soy Ingeniero de sistemas con 4 años experiencia en el mundo desarrollo de la información, una persona apasionada por aprender tecnologías nuevas, me gustan los retos en donde puedo mejorar como persona y profesionalmente , soy full stack developer tengo experiencia con tecnologías como spring boot y angular.',
        role : ["Back-end",  "Frond-end"],
        img :imgPerfil
    },
    skills:{
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
    },
    projects:[
        {
            id:1,
            title:'Registrar se usuario con lo autenticación de JWT.', 
            description: 'Es una aplicación con registro de usuarios donde se puede actualizar, agregar y eliminar y el backend este hecho en spring boot y el front en angular.',
            imgUrl: imgSpringAngular,
            link:'https://github.com/Ediel96/udemy_spring_boot_parcticando',
            linkView: ''
        },
        {
            id:2,
            title:'Docker', 
            imgUrl: imgDocker,
            description: 'Este proyecto tiene como objetivo un ambiente de contenedor hecho en Docker para el funcionamiento del backend con la base de datos en él, para realizar su respectivo servicio donde el usuario puede utilizarlo de la mejor manera.',
            link:'https://github.com/Ediel96/Spring-bootApi-Udemy',
            linkView: ''
        },
    ],
    experience:[
        {
            title:'Analista de sistemas intermedio',
            location:'Asesoftware',
            description:'A lo largo de mi estadía en la empresa me ha permitido participar en dos proyectos dando me la oportunidad de aprender y mejorar mi experiencia en el desarrollo web en la tecnología como angular, spring boot y manejo de control de versiones.',
            year : 2023
        },{
            title:'Desarrollador Web',
            location:'Spira',
            description:'En lo que estuve en el cargo de desarrollador web tuve grandes retos participar en un proyecto individuales manejando tecnología como php con laravel y angular para aplicación PWA.',
            year : 2019
        },{
            title:'Aprendiz',
            location:'Intergrupo',
            description:'Me permitió aprender sobre el mundo del desarrollo donde conocí herramienta para el desarrollo de tecnología como Angular, Xamarin, .NetCore y React, donde me abrió a un mundo de tecnología y aprendizaje para mi futuro.',
            year : 2018
        }
    ],
    education:[
        {
            title:'Ingeneria de Sistemas',
            location:'ECCI',
            description:'Ingeniería de Sistemas fue diseñado para concebir, diseñar, implementar y operar sistemas y proyectos de TI basados en software, orientados a la solución de problemáticas específicas de los sectores públicos o privados, que demanden la implementación de alternativas de mejoramiento o producción de conocimiento frente a los procesos que desarrollan.',
            year : 2021
        },
        {
            title:'Tecnólogo en Desarrollo Informático',
            location:'ECCI',
            description:'Tecnología en Desarrollo Informático será capaz de planear, analizar, diseñar y desarrollar sistemas de información, mantener y configurar equipos de cómputo e implementar redes de computadores y gestionar Sistemas deTecnologías de la Información para aplicación comercial, industrial y de ingeniería que cumplan con los requerimientos delas organizaciones y los estándares internacionales.',
            year : 2018
        }
    ],
    contact :{
        name: 'Hamilton Acevedo',
        email:'h.amiltone.diel@gmail.com'
    }

}