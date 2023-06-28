import React from 'react'
import { VideoCardStyled } from './styled'
import Avatar from '../avatar';

function VideoCard({
    src,
    title,
    name,
    views,
}) {
    
    return(
        <VideoCardStyled>
            <div className='CardBox'>
                <div className='CardVideoSection'>
                    <img alt='video' src={src}/>
                </div>
                <div className='CardVideoDescription'>
                    <div className='title'>
                        <div>
                            <Avatar/>
                        </div>
                        <div>
                            <div className='titleText'>{title}</div>
                            <div className='subtitle'>{name}</div>
                            <div className='description'>{views}</div>
                        </div>
                    </div>
                </div>
            </div>
        </VideoCardStyled>
    )
}

export default VideoCard;

