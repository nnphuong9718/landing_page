import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './header.scss';
import { images } from '../../images';
import MyButton from '../../Components/MyButton';

const Header = (props) => {

  return (
    <div className="header-container">
      <div className="text-heading text-center mt-3 sub-title">40% Off Natural Pampas For The First 50 Fresh College Grads. Order NOW. </div>
      <div className="header-content">
          <Link to="/">
            <img className="logo-container__image" src={images.logoFurtinity} alt="Furtinity Logo"/>
          </Link>
      </div>
    </div>
  );
};

export default withRouter(Header);
