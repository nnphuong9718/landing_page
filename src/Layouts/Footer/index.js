import React from 'react';
import { Row, Col } from 'antd';
import './footer.scss';
import { images } from '../../images';
import { useTranslation } from 'react-i18next';
import { nl2br } from '../../common/functions';
import { Link } from 'react-router-dom';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <Row className="row">
        <Col className="col1" xs={24} lg={14}>
          <div className="footer-logo">
            <img src={images.imgLogo} alt="Coin98 Logo" />
          </div>
          <div
            className="col1__title"
            dangerouslySetInnerHTML={{
              __html: nl2br(t('The simplest and most secure crypto wallet')),
            }}
          ></div>
          <div className="col1__social-container">
            <a href="https://www.facebook.com/coin98wallet">
              <i className="fab fa-facebook-f col1__social-container__icon"></i>
            </a>
            <a href="https://t.me/coin98_wallet">
              <i className="fab fa-telegram-plane col1__social-container__icon"></i>
            </a>
            <a href="https://twitter.com/coin98_wallet">
              <i className="fab fa-twitter col1__social-container__icon"></i>
            </a>
          </div>
        </Col>
        <Col className="col2" xs={24} lg={5}>
          <div className="col2__text">{t('Coin98 Wallet')}</div>
          {/* <div className="col2__text">{t('Brand Assets')}</div> */}
          <Link
            className="col2__text"
            to={{
              pathname: '/',
              hash: '#feature',
            }}
          >
            {t('Feature')}
          </Link>
          <Link className="col2__text" to="/faq">
            {t('FAQ')}
          </Link>
          <a href="https://coin98.zendesk.com/" className="col2__text">
            {t('Help Center')}
          </a>
        </Col>
        <Col className="col3" xs={24} lg={5}>
          <div className="inside">
            <div className="col2__text">{t('Contact')}</div>
            <div className="col2__text">{t('Email')}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
