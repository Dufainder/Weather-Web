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
    background: -webkit-linear-gradient(to right, rgba(0, 102, 166, 0.84),  rgba(72, 186, 222, 0.84));  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(0, 102, 166, 0.84), rgba(72, 186, 222, 0.84));
  
`;

export const InfoTitulo = styled.h3`
     color: rgb(17, 204, 188);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    padding:10px ; 
    left: 100%;
    font-size: 60px;
    text-shadow: -2px -2px 2px #1a6fa8, 2px -2px 2px #cdcde7, -2px 2px 2px #0000DF, 2px 2px 2px #0000DF;
    -webkit-text-stroke: 0.3px black;  
`;

export const Temperatura = styled.div`
      font-size: 30px;
      font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
     
  
`;

export const Clima = styled.div`
  
      
      font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
      font-size: 30px;
    
`;

export const Viento = styled.div`
  font-size: 30px;
`;
export const Nubes = styled.div`
  font-size: 30px;
`;
export const Latitud = styled.div`
  font-size: 30px;
`;
export const Longitud = styled.div`
  font-size: 30px;
`;