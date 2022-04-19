import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { ConfContext } from '../../../providers/ConfProvider';
import Bg from '../static/about-modal/bg.jpg';
import Partner1 from '../static/about-modal/1.png';
import Partner2 from '../static/about-modal/2.png';
import Partner3 from '../static/about-modal/3.png';
import Partner4 from '../static/about-modal/4.png';
import Partner5 from '../static/about-modal/5.png';
import Partner6 from '../static/about-modal/6.png';
import Button from './filter-side-panel/Button';

const customStyles = {
  content: {
    top: 'auto',
    left: 'auto',
    width: '90vw',
    height: '88vh',
    color: 'white',
    backgroundImage: "url(" + Bg + ")",
    backgroundSize: "cover",
    borderRadius: "20px",
    zIndex: 99
  },
  overlay: {zIndex: 1000}

};

const About = () => {
  const config = useContext(ConfContext).bottomRightButtons;
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='crowdsourcing'>
      <Button bg='black' onClick={openModal} fontSize="10" text="A propos" />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="A propos"
      >
       
      <div className='header'>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>M.Ind.</h2>
        <h3>ANNUAIRE CARTOGRAPHIQUE DES ACTEURS
        DE LA MÉDIATION INDUSTRIELLE ET DE L’INDUSTRIE
        DES MÉTROPOLES DE LYON ET SAINT-ETIENNE</h3>
        <Button bg='white' onClick={closeModal} fontSize="10" iconName="times" text="" />
      </div>
      <div className='modal-content'>
        <div className='left-content'>
          <p>Bienvenue sur la version bêta de <b>M.Ind.*</b>, la plateforme cartographique** destinée à faciliter la recherche, l’identification et la mise en relation des acteurs et des publics concernés par les diverses disciplines de la médiation industrielle et de l’industrie.</p>

          <p>Il s’agit d’une carte interactive permettant de répertorier les acteurs et événements liés à une communauté d’innovateurs participant via leurs activités à des actions de médiation (pédagogique, culturelle, scientifique, économique et territoriale, appliquées à la thématique industrielle et à ses enjeux socio-économiques) auprès de publics variés (professionnels, recruteurs, jeunesse et scolaires, enseignants, demandeurs d’emploi, formateurs et accompagnateurs, habitants et grand public...)</p>

          <p>Si vos activités concernent l’un des champs de cette médiation ou participent à la reconnexion et aux interactions entre l’industrie, le territoire et ses habitants, n’hésitez pas à renseigner votre structure ou votre programmation évènementielle sur la plateforme !</p>
        </div>
        <div className='right-content'>
          <div className='buttons'>
            {config.map((buttonConf, index) => (
              <a key={index} href={buttonConf.url} target="_blank" rel="noreferrer">
                <Button fontSize="10"  text={buttonConf.text} />
              </a>
            ))}
            <a href="mailto:industrie@erasme.org"><Button fontSize="10" text="Nous écrire" /></a>
          </div>
          <div className='subtext'>
            <p>* M.édiation Ind.ustrielle <br/>
              ** Un projet initié par ERASME dans le cadre du Think & Do Tank, du programme TIGA « L’industrie reconnectée à son territoire et ses habitants » coordonné par La Métropole de Lyon, bénéficiant d’une aide de l’Etat opérée par la Caisse des dépôts et des consignations au titre du Programme Investissements d’Avenir - PIA3.
            </p>
          </div>
          <div className='logos'>
            <a href='#'><img src={Partner1}/></a>
            <a href='https://www.grandlyon.com/'><img src={Partner2}/></a>
            <a href='https://www.saint-etienne-metropole.fr/'><img src={Partner3}/></a>
            <a href='https://www.banquedesterritoires.fr/'><img src={Partner4}/></a>
            <a href='https://erasme.org'><img src={Partner5}/></a>
            <a href='https://www.tuba-lyon.com/'><img src={Partner6}/></a>
            
          </div>

        </div>
      </div>        
      </Modal>
    </div>
  );

};

export default About;
