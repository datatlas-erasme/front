import { useState } from "react";
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { LabelCheckbox } from "../../../filters/lists/style";
import { ButtonType } from '../button-select/style';
import { Override } from '../../../../types/Override';

export type CheckboxProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    bg?: string;
    textSize?: string;
    btnType?: 'parent' | 'child';
    listNames?: string[];
    idFilter?: string;
    layerId?: string | '';
    src?: string;

  }
>;

// Import icons products
function importAll(r) {
	let icons = {};
  r.keys().forEach(item => { icons[item.replace('./', '')] = r(item); });

	return icons
}
const icons = importAll(require.context('../../../../assets/logo/label', false, /\.(png)$/));

const dataCheckbox = {}

export default function Checkbox({  
  text,
  bg,
  textSize,
  btnType,
  listNames,
  idFilter,
  layerId,
  className,
  src,
  ...props
}: CheckboxProps){

  const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };

    return(
        <>
                {/* <input type="checkbox" />
                <label> {text} </label> */}
        <ButtonType
        onClick={isActiveState}
        className={classnames('active', className, { selected: isActive })}
        {...props}>
          
        <ul>
          <li>
            <img src={icons[`Agriculture-biologique.png`].default} width={50} height={50}/>
            BIO
          </li>
          <li>
            <img src={icons[`HVE.png`].default} width={50} height={50}/>
            HVE (Haute Valeur Environnementale)
          </li>
          <li>
            <img src={icons[`Agriculture-biologique.png`].default} width={50} height={50}/>
            Bienvenue à la ferme
          </li>
          <li>
             <img src={icons[`LVED.png`].default} width={50} height={50}/>
             LVED (Lyon Ville Équitable et Durable)
          </li>
        </ul>
        
        <p>{text.substring(0, 30)}</p>
      </ButtonType>
      </>
    )
};