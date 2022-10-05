import styled from 'styled-components';
import { device } from '../../../styles';

export const BlockFilters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};

  width: 80%;
  height: auto;
  margin: 60px auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const DomainFilter = styled.ul`
  width: 100%;
  padding: 0 30px;
`;

export const ParentFilter = styled.li`
  flex-flow: row wrap;
  min-width: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const HeadingFilter = styled.h2`
  position: relative;
  top: -40px;
  width: auto;
  margin: 0;

  font-size: ${({ theme }) => theme.fontSizes.xstext};
  background-color: ${({ theme }) => theme.colors.darkgray};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 10px;
  border-radius: 30px;

  @media ${device.sm} {
    display: none;
  }
`;

// INDUSTRIES

export const LayerFilter = styled.ul`
    position: absolute;
    top: 85px;
    right: 30px;
    display: flex;
    flex-direction: column;
    height: max-content;
    max-height: 84vh;
    overflow: auto;
    /*width: 11%;*/
    padding-right: 10px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    
    &::-webkit-scrollbar {
        display: none;
`;

// export const IndustryFilter = styled.div``;
