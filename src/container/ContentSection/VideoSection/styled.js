import styled from "styled-components";

export const VideoContentStyled = styled.div`

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0);

    .flex_Container{
       
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .grid_layout{
        display: grid;
        width: 100%;
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        /* background-color: greenyellow; */
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        .itemBox{
            display: flex;
            justify-content: center;
            align-items:center;
            /* background-color: blue; */
            height: 250px;
        }
    }


`