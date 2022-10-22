import './links.css';

interface SocialLinkTypes {
    imageSrc: any;
    bgColor: string;
}

export const SocialLink = (props: SocialLinkTypes) => {
    return (
        <div 
        className='w-20 h-20 link shadow-md'
        style={{
            backgroundColor:`${props.bgColor}`
        }}>
            <img src={props.imageSrc} className='img' />
        </div>
    )
}