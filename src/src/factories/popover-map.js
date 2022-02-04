import {withState, injectComponents, MapPopoverFactory} from 'erasme-kepler.gl/components';
import styled from 'styled-components';
import {visStateLens} from 'erasme-kepler.gl/reducers';
import {toggleModal} from '../store/reducer';

const Testpop = styled.div`
    position: relative;
    top: 100px;
    witdth: 500p;
    height: 500px;
    background: black;
    color: white;
`

// custom action wrap to mounted instance
// const toggleModal = (text) => ({
//     type: 'TOGG',
//     text
// });

console.log(toggleModal);

const CustomPopOver = ({visState, todos, toggleModal}) => (
    
    <Testpop>BONJOUR À TOUS</Testpop>
  );

const CustomMapPopoverFactory = () => withState(
    [visStateLens],

    state=> ({
        todos: state.todos
    }),

{toggleModal}
)(CustomPopOver);

export default CustomMapPopoverFactory;