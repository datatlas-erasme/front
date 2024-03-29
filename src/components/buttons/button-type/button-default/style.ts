import styled from 'styled-components';
// import * as theme from '../../../../styles/themes';

export const StyleFilters = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: white;
  padding: 20px 16px 20px 10px;
  border-radius: 5px 5px 5px 5px;
  border: none;
  margin: 15px 0 15px 0;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.75px;
  background-color: 'black';
  width: 100%;
`;

export const ColorDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: aliceblue;
  margin-right: 10px;
`;

export const ParentBtn = styled(Button)`
  margin: 0px;
  border-radius: 0;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const ParentBtnFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ParentBtnFooter = styled(Button)`
  background-color: black;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  margin: 0;
  border-radius: 0;
`;

export const ChildBtn = styled(Button)``;

/********************** FILTERS SIDE PANEL *********************/
// .FilterSidePanel {
//   position: absolute;
//   background: white;
//   top: 0;
//   width: 500px;
//   height: 500px;
// }

// .filters {
//   position: absolute;
//   top: 85px;
//   right: 30px;
//   display: flex;
//   flex-direction: column;
//   height: max-content;
//   max-height: 84vh;
//   overflow: auto;
//   /*width: 11%;*/
//   padding-right: 10px;
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }

// .filters::-webkit-scrollbar {
//   display: none;
// }

// .filter.filter-parent:last-of-type {
//   margin-bottom: 15px !important;
// }

// .filter-parent .list {
//   padding: 0 0 7px 0;
// }

// .filter-parent ul {
//   max-height: 0;
//   overflow: hidden;
//   transition: all ease-in-out 0.2s;
// }

// .filter-parent .btn,.crowdsourcing button {
//   max-height: 1000px;
//   /*overflow: auto;*/
//   transition: all ease-in-out 0.2s;
//   overflow-y: hidden;
//   border-radius: 3px;
//   font-size: 11px !important;
//   margin: 2px 0 0 0;
//   padding : 10px 10px 10px 10px;
//   text-transform: uppercase;
//   text-align: left;
// }

// .filter-parent li button {
//  opacity: 0.5;
//  border-radius: 5px 5px 5px 5px;
//  margin-top: 5px;
// }

// .filter-parent .selected {
//   opacity: 1;
// }

// .filters ul {
//   padding: 0;
//   margin : 0 0 5px
// }

// .filters ul li {
//   list-style: none;
// }

// .filters ul .filter:last-child {
//   margin-bottom: 15px;

// }

// .filters .filter-child button {
//   /*font-size: 10px;*/
//   padding: 10px 10px 10px 10px;
//   margin: 0 10px 5px 0;
//   border-radius: 5px;
//   text-align: left;
// }

// filters .filter-child button.active span {
//   transform: rotate(90deg) !important;
// }

// .filters .filter-child .enable {
//   opacity: 0.7;
//   transition: all ease-in-out 0.2s;
// }

// .filters .filter-sub-child button{
//   padding: 8px 10px;
//   margin-bottom: 3px;
//   margin-right: 0;
// }

// .filters .filter-sub-child button.active{
//   opacity: 0.5;
// }

// .filters button:hover {
//   transition: all ease-in-out 0.2s;
// }
// `;
