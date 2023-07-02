import React, { useEffect, useState } from "react";
import { HomepageStyled } from "./styled";
import NavBar from "../../../component/navbar";
import FullSideBar from "../../sideBars/FullBars";
import MiniSideBar from "../../sideBars/MiniBars"
import VideoContent from "../../ContentSection/VideoSection";



const Homepage= () => {

    const [isSideBar, setisSideBar] = useState(true)

    const handleBar = ()=>{
        setisSideBar(!isSideBar)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <HomepageStyled>
            <div className="upperSection">
                <NavBar 
                    OnbarOpen={handleBar}
                />
            </div>
            <div style={{color:'white'}}>
            </div>
            <div className="lowerSection">
                {
                    screenWidth > 550  ?

                    isSideBar ?
                    
                    <FullSideBar/>:<MiniSideBar/>
                    :
                    isSideBar ?
                    <MiniSideBar/>: 
                    <div style={{position:'absolute',zIndex:'9999'}}>
                        <FullSideBar/>
                    </div>
                }
                <div className='outletSection'>
                    <VideoContent/>
                </div>
            </div>

        </HomepageStyled>
    );
}


export default Homepage;







