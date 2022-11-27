interface errorProps {
    text: string;
}

export const ErorrContainer = (props: errorProps) => {
    return (
        <div className="erorr-container">
            <span className="erorr-message">{props.text}</span>
        </div>
    );
};
