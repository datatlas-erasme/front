import { Button, Icons } from 'erasme-kepler.gl/components';

const PanelToggleWrapper = (props) => (
  <StyledPanelToggleWrapper>
    <PanelToggle {...props} />
    <ButtonWrapper>
      <Button onClick={() => props.onClickSaveConfig(props.mapState)} width="120px">
        <Icons.Files height="12px" />
        Save Config
      </Button>
    </ButtonWrapper>
  </StyledPanelToggleWrapper>
);

export default PanelToggleWrapper;
