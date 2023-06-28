
import React from "react";
import { BarCardStyled } from "./styled";

const BarCard = ({
    vertical,
    title,
    icon,
}) =>{


    return(
        <BarCardStyled >
            <div className={`card_container ${vertical ? 'vertical':''}`}>
                {
                    icon &&  
                    <div className="icon_container">
                        {icon}
                    </div>
                }
                {
                    title && 
                    <div  style={{ fontFamily: 'Roboto, sans-serif',fontSize:'12 px',fontWeight:'500'  }} className="title_container">
                        {title}
                    </div>
                }
            </div>
        </BarCardStyled>
    )
};

 export default BarCard;
