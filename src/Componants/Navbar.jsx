import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://play-lh.googleusercontent.com/lAFgx9P9v6g9CGiJ4yXEghRTGikQg88xuxOg30t_licriW4ODAyXVK4NHBJj-HGILw"
              alt="Logo"
              width={80}
              height={80}
              className="d-inline-block align-text-center"
            />
            Guvi
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
