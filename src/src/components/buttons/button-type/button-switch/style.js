import styled from 'styled-components';
// import { datalimentaire, Base } from '../../styles';

export const SwitchWrapper = styled.div`
.switch-checkbox {
    display: none;
  }
  
  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: all 0.3s ease-in 0s;

  }

  .switch-label .switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: all 0.3s ease-in 0s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  
  .switch-checkbox:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .switch-label:active .switch-button {
    width: 60px;
}
  `