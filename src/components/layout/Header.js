
import classNames from 'classnames';
import Button from '../common/Button.js';
import { Link , NavLink} from "react-router-dom";

import { ReactComponent as Icon } from '../../assets/logo_twitter.svg';

import './Header.css';
import { logout } from '../auth/LoginPage/service.js';

function Header({ className , isLogged , onLogout }) {


  async function handleLogoutClick() {

    await logout()
    onLogout()
    

  }

  return (
    <header className={classNames('header', className)}>
      <Link to="/">
      <div className="header-logo">
        {/* <img src={logo} alt="Twitter-React"></img> */}
        <Icon width="32" height="32" />
      </div>
      </Link>
      <nav className="header-nav">
        <NavLink to="/tweets/new" className={({isActive})=>(isActive?"active":"")}>
          New Tweet
        </NavLink>

        <NavLink to="/tweets" className={({isActive})=>(isActive?"active":"") } end>
          Tweets
        </NavLink>

        { isLogged?<Button className="header-button" onClick={handleLogoutClick}>
          Logout
        </Button>:<Button variant="primary" className="header-button">
        Login
      </Button> }
       
      </nav>
    </header>
  );

}

export default Header