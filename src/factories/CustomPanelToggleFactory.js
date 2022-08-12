import styled from 'styled-components';
import { PanelToggleFactory, Button, Icons, withState } from 'erasme-kepler.gl/components';
import { visStateLens } from 'erasme-kepler.gl/reducers';

const StyledPanelToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  background-color: ${(props) => props.theme.sidePanelHeaderBg};
`;

const ButtonWrapper = styled.div`
  margin-bottom: 4px;
`;

const CustomPanelToggleFactory = (...deps) => {
  const PanelToggle = PanelToggleFactory(...deps);


  return withState(
    // lenses
    [visStateLens],
    // mapStateToProps
    (state) => ({ mapState: state.keplerGl.map1 }),
    {
      onClickSaveConfig: () => {},
    },
  )(PanelToggleWrapper);
};
CustomPanelToggleFactory.deps = PanelToggleFactory.deps;
export default CustomPanelToggleFactory;
