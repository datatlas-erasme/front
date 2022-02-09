import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  MapPopoverFactory,
  Icons,
  IconRoundSmall
} from 'erasme-kepler.gl/components';

const MapPopover = MapPopoverFactory();

function CustomMapPopover(props) {

  console.log(props);

		return (
      <>
      		  <MapPopover {...props}/>
        <h1>BITE</h1>
      </>
		);
}
const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  dispatchToProps
)(CustomMapPopover);