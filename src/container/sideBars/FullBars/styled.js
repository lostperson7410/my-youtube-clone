import styled from "styled-components";

export const FullSideBarStyle = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    /* height: 100vh; */
    max-width: 200px;
    overflow: hidden;
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

    .MainMenuSection{
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
            :active{
                background-color: hsla(0, 100%, 100%, 0.1) ;
            }
            &.action{
                background-color: hsla(0, 0%, 100%, 0.2) ;
            }

        }
    }
    .SecondMenuSection{
        /* height: 100px; */
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
            :active{
                background-color: hsla(0, 100%, 100%, 0.1) ;
            }
            &.action{
                background-color: hsla(0, 0%, 100%, 0.2) ;
            }
        }
    }
    .SubscriptionsSection{
        max-height: 200px;
        margin: 10px;
        border-bottom: hsla(0, 0%, 100%, 0.2) solid 0.5px;
        .title{
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            font-size: 12px;
        }
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
            :active{
                background-color: hsla(0, 100%, 100%, 0.1) ;
            }

        }
    }
    .ContactSection{
        display: flex;
        justify-content: center;
        height: 50px;
        margin: 10px;
        border-bottom: hsla(0, 0%, 100%, 0.2) solid 0.5px;
        column-gap: 4px;
        .menuContactCard{
            display: flex;
            border : 1px solid #000 ;
            border-radius: 8px;
            color: #fff;
            /* column-gap: 10px; */
            height: 28px;
            padding: 5px 10px;
            align-items: center;
            :hover{
                background-color: hsla(0, 0%, 100%, 0.2) ;

            }
            :active{
                background-color: hsla(0, 100%, 100%, 0.1) ;
            }

        }
    }

`


