import React from 'react'
import { Parrafo, Subtitulo, MensajeContainer, AboutTitulo } from './AboutSelements'


export default function About() {
    return (

        <>  
            <MensajeContainer>
                   <AboutTitulo>Holaaa!!!</AboutTitulo>
                   <Subtitulo>Mi nombre es Dufainder ! voy hablarte acerca de este proyecto!! </Subtitulo>
                   <Parrafo> El objetivo de esta pagina es mostar las temperaturas de ciudades de distintos paises usando una API, tambien
                       Mostrar informacion extra de la ciudad dandole click al nombre de la Ciundad dentro de la "Card". 
                       Este proyecto fue una experiencia que tuve al realizar el HENRY BOOTCAMP, con el fin de poner en practica 
                       el uso de las tecnologias aprendidas en el Modulo Front-End del curso Full-Stack Developer. las tecnologías Front-End utilizados
                       para el desarrollo de esta pagina son: react, react-router-dom, styled-components, framworks, CSS, HTML
                       se resalta que en este proyecto era libre definir los estilos y su solucion no usaba styled-components. Todos 
                       estos cambios nuevos fueron añadidos por mi autoria. Contactame!! dando click en contact.
                   </Parrafo>
            </MensajeContainer>
        </>
    )
}
