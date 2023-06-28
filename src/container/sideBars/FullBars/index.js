import React, { useState } from "react";
import { FullSideBarStyle } from "./styled";
import { GoHomeFill ,GoVideo} from "react-icons/go"
import { BsFacebook,BsInstagram ,BsLinkedin,BsYoutube} from "react-icons/bs"
import { MdOutlineSubscriptions ,MdVideoLibrary,MdHistory,MdOutlineWatchLater ,MdPlaylistAdd } from "react-icons/md"
import BarCard from "../../../component/card/barCard";
import shortslogo from "../../../assets/svg/youtube-shorts-logo-15251.svg"
import Avatar from "../../../component/avatar";
const FullSideBar = ()=>{
    
    const [mainIndex, setMainIndex] = useState(null);
    const [SecondIndex, setSecondIndex] = useState(null);



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

    const SecondMenu = [
        {
            title:'Library',
            icon:<MdVideoLibrary size={18}/>
        },
        {
            title:'History',
            icon:<MdHistory size={18}/>
        },
        {
            title:'Your videos',
            icon:<GoVideo size={18}/>
        },
        {
            title:'Watch later',
            icon:<MdOutlineWatchLater size={18}/>
        },
        {
            title:'PlayList',
            icon:<MdPlaylistAdd size={18}/>
        },
    ]
    const SubscriptionsUser = [
        {
            title:'Apinun',
            icon:<MdVideoLibrary size={18}/>
        },
        {
            title:'LostperZero',
            icon:<MdHistory size={18}/>
        },
        {
            title:'037HD',
            icon:<GoVideo size={18}/>
        },
        {
            title:'Cat daily',
            icon:<MdOutlineWatchLater size={18}/>
        },
    ]
    const contactMe = [
        {
            title:'linkedin',
            icon:<BsLinkedin size={20}/>,
            link:'https://www.linkedin.com/in/apinun-saartiam-5b388a277/'
        },
        {
            title:'Youtube',
            icon:<BsYoutube size={20}/>,
            link:''
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
        <FullSideBarStyle>
            <div className="MainMenuSection">
                {
                    MainMenu.map((item,index)=>{
                        return(
                            <div className={`menuCard ${index === mainIndex ? 'action':''}`}
                                onClick={()=>{
                                    setMainIndex(index);
                                    setSecondIndex(null);
                                }}
                            >
                                <BarCard
                                    title={item.title}
                                    icon={item.icon}
                                />
                            </div>
                        );
                    })
                }

            </div>
            <div className="SecondMenuSection">
                {
                    SecondMenu.map((item,index)=>(
                        <div className={`menuCard ${index === SecondIndex ? 'action':''}`}
                            onClick={()=>{
                                setMainIndex(null)
                                setSecondIndex(index)
                            }}
                        >
                            <BarCard
                                title={item.title}
                                icon={item.icon}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="SubscriptionsSection" style={{color:'#fff'}}>
                <div className="title">Subscriptions</div>
                <div>
                    {
                        SubscriptionsUser.map((item,index)=>{
                            return(
                                <div className={`menuCard`}>
                                    <BarCard
                                        title={item.title}
                                        icon={<Avatar/>}
                                    />
                                </div>
                            );
                        })
                    }
                </div>

            </div>
            <div className="ContactSection" style={{color:'#fff'}}>
                    {
                        contactMe.map((item,index)=>{
                            return(
                                <div className={`menuContactCard`} onClick={()=>opentab(item.link)}>
                                    {item.icon}
                                </div>
                            );
                        })
                    }
            </div>
            <div style={{color:'white',display:"flex",justifyContent:'center',alignItems:'center',fontSize:'12px'}}>
                Clone By Apinun
            </div>
            <br/>
            
        </FullSideBarStyle>
    )
}



export default FullSideBar;