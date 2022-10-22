import { SocialLink } from "./Link"

import  { DiGithubBadge }  from 'react-icons/di';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';


export const SocialLinkNav = () => {
    return (
        <footer className='flex fixed bottom-16 left-14'>
            <SocialLink imageSrc={DiGithubBadge} bgColor='#AFCBFF' />
            <SocialLink imageSrc={AiFillYoutube} bgColor='#B5B9FF' />
            <SocialLink imageSrc={AiOutlineTwitter} bgColor='#87D5B3' />
            <SocialLink imageSrc={SiGmail} bgColor='#FFABAB' />
        </footer>
    )
}