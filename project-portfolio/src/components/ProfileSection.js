import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import ProfileImg from '../assets/images/hero.JPG';

const ProfileSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .profileSection__left,
  .profileSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .profileSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .profileSection__left {
      flex: 4;
    }
    .profileSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .profileSection__left,
    .profileSection__right {
      width: 100%;
    }
    .profileSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .profileSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function profileSection() {
  return (
    <ProfileSectionStyles>
      <div className="container">
        <div className="profileSection__left">
          <SectionTitle
            subheading="Je me présente"
            heading="A propos"
          />
          <PText>
            Je suis freelance Développeur Web et Web Mobile sur Montpellier, ou je réalise de site Web professionnelement.
            J'aime rendre un site unique et grâce au outils IU/UX j'essaye de mettre en forme les idées de du client,
            tout en gardant une navigation fluide et responsive.
          </PText>
          <div className="profileSection__buttons">
            <Button btnText="Projets" btnLink="/Projets" />
            <Button btnText="Voir plus" btnLink="/Profile" outline />
          </div>
        </div>
        <div className="profileSection__right">
          <img className="profileImg" src={ProfileImg} alt="Img" />
        </div>
      </div>
    </ProfileSectionStyles>
  );
}
