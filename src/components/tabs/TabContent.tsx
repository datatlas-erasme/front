import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { MarketDealer, MarketProducer } from '../../assets/svg/types';
import { queryIcon } from '../../utils/queryIcon';
import { device } from '../../styles';

type TabContentProps = {
  getStand: any;
  data: string;
  onClick: (item: any) => void;
};

const StandMarketStyle = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding: 15px 0;
  cursor: pointer;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
  h5 {
    flex: 14;
    font-size: ${({ theme }) => theme.fontSizes.paragraphe};
    font-weight: ${({ theme }) => theme.fontWeights[5]};
    border-bottom: none;
  }
  span {
    flex: 1;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex: 100%;
    li {
      display: flex;
      width: auto;
      padding: 5px;
      p {
        font-size: 10px;
        padding-left: 5px;
      }
      img {
        width: auto;
        height: 15px;
      }
    }
  }
  @media ${device.lg} {
    padding: 20px 100px;
    h5 {
      flex: 10;
      font-size: ${({ theme }) => theme.fontSizes.xstitle};
    }
    span {
      flex: 1;
    }
    ul {
      li {
        padding-left: 5px;
        p {
          font-size: ${({ theme }) => theme.fontSizes.xstext};
        }
      }
      img {
        width: auto;
        height: 20px;
      }
    }
  }
`;

const TabContent: React.FC<TabContentProps> = ({ getStand, data, onClick }) => {
  return getStand.map((info, i) =>
    info.properties.adresse.includes(data[2]) ? (
      <StandMarketStyle key={i} onClick={() => onClick(info)}>
        <div>
          {info.properties.type === 'Revendeur du marché (Achète des produits et les revend)' ? (
            <MarketDealer />
          ) : info.properties.type === 'Producteur du marché (Cultive ses produits et les vend)' ? (
            <MarketProducer />
          ) : (
            ''
          )}
        </div>
        <h5>{info.properties.nom}</h5>
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <ul>
          {info.properties.produits.map((p) => (
            <li key={p}>
              <img src={queryIcon(p)} alt={p} />
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </StandMarketStyle>
    ) : null,
  );
};

export default TabContent;
