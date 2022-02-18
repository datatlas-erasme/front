import React, {useState} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { PointAdress } from '../../assets/svg/PointAdress';
import PictoTime from '../../assets/icon/icon-time.png';
import {

} from './style'

function CustomMapPopover({data, ...props}) {

    return(
        <>
            <p>{data[10]} </p>
              { data[0] && <h2>{data[2]}</h2> }
            <p>Horaires :</p>
            <p>{data[9]} </p>   
        </>

    );
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  dispatchToProps
)(CustomMapPopover);