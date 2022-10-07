import React from "react";
import {useNavigate} from 'react-router-dom';
import "./styles.scss";


function Modal() {

  const navigate = useNavigate();

 

  const navigateToHome = () => {    
    navigate('https://hubbr.app/rc_credenciamento');
  };



  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
                <img src="https://hubbr.app/rc_img/CONVITE_v03.png" alt="header"  />
        </div>
                <div className="modal-body">
          <h2>Obrigado! Sua resposta foi<br/> salva com sucesso!</h2>
        </div>
        <button onClick={navigateToHome}>OK</button>
        
      </div>
      
    </div>
  );
}



export default Modal;