import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 50%;
    margin-left: 25%;
    margin-top: 3%;
    margin-bottom: 2%;
    height: 200%;
    padding: 20px;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background: #2193b0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, rgba(0, 102, 166, 0.7),  rgba(72, 186, 222, 0.7));  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(0, 102, 166, 0.7), rgba(72, 186, 222, 0.7));
  `;

export const ContactTitulo = styled.h2`
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    padding:10px ; 
    left: 100%;
    font-size: 55px;
    text-shadow: -2px -2px 2px #1a6fa8, 2px 2px 2px #0000DF;
    -webkit-text-stroke: 0.3px black; 
`;

export const Imagen = styled.div`
  
`;

export const Correo = styled.span`
  font-size: 40px;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const Linkedin = styled.a`
    font-size: 40px;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
      &:hover{
          color: black;
      }
`;

export const Github = styled.a`
    font-size: 40px;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    &:hover{
          color: black;
      }
`;

export const Informacion = styled.div`
  display: flex;
  flex-direction: column;
`;