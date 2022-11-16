import './navbar.scss';

export const Navbar = () => {
  return (
    <div className="nav">
      <span className="nav-link--active">Editor</span>
      <span className="nav-link">Live</span>
    </div>
  );
};
