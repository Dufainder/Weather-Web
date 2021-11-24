import React from 'react'
import { TempContainer, TemperaturaMin, TemperaturaMax, IconoClima, NameCity, ButtonX, ButtonxContainer, CardContainer} from './CardSelements'

export default function Card({max,min,name,img,onClose,id}) {
    return (
        <>
           <CardContainer>

               <ButtonxContainer>
                   <ButtonX onClose={onClose}/>
               </ButtonxContainer>
               
               <NameCity name={name} id={id}/>
               <IconoClima img={img}/>
               
               <TempContainer>
                 <TemperaturaMax max={max}/>
                 <TemperaturaMin min={min}/>
               </TempContainer>

           </CardContainer>
            
        </>
    )
}
