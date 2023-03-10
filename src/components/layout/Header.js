
import classNames from 'classnames';

import { Link , NavLink} from "react-router-dom";

import { ReactComponent as Icon } from '../../assets/logo_twitter.svg';

import './Header.css';

import AuthButton from '../auth/AuthButton.js';

function Header({ className  }) {



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
        <AuthButton className="header-button"></AuthButton>
      </nav>
    </header>
  );

}

export default Header