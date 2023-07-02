import styled from "styled-components";

export const MiniSideBarStyle = styled.div`
    background-color: #000000;
    width: 100%;
    max-width: 60px;
    min-height: 100vh;
    overflow-y: unset;
    .MainMenuSection{
        /* margin: 10px; */
        border-bottom: hsla(0, 0%, 100%, 0.2) solid 0.5px;
        .menuCard{
            display: flex;
            border : 1px solid #000 ;
            border-radius: 8px;
            color: #fff;
            padding: 5px;
            align-items: center;
            :hover{
                background-color: hsla(0, 0%, 100%, 0.2) ;

            }
            :active{
                background-color: hsla(0, 100%, 100%, 0.1) ;
            }

        }
    }
    .SecondMenuSection{
        margin: 10px;
        border-bottom: hsla(0, 0%, 100%, 0.2) solid 0.5px;
        .menuCard{
            display: flex;
            border : 1px solid #000 ;
            border-radius: 8px;
            color: #fff;
            column-gap: 10px;
            height: 28px;
            padding: 5px 10px;
            align-items: center;
            :hover{
                background-color: hsla(0, 0%, 100%, 0.2) ;

            }
            &.action{
                background-color: hsla(0, 0%, 100%, 0.2) ;
            }
        }
    }
    .SubscriptionsSection{
        height: 200px;
        margin: 10px;
        border-bottom: hsla(0, 0%, 100%, 0.2) solid 0.5px;
        .menuCard{
            display: flex;
            border : 1px solid #000 ;
            border-radius: 8px;
            color: #fff;
            column-gap: 10px;
            height: 28px;
            padding: 5px 10px;
            align-items: center;
            :hover{
                background-color: hsla(0, 0%, 100%, 0.2) ;

            }
            &.action{
                background-color: hsla(0, 0%, 100%, 0.2) ;
            }

        }
    }
    .ContactSection{
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: hsla(0, 0%, 100%, 0.2) solid 0.5px;
        column-gap: 4px;
        .menuContactCard{
            margin: 5px 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border : 1px solid #000 ;
            border-radius: 8px;
            color: #fff;
            /* column-gap: 10px; */
            :hover{
                background-color: hsla(0, 0%, 100%, 0.2) ;
            }
            :active{
                background-color: hsla(0, 100%, 100%, 0.1) ;
            }
        }
    }

`


