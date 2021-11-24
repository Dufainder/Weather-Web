import React from 'react';
import styled from "styled-components";

export const MensajeContainer = styled.div`
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

export const AboutTitulo = styled.h1`

      color: #fff;
      font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
      text-shadow: -2px -2px 2px black, -2px 2px 2px #0000DF;
      -webkit-text-stroke: 0.3px black;  
`;
export const Subtitulo = styled.h4`

      color: #fff;
      font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
      text-shadow: -2px -2px 2px black, -2px 2px 2px #0000DF;
      -webkit-text-stroke: 0.3px black;
`;
export const Parrafo = styled.p`

      color: black;
      font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
      font-size: 20px;
      /* text-shadow: -1px -1px 1px black, -1px 1px 1px black;
      -webkit-text-stroke: 0.3px black; */
`;