import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Olivier KOENIG</h1>
          <PText>
            Développeur Web sur montpellier, France.
            Je cherche à réaliser des sites web qui sont conforme au besoin du client et agréable à l'utilisateur quelque sois le support.
            J'aime développé avec des logiciel tels que VSCode, fileZilla, Eclipse....
            J'utilises des FrameWorks tels que Symfony et Réact, des CMS comme Wordpress et PrestaShop.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Accueil',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Profile',
                path: 'Profile',
              },
              {
                type: 'Link',
                title: 'Projets',
                path: '/projets',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'telephone',
                path: 'tel:+33 6 19 11 53 30',
              },
              {
                title: 'olikoen@gmail.com',
                path: 'mailto:olikoen@gmail.com',
              },
              {
                title: '4Thunes, Montpellier, France',
                path: './assets/images/mapMontpellier.png',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2023 - Olivier KOENIG | Designed By{' 4Thunes'} inspired by
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
            </a>{' webcifar thanks for the courses'}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
