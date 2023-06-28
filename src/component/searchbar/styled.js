import styled from "styled-components";

export const SearchBarStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* column-gap: 5px; */
    /* input{
        text-align: center;
    } */
    .shit{
        width: 100%;
        color: #fff;
        padding: 5px 10px;
        border: 0.5px solid  hsla(0, 0%, 100%, 0.1) ;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        background-color: #000;
        :focus{
            /* outline:none!important; */
            box-shadow: inset -3px 4px rgb
        }
    }
    .label-icon{
        padding: 2px 10px;
        border: 0.5px solid  hsla(0, 0%, 100%, 0.1) ;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        background-color: hsla(0, 0%, 100%, 0.1)
    }
`