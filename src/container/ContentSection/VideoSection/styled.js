import styled from "styled-components";

export const VideoContentStyled = styled.div`

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0);
    overflow: auto;
    :hover{
        overflow-y: auto;
    }

    /* custom scrollbar */
    ::-webkit-scrollbar {
    width: 20px;
    }

    ::-webkit-scrollbar-track {
    background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 8px solid transparent;
    background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
    }

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
        grid-template-columns: repeat(5,1fr);
        .itemBox{
            display: flex;
            justify-content: center;
            align-items:center;
            /* background-color: blue; */
            height: 250px;
        }
    }

    @media only screen and (max-width: 1400px) {
        .grid_layout{
            grid-template-columns: repeat(3,1fr);
        }
    }
    @media only screen and (max-width: 930px) {
        .grid_layout{
            grid-template-columns: repeat(2,1fr);
        }
    }
    @media only screen and (max-width: 700px) {
        .grid_layout{
            grid-template-columns: repeat(1,1fr);
        }
    }
    @media only screen and (max-width: 375px) {
        .grid_layout{
            grid-template-columns: repeat(1,1fr);
        }
    }
`