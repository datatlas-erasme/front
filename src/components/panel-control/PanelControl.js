import { useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import { toggleModal, setFilterUpdater } from 'erasme-kepler.gl/actions';
import { DesktopPanelControl } from '../filters-desktop';
import { MobilePanelControl } from '../filters-mobile';
import AddButton from '../buttons/interactiv-button';
import { useViewport } from '../../utils/ViewportConext';
import { getFilters, getLayers } from '../../store/keplerGl';
import { getThemeName } from '../../store/app';
import { Panel } from './style';

const PanelControl = () => {
  const { width } = useViewport();
  const breakpoint = 1024;

  // Get the filter values, id  and map them to buttons
  const filtersDomain = useSelector(getFilters);
  const layers = useSelector(getLayers);
  const themeName = useSelector(getThemeName);

  // Function to convert rgb color to hex color
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);

        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const filterTree = useMemo(() => {
    return Object.values(layers).map((value, i) => {
      const layerIndex = i;
      // Get the color of the point on map and convert it to hex
      var layer = value;
      var colorRgb = value.config.color;
      var colorHexa = rgbToHex(colorRgb[0], colorRgb[1], colorRgb[2]);

      return {
        label: value.config.label,
        id: value.config.dataId,
        key: i,
        colorHexa: colorHexa,
        layerIndex: layerIndex,
        layer: layer,
      };
    });
  }, [layers]);

  const Filters = filterTree.map((value, index) => {
    if (themeName === 'industries') {
      return width < breakpoint ? (
        <MobilePanelControl key={index} value={value} index={index} filtersDomain={filtersDomain} />
      ) : (
        <DesktopPanelControl
          key={index}
          value={value}
          index={index}
          filtersDomain={filtersDomain}
          color={value.colorHexa}
          layerId={value.layerIndex}
          layer={value.layer}
        />
      );
    } else {
      return !!value.key ? (
        width < breakpoint ? (
          <MobilePanelControl
            key={index}
            value={value}
            index={index}
            filtersDomain={filtersDomain}
          />
        ) : (
          <DesktopPanelControl
            key={index}
            value={value}
            index={index}
            filtersDomain={filtersDomain}
            color={value.colorHexa}
          />
        )
      ) : null;
    }
  });

  return (
    <Panel>
      {Filters}
      <AddButton />
    </Panel>
  );
};

const mapStateToProps = (state) => ({});
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(
  mapStateToProps,
  dispatchToProps,
  setFilterUpdater,
  toggleModal,
)(PanelControl);
