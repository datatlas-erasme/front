import React from 'react';
import styled from 'styled-components';
import { CenterFlexbox } from 'kepler.gl/dist/components/common/styled-components';
import { Layers } from 'kepler.gl/dist/components/common/icons';
import PropTypes from 'prop-types';
import { parseFieldValue } from 'kepler.gl/dist/utils/data-utils';
import { LayerHoverInfoFactory } from 'kepler.gl/components';

export const StyledLayerName = styled(CenterFlexbox)`
  color: ${(props) => props.theme.textColorHl};
  font-size: 12px;
  letter-spacing: 0.43px;
  text-transform: capitalize;
  padding: 0 14px;
  margin-top: 12px;

  svg {
    margin-right: 4px;
  }
`;

const Row = ({ name, value, url }) => {
  // Set 'url' to 'value' if it looks like a url
  if (!url && value && typeof value === 'string' && value.match(/^http/)) {
    url = value;
  }

  const asImg = /<img>/.test(name);

  return (
    <tr className="row" key={name}>
      <td className="row__name">{name}</td>
      <td className="row__value">
        {asImg ? (
          <img src={value} alt="img" />
        ) : url ? (
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {value}
          </a>
        ) : (
          value
        )}
      </td>
    </tr>
  );
};

const EntryInfo = ({ fieldsToShow, fields, data }) => (
  <tbody>
    {fieldsToShow.map((name) => (
      <EntryInfoRow key={name} name={name} fields={fields} data={data} />
    ))}
  </tbody>
);

const EntryInfoRow = ({ name, fields, data }) => {
  const field = fields.find((f) => f.name === name);
  if (!field) {
    return null;
  }

  const valueIdx = field.tableFieldIndex - 1;
  const displayValue = parseFieldValue(data[valueIdx], field.type);

  return <Row name={name} value={displayValue} />;
};

const CellInfo = ({ data, layer }) => {
  const { colorField, sizeField } = layer.config;

  return (
    <tbody>
      <h1>HEEEEEEEE</h1>
      <Row name={'total points'} key="count" value={data.points && data.points.length} />
      {colorField && layer.visualChannels.color ? (
        <Row
          name={layer.getVisualChannelDescription('color').measure}
          key="color"
          value={data.colorValue || 'N/A'}
        />
      ) : null}
      {sizeField && layer.visualChannels.size ? (
        <Row
          name={layer.getVisualChannelDescription('size').measure}
          key="size"
          value={data.elevationValue || 'N/A'}
        />
      ) : null}
    </tbody>
  );
};

const CustomLayerHoverInfo = (props) => {
  const { data, layer } = props;

  if (!data || !layer) {
    return null;
  }
  console.log(props);

  return (
    <div className="map-popover__layer-info">
      <StyledLayerName className="map-popover__layer-name">
        <Layers height="12px" />
        {props.layer.config.label}
      </StyledLayerName>
      <table className="map-popover__table">
        {props.layer.isAggregated ? <CellInfo {...props} /> : <EntryInfo {...props} />}
      </table>
    </div>
  );
};

CustomLayerHoverInfo.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any),
  fieldsToShow: PropTypes.arrayOf(PropTypes.any),
  layer: PropTypes.object,
  data: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.object]),
};

CustomLayerHoverInfo.deps = LayerHoverInfoFactory.deps;
export default CustomLayerHoverInfo;
