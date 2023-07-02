import styled from "styled-components";

export const VideoCardStyled = styled.div`

    width: 100%;
    height: 100%;
    /* background-color: #000; */
    padding: 10px;
    .CardBox{
        display: flex;
        /* margin: 10px; */
        flex-direction: column;
        width: 100%;
        height: 100%;
       .CardVideoSection{
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        /* max-width: 300px; */
        height: 80%;
        /* background-color: #fff; */
        border-radius: 5px;
        overflow: hidden;
        img{
            width: 100%;
            max-height: 210px;
            max-width: 310px;
            object-fit: scale-down;
        }
        :hover{
            border-radius: 0px;
        }
       }
       .CardVideoDescription{
        margin-top: 5px;
        color: #fff;
        height: 40%;
        font-size: 12px;
        .title{
            display: flex;
            column-gap: 5px;
            font-family: 'Roboto', sans-serif;
            .titleText{
                font-weight: 500;
                font-size: 16px;
            }
            .subtitle{
                font-weight: 400;
                font-size: 12px;
                color: rgba(255,255,255, 0.8);
            }
            .description{
                font-weight: 400;
                font-size: 12px;
                color: rgba(255,255,255, 0.8);
            }
        }
        .subtitle{}
        .description{}
        /* background-color: #f1f1f1f1; */
       }
    }
    @media only screen and (max-width: 375px) {
        .CardVideoSection{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
`
