import React from "react";
import { MiniSideBarStyle } from './styled'
import { GoHomeFill } from "react-icons/go"
import { BsFacebook,BsInstagram ,BsLinkedin} from "react-icons/bs"
import { MdOutlineSubscriptions } from "react-icons/md"
import BarCard from "../../../component/card/barCard";
import shortslogo from "../../../assets/svg/youtube-shorts-logo-15251.svg"
const MiniSideBar = ()=>{
    
  


    const MainMenu = [
        {
            title:'Home',
            icon:<GoHomeFill size={18}/>
        },
        {
            title:'Shorts',
            icon: < img width={18} height={18} alt="shorts" src={shortslogo}/>
        },
        {
            title:'Subscriptions',
            icon:<MdOutlineSubscriptions size={18}/>
        },
    ];

    const contactMe = [
        {
            title:'linkedin',
            icon:<BsLinkedin size={20}/>,
            link:'https://www.linkedin.com/in/apinun-saartiam-5b388a277/'
        },
        {
            title:'Instagram',
            icon:<BsInstagram size={20}/>,
            link:'https://www.instagram.com/apn_sfilm/'
        },
        {
            title:'Facebook',
            icon:<BsFacebook size={20}/>,
            link:'https://web.facebook.com/kunchecksound'
        },
    ]

    const opentab = (link)=>{
        window.open(link);
    }

    return(
        <MiniSideBarStyle>
            <div className="MainMenuSection">
                {
                    MainMenu.map((item,index)=>{
                        return(
                            <div className={`menuCard`}>
                                <BarCard
                                    vertical
                                    title={item.title}
                                    icon={item.icon}
                                />
                            </div>
                        );
                    })
                }

            </div>
            <div className="ContactSection" style={{color:'#fff'}}>
                    {
                        contactMe.map((item,index)=>{
                            return(
                                <div className={`menuContactCard`} onClick={()=>opentab(item.link)}>
                                    <BarCard
                                        // title={item.title}
                                        icon={item.icon}
                                    />
                                </div>
                            );
                        })
                    }
            </div>


        </MiniSideBarStyle>
    )
}



export default MiniSideBar;