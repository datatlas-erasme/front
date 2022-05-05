import styled from 'styled-components';

export const PopHover = styled.div``;

export const ToolTip = styled.div`
  background: white;
  width: auto;
  height: auto;
  padding: 20px;
  z-index: 99;

  border-radius: ${({ theme }) => theme.radii[5]};
  box-shadow: 0px 2px 12px -1px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.primary};

  h3 {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
