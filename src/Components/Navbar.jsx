import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as ProfileIcon } from '../assets/svg/personOutlineIcon.svg';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          {/*Nav Link use NavLink   */}
          <NavLink to='/' className='navbarListItem'>
            {({ isActive }) => (
              <>
                <ExploreIcon
                  fill={isActive ? '#2c2c2c' : '#8f8f8f'}
                  width='36px'
                  height='36px'
                />
                <p
                  className={
                    isActive ? 'navbarListItemNameActive' : 'navbarListItemName'
                  }
                >
                  Explore
                </p>
              </>
            )}
          </NavLink>
          {/* NAv link use navigate and pathMatchRoute */}
          <li className='navbarListItem' onClick={() => navigate('/offers')}>
            <OfferIcon
              fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width='36px'
              height='36px'
            />
            <p
              className={
                pathMatchRoute('/offer')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offer
            </p>
          </li>
          <NavLink className='navbarListItem' to='/profile'>
            {({ isActive }) => (
              <>
                <ProfileIcon
                  fill={isActive ? '#2c2c2c' : '#8f8f8f'}
                  width='36px'
                  height='36px'
                />
                <p
                  className={
                    isActive ? 'navbarListItemNameActive' : 'navbarListItemName'
                  }
                >
                  Profile
                </p>
              </>
            )}
          </NavLink>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
