import './scene.scss';

import useKeyPress from '../../hooks/usekeypress';

export const Scene = () => {
    const onKeyDown = (e: any) => {
        if (e.metaKey && e.which === 70) {
            // return (
            //     <div>
            //         <span>Testing</span>
            //     </div>
            // )
            console.log('worked');
            
        }
    }

    const happyPress: boolean = useKeyPress("h");
    const sadPress: boolean = useKeyPress("s");
    const robotPress: boolean = useKeyPress("r");
    const foxPress: boolean = useKeyPress("f");

    function addListener () {
        document.addEventListener('keypress', onKeyDown);
        console.log('worked');
        
    }

    return (
    <div className='scene' >
        <div>h, s, r, f</div>
        <div>
            {happyPress && "😊"}
            {sadPress && "😢"}
            {robotPress && "🤖"}
            {foxPress && "content drawer"}
        </div>
    </div>
    );
}