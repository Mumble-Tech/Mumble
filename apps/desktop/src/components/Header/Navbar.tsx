import './navbar.scss';

export const Navbar = () => {
    return (
        <div className="nav">
            <span className="nav-item--active">
                <a>Editor</a>
            </span>
            <span className="nav-item">
                <a>Live</a>
            </span>
        </div>
    );
};
