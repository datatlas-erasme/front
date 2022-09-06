import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';
import px2vw from '../../../../utils/px2vw';

export const CheckBoxTitle = styled.h4`
  margin: 10px 0;
  align-self: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${px2vw(40)};
  @media ${device.lg} {
    font-size: ${({ theme }) => theme.fontSizes.paragraphe};
  }
`;

export const MobileSwitch = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xstext};
  h4 {
    padding: 10px;
  }
`;

export const CheckBoxTitle = styled.h4`
  margin: 10px 0;
  align-self: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xstext};
  @media ${device.lg} {
    font-size: ${({ theme }) => theme.fontSizes.paragraphe};
  }
`;

export const MobileSwitch = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xstext};
  h4 {
    padding: 10px;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin: 10px;

  @media ${device.lg} {
    margin: 10px auto;
  }
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.red};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
