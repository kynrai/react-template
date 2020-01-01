import * as React from 'react';
import * as ROUTES from 'src/routes/routes';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to={ROUTES.HOME}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navbar__link--active" className="navbar__link" to={ROUTES.LOGIN}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navbar__link--active" className="navbar__link" to={ROUTES.PROTECTED}>
            Protected
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
