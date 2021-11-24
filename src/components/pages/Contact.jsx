import React from 'react'
import { Correo, Github, Linkedin, Informacion, Imagen, ContactTitulo, InfoContainer } from './ContactSelement';

export default function Contact() {
    return (
        <InfoContainer>
            <ContactTitulo> NO DUDES en CONTACTARME !! </ContactTitulo>
            <Imagen></Imagen>
            <Informacion>
                <Correo><i class="fas fa-envelope"></i>   dufainder@gmail.com</Correo>
                <Linkedin href='https://www.linkedin.com/in/dufainder-bedoya-068164221/'><i class="fab fa-linkedin"></i>   linkedin.com/in/dufainder</Linkedin>
                <Github href='https://github.com/Dufainder'><i class="fab fa-github"></i>   github.com/Dufainder</Github>
            </Informacion>
        </InfoContainer>
    )
}
