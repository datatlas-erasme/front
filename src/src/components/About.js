import React, { useState } from 'react';
import Modal from 'react-modal';
import logoGl from '../static/logo_gl.png';
import Button from './filter-side-panel/Button';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    background: 'rgb(247 58 58)',
    color: 'white'
  },

};

const About = () => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='crowdsourcing'>
      <Button bg='black' onClick={openModal} fontSize="10" iconName="plus" text="A propos" />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="A propos"
      >
        <Button onClick={closeModal} fontSize="10" iconName="times" text="Close Modal" />
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Annuaire Cartographique Acteurs de la médiation Industrielle</h2>
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed lorem dignissim, tempus ante sit amet, laoreet mauris. Nulla tellus lacus, lobortis varius augue a, vehicula malesuada sem. Sed vehicula, nulla at congue interdum, mauris odio accumsan magna, id mattis nibh purus sed purus. Integer placerat velit id ex lobortis, quis gravida sem sollicitudin. Suspendisse tincidunt nunc id nibh faucibus, quis ultrices orci porta. Pellentesque scelerisque vehicula purus quis vulputate. Nunc neque mi, pulvinar at commodo ac, imperdiet vitae nulla. Aliquam erat volutpat. Mauris mattis mi sit amet volutpat euismod. Aliquam non mauris in tortor euismod maximus. Nam aliquam sagittis scelerisque. Curabitur porttitor, ex auctor dignissim sagittis, arcu tellus bibendum tortor, non lacinia est dolor id nisi. Duis dictum augue sed tincidunt consequat. Maecenas id felis dolor. 
          </p>
          <a href='#'>Link 1 </a> <a href='#'>Link 2 </a> <a href='#'>Link 3 </a>
          <img src={logoGl}></img>
        </div>
        
      </Modal>
    </div>
  );

};

export default About;
