import styled from 'styled-components';

const HeaderBlock = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.red};
    height: 50px;
    width: 100vw;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Header() {
  return (
    <HeaderBlock>
      <div>
        <p>Ce site est diffusé dans le cadre d’une expérimentation.</p>
      </div>
    </HeaderBlock>
  );
}
