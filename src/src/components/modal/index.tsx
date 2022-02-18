import React, {useState} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {FarmerIcon} from '../../assets/svg/FarmerIcon';
import { PointAdress } from '../../assets/svg/PointAdress';
import PictoTime from '../../assets/icon/icon-time.png';
import {
  ModalColLeft,
  ModalColRight,
  ModalHeading,
  LabelRow
} from './style'

function importAll(r) {
	let icons = {};
  r.keys().forEach(item => { icons[item.replace('./', '')] = r(item); });

	return icons
}
const icons = importAll(require.context('../../assets/logo/label', false, /\.(png)$/));

function CustomMapModal({data, ...props}) {

  console.log(props);
  console.log(data);

		return (
      <>
        <ModalColLeft>
          <ModalHeading>
            <span><FarmerIcon/></span>
            <div>
            { data[0] && <h2>{data[2]}</h2> }
            <p>{data[6]} </p>
            </div>
          </ModalHeading>
            <p>Informations complémentaires liées à la spécificité de ce lieu.</p>
            <a href={data[14]} target={'_blank'} rel={'noreferrer'}><button >En savoir plus</button></a>
            <ul>
              <li>
                <PointAdress/>
                <address>{data[3]} {data[4]} {data[5]}</address>
              </li>
              <li>
                <img src={PictoTime} alt='icon horloge' width={20} height={20}/>
                {data[9]}
              </li>
              <li>
                <a href={'https://form.typeform.com/to/V1f3GNXR'} target='_blank' rel={'noreferrer'}>Modifier les informations</a>
              </li>
            </ul>
        </ModalColLeft>
        <ModalColRight>
          <FontAwesomeIcon icon={faXmark}/>
          <img
            alt={'Unsplash'}
            src={'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
          />
          <p>{data[10]} </p>
        <LabelRow>
          <img src={icons[`Group-245.png`].default} width={50} height={50}/>
          <img src={icons[`Group-245.png`].default} width={50} height={50}/>
          <img src={icons[`Group-245.png`].default} width={50} height={50}/>
        </LabelRow>
        </ModalColRight>
      </>
		);
}
const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  dispatchToProps
)(CustomMapModal);