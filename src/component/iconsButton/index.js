import React from "react";
import { IconsButtonStyled } from "./styled";

const IconsButton = (
    {
        icon,
        title,
    }
)=>{
    return(
        <IconsButtonStyled>
            <div className="out_line_border">
                {
                    icon &&
                    <>
                        {
                            icon
                        }
                    </>
                }
            </div>
        </IconsButtonStyled>
    )
}

export default IconsButton;