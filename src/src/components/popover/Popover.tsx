import { useState } from 'react';
import {connect} from 'react-redux';
import { ToolTip } from './style';

function CustomMapPopover({data, dataglobal, props}) {

  console.log(dataglobal);
  
    return (

      dataglobal === "Manger Local" ? (
        <ToolTip 
        style={{
          position : "absolute",
          left: props.x,
          top: props.y}}
        >
          <p> {data[12]}</p>
            
              { data[0] && <h2>{data[2]}</h2> }
            <h4>Ouverture</h4>
            <ul>
              <li>{data[9]}</li>
            {/* {data[9].map((item, index) => (
              <li key={index}>
                {item}
              </li>
              ))} */}
          </ul>
        </ToolTip>
      ) : (
        <ToolTip 
        style={{
          position : "absolute",
          left: props.x,
          top: props.y}}
        >
            <p>{data[10]} </p>
              { data[0] && <h2>Marché - {data[2]}</h2> }
            <h4>Ouverture</h4>
            <p>{data[6]} - {data[7]}</p>
        </ToolTip>
      )

    );
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  dispatchToProps
)(CustomMapPopover);