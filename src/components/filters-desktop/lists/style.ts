import styled from 'styled-components';

export const ListSelect = styled.ul`
  display: grid;
  grid-template-columns: min-content min-content;
  column-gap: 5px;
  row-gap: 5px;
  margin-bottom: 20px;
`;

export const ListIconButton = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-bottom: 20px;
`;

export const ListCheckbox = styled.ul`
  width: 80%;
  font-size: ${({ theme }) => theme.fontSizes.xstext};
  max-height: 300px;
  margin-bottom: 20px;

  ul {
    padding-left: 0;
  }

  input[type='checkbox'] {
    width: 17px;
    height: 17px;
    border: 2px solid #828282;
    margin-right: 5px;
  }

  li {
    padding-bottom: 10px;
  }
`;

export const LabelCheckbox = styled.label`
  display: block;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const ButtonWrapper = styled.li`
  display: inline-block;
  padding: 5px;
  width: auto;
`;
