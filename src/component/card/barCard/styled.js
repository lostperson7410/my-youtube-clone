import styled from "styled-components";

export const BarCardStyled = styled.div`
    width: 100%;
    height: 100%;
    .card_container{ 
        display: flex;
        column-gap: 20px;
        &.vertical{
            flex-direction: column;
            .icon_container{
            display: flex;
            justify-content:center;
            align-items: center;
        }
            .title_container{
            font-size: 8px;
            font-weight: 500;
            line-height: 2rem;
        }
        }

        .icon_container{
            display: flex;
            justify-content:center;
            align-items: center;
        }
        .title_container{
            display: flex;
            justify-content:center;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            line-height: 2rem;
        }
    }

`

