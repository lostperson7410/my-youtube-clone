import React from 'react'
import { AvatarStyled } from './styled';
import {RxAvatar} from 'react-icons/rx'
function Avatar({
    src
}) {
    

    return(
        <AvatarStyled>
            <div className='avatar_section'>
                {
                    src ? 
                    <img alt='avatar' src={src} />
                    :
                    <RxAvatar size={20}/>
                }
            </div>
        </AvatarStyled>
    );


}

export default Avatar;