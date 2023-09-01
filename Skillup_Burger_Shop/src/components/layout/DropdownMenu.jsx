import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function DropdownMenu(props) {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs =  Object.keys(props.loggedUser).length === 0 ? 
    [{ name: "Login", path: "/login" }] : [{name:"Orders", path:"/myorders"},{name:"Logout", path:"/login"},{name:"Profile", path:"/me"}];
    setNavLinks(navs);
  }, [props.loggedUser]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent h-75">
        <div className="container">
          <a className="navbar-brand" href="#">
          
          </a>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              <MenuIcon />
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button" onClick={ () => {
                      if( d.name === "Logout" ) props.logout();
                    } }>
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;