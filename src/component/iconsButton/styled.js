import styled from "styled-components";

export const IconsButtonStyled = styled.div`
    .out_line_border{
        display: flex;
        justify-content: center;
        align-items:center;
        padding: 5px;
        border: 0.5px solid #000;
        border-radius: 5rem;
        :active{
            border: 0.5px solid  hsla(0, 0%, 100%, 0.1) ;
            border-radius: 5rem;
            background:hsla(0, 0%, 100%, 0.1) !important;
            color:#fff!important;
        }
    }

`


