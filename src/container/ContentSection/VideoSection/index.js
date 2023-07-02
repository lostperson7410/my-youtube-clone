import React from "react";
import { VideoContentStyled } from "./styled";
import VideoCard from "../../../component/videoCard";


const VideoContent = () =>{
    const Mockup = [
        {
            src:'https://i.ytimg.com/vi/82zWdrmnKME/maxresdefault.jpg',
            title:'Free Thumbnail',
            name:'MeeO',
            views:'11k views 1 week ago',
        },
        {
            src:'https://blog.photoadking.com/wp-content/uploads/2021/02/89-1-1024x576.jpg',
            title:'Thumbnail Size',
            name:'LostperZERO',
            views:'130k views 1 years ago',
        },
        {
            src:'https://cdn.pixabay.com/photo/2022/09/08/04/04/thumbnail-7439988_1280.png',
            title:'Watch me',
            name:'MeeO',
            views:'150k views 5 week ago',
        },
        {
            src:'https://marketplace.canva.com/EAFFt_DccoA/1/0/1600w/canva-colorful-freelancer-youtube-thumbnail-ucA52BZ7Bqk.jpg',
            title:'How To BECOME A FREELANCER',
            name:'MeeO',
            views:'10m views 8 week ago',
        },
        {
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ugc-0YBhwsRC8qZylah7pJ9f5-sI3eO9xQ&usqp=CAU',
            title:'AS a business',
            name:'MeeO',
            views:'102k views 2 week ago',
        },
        {
            src:'https://content.wepik.com/statics/8315911/preview-page0.jpg',
            title:'BANG!!',
            name:'MeeO',
            views:'1000k views 1 day ago',
        },
        {
            src:'https://i.ytimg.com/vi/82zWdrmnKME/maxresdefault.jpg',
            title:'Free Thumbnail',
            name:'MeeO',
            views:'11k views 1 week ago',
        },
        {
            src:'https://blog.photoadking.com/wp-content/uploads/2021/02/89-1-1024x576.jpg',
            title:'Thumbnail Size',
            name:'LostperZERO',
            views:'130k views 1 years ago',
        },
        {
            src:'https://cdn.pixabay.com/photo/2022/09/08/04/04/thumbnail-7439988_1280.png',
            title:'Watch me',
            name:'MeeO',
            views:'150k views 5 week ago',
        },
        {
            src:'https://marketplace.canva.com/EAFFt_DccoA/1/0/1600w/canva-colorful-freelancer-youtube-thumbnail-ucA52BZ7Bqk.jpg',
            title:'How To BECOME A FREELANCER',
            name:'MeeO',
            views:'10m views 8 week ago',
        },
        {
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ugc-0YBhwsRC8qZylah7pJ9f5-sI3eO9xQ&usqp=CAU',
            title:'AS a business',
            name:'MeeO',
            views:'102k views 2 week ago',
        },
        {
            src:'https://content.wepik.com/statics/8315911/preview-page0.jpg',
            title:'BANG!!',
            name:'MeeO',
            views:'1000k views 1 day ago',
        },
    ]

    return(
        <VideoContentStyled>
            <div className="flex_Container">
                <div className="grid_layout">
                        {
                            Mockup.map((item)=>(
                                <div className="itemBox">
                                    <VideoCard
                                        src={item.src}
                                        title={item.title}
                                        name={item.name}
                                        views={item.views}
                                    />
                                </div>
                            ))
                        }
                </div>
            </div>

        </VideoContentStyled>
    );
}


export default VideoContent;