import './container.css';

interface ContainerProps {
    children: React.ReactNode;
    className: string;
}

export const Container = (props: ContainerProps) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}