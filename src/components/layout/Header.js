
import classNames from 'classnames';
import Button from '../common/Button.js';

import { ReactComponent as Icon } from '../../assets/logo_twitter.svg';

import './Header.css';

function Header({ className }) {
  return (
    <header className={classNames('header', className)}>
      <div className="header-logo">
        {/* <img src={logo} alt="Twitter-React"></img> */}
        <Icon width="32" height="32" />
      </div>
      <nav className="header-nav">
        <Button variant="primary" className="header-button">
          Login
        </Button>
      </nav>
    </header>
  );

}

export default Header