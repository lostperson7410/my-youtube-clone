import React, { useState } from "react";
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

    return(
        <HomepageStyled>
            <div className="upperSection">
                <NavBar 
                    OnbarOpen={handleBar}
                />
            </div>
            <div className="lowerSection">
                {
                    isSideBar ?
                    <FullSideBar/>
                    :
                    <MiniSideBar/>
                    // <div className='sidebarSection'>
                    //     <p>Sidebar here</p>
                    // </div>
                }
                <div className='outletSection'>
                    <VideoContent/>
                </div>
            </div>

        </HomepageStyled>
    );
}


export default Homepage;







