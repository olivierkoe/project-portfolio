import React from 'react'
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import ProfileImg from '../assets/images/hero.JPG';
import ProfileInfoItem from '../components/ProfileInfoItem';
import ContactBanner from '../components/ContactBanner';


const ProfilePageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .profile__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .profile__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .profile__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .profile__info__items {
    margin-top: 15rem;
  }
  .profile__info__item {
    margin-bottom: 10rem;    
  }
  .profile__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .profile__subheading {
      font-size: 1.8rem;
    }
    .profile__heading {
      font-size: 2.8rem;
    }
    .profile__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function Profile() {
  return (
    <>
      <ProfilePageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="profile__subheading">
                Bienvenue je suis <span>Olivier KOENIG</span>
              </p>
              <h2 className="profile__heading">Développeur Web</h2>
              <div className="profile__info">
                <PText>
                  Je suis de Montpellier. Une ville charmante et
                  culturel. Depuis ma reconversion professionnel, je suis passionné de code.
                  J'aime passer du temps à jouer tant avec du CSS qu'avec de command MySQL.
                  Mais surtout j'aime faire des sites de qualités.
                  <br /> <br />
                  J'ai commencer à coder depuis 2004 même si j'en ai pas fait dès lors mon métier.
                  Cela me plaisais énormément mais j'avais un emploie d'économiste.
                  Suite à une mission de bureau d'études où j'ai put refaire un peu de code et
                  au COVID19 j'ai décidé de me mettre ma passion pour les nouvelles technologies.
                  J'ai donc fait une formation de Développeur Web et Web Mobile au centre ADRAR à Montpellier.
                  J'aime ce que je fais et sais que j'ai pris la bonne décision!!
                  <br />
                  <br />
                  Le graphique design est une passion, que je développe pour mes clients.
                  Grace aux outils UI/UX qui permetent une customisation total des pages Web.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={ProfileImg} alt="me" />
            </div>
          </div>
          <div className="profile__info__items">
            <div className="profile__info__item">
              <h1 className="profile__info__heading">Education</h1>

              <ProfileInfoItem
                title={["  Scolarité"]}
                items={['Bac  ', 'Lycéee Labourdonnais, ile Maurice']}
              />
              <ProfileInfoItem
                title={['  Technicien réseaux']}
                items={['Bacpro ', 'Centre de formation GRETA, Montpellier']}
              />
              <ProfileInfoItem
                title={[" Tech d'études "]}
                items={[' Bac+1  ', 'Centre de formation AFPA, Béziers']}
              />
              <ProfileInfoItem
                title={["  Tech sup génie clim"]}
                items={['Bac+2  ', 'Centre de formation AFPA, Béziers']}
              />
              <ProfileInfoItem
                title={["  Développeur Web"]}
                items={['Bac+2  ', 'Centre de formation ADRAR, Montpellier']}
              />

            </div>
            <div className="profile__info__item">
              <h1 className="profile__info__heading">Mes savoirs faires</h1>

              <ProfileInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'PHP', 'REACT', 'Symfony']}
              />
              <ProfileInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Docker']}
              />
              <ProfileInfoItem
                title="Design"
                items={['Photoshop', 'Bootstrap', 'Figma', 'XD']}
              />
              <ProfileInfoItem
                title="CMS"
                items={['Wordpress', 'PrestaShop']}
              />
            </div>
            <div className="profile__info__item">
              <h1 className="profile__info__heading">Expériences</h1>

              <ProfileInfoItem
                title={["2022 "]}
                items={['Stage', "juil-sept", 'Montpellier', 'junior developpeur', 'LABSud']}

              />
              <ProfileInfoItem
                title="2019-2021"
                items={['Auto-Entrepreneur', 'Europe', 'Gestion de flottes automobiles']}

              />
              <ProfileInfoItem
                title="2017-2018"
                items={['Economiste', 'Sud Afrique', 'Etudes thermiques et fluides']}
              />
              <ProfileInfoItem
                title="2013-2014"
                items={['Technico-Commercial', 'Montpellier', 'Etudes/commerces', 'ASTEN']}
              />
              <ProfileInfoItem
                title="2010-2012"
                items={['Tech études', 'Paris', 'Etudes en étanchéité', 'SMAC']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </ProfilePageStyles>
    </>
  );
}
