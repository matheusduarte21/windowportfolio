import { useEffect, useState } from 'react';
import './style.css'

import { FcCalendar } from "react-icons/fc";
export const NavBarHours = () =>{
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
          setHora(new Date().toLocaleTimeString());
        }, 1000); 
    
        
        return () => clearInterval(interval);
      }, []);

      const getDiaSemana = (data:Date) => {
        const diasDaSemana = [
          "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
        ];
        return diasDaSemana[data.getDay()];
      };
    
      const [dia, setDia] = useState(getDiaSemana(new Date()));
    
      useEffect(() => {
        const interval = setInterval(() => {
          setDia(getDiaSemana(new Date()));
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return(
        <div className='containerNavHours'>
           <div className="contentHours">
           {dia}, {hora}
           <FcCalendar style={{marginLeft:'10px'}}/>
           </div>
        </div>
    )
}