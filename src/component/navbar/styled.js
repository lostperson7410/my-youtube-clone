import styled from "styled-components";

export const NavbarStyled = styled.div`
    z-index: 10 ;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    .icon-bar{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
        /* padding: 30px; */
        .TitleContainer{
            display: flex;
            width: fit-content;
            .Title_text{
                font-family: 'Gothic A1', sans-serif;                
                font-size:25px;
                font-weight: 500;
                text-align:center;
            }
        }
    }
    .avatar-bar{
        column-gap: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

