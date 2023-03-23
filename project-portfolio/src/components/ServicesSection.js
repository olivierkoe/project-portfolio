import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Comment je peu vous aidez?" heading="Mes prestations" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web designer"
            desc="Je travail l`ui/ux pour le design de mes sites web ce qui les rends uniques"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Développeur Web"
            desc="Je réalise également des sites Web. Les rends rapides à l'utilisation."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Développeur d'application"
            desc="Je développe des applications pour mobiles et responsives."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
