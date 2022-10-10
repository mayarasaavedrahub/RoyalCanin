import React from "react";
import { useState } from "react";
import Radio from "../../components/radio";
import Button from "../../components/button";
import Input from "../../components/input";
import "./styles.scss"
import Modal from "../../components/modal";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";


let questions = [
  {
    id: "1",
    inputName: "a",
    label: "Nome:",
    type: "text",
    placeholder: "Nome",
  },
  {
    id: "2",
    inputName: "b",
    label: "Sobrenome:",
    type: "text",
    placeholder: "Sobrenome",
  },
  {
    id: "7",
    inputName: "g",
    label: "Data Nascimento:",
    type: "date",
  },
  {
    id: 3,
    inputName: "c",
    label: "Gênero:",
    type: "radio",
    options: [
      {
        id: "01",
        label: "Feminino",
      },
      {
        id: "02",
        label: "Masculino",
      },
      {
        id: "04",
        label: "Outros",
      },
      {
        id: "03",
        label: "Prefiro não informar",
      },
    ],
  },
  {
    id: "4",
    inputName: "d",
    label: "E-mail:",
    type: "email",
    placeholder: "Insira seu e-mail",
  },
  {
    id: "5",
    inputName: "e",
    label: "Celular:",
    type: "text",
    placeholder: "(00) 00000-0000",
  },
  {
    id: "6",
    inputName: "f",
    label: "Data Nascimento do PET:",
    type: "date",
  },

  {
    id: 8,
    inputName: "h",
    label: "Espécie:",
    type: "radio",
    options: [
      {
        id: "05",
        label: "gato",
      },
      {
        id: "06",
        label: "cachorro",
      }
    ],
  },
];


function Form() {
    const [showModal, setShowModal] = useState(false);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [genero, setGenero] = useState("");
    const [celular, setCelular] = useState("");
    const [dataNascPet, setDataNascPet] = useState("");
    const [dataNascTutor, setDataNascTutor] = useState("");
    const [especie, setEspecie] = useState("");
    const [email, setEmail] = useState("");

const onSubmitForm = async (e) => {
    e.preventDefault();

    if (
        !nome ||
        !sobrenome.length ||
        
        !genero.length ||
        !celular.length ||
       
        !dataNascTutor.length ||
        !email.length
      ) {
        alert("Preencha todos os campos corretamente");
        return;
      }




    //  Parte Banco de DADOS

    try {
      await addDoc(collection(db, "respostas"), {
        
        nome: nome,
        sobrenome: sobrenome,
        dataNascPet: dataNascPet,
        genero: genero,
        celular: celular,
        especie: especie,
        dataNascTutor: dataNascTutor,
        email: email,
      });
      setNome("");
      setSobrenome("");
      setDataNascPet("");
      setGenero("");
      setCelular("");
      setEspecie("");
      setEmail("");
      setDataNascTutor("");
      document.getElementsByTagName("form")[0].reset();
    } catch (err) {
      alert(err);
    }
      setShowModal(true);
  };

  const onChangeValue = (value, inputName) => {
    switch (inputName) {
      case "a":
        setNome(value);
        break;
      case "b":
        setSobrenome(value);
        break;
      case "c":
        setGenero(value);
        break;
      case "d":
        setEmail(value);
        break;
      case "e":
        setCelular(value);
        break;
      case "g":
        setDataNascTutor(value);
        break;
      case "f":
          setDataNascPet(value);
          break;
      case "h":
        setEspecie(value);
        break;

      default:
        break;
    }
  };



  


  return (  
       
  <div className="form-container">
  {showModal && <Modal />}

  <div className="form-header">         
    <img src="https://hubbr.app/rc_img/CONVITE_v03.png" alt="" width="600px"
          height="309px"/>  
    <div >
        <h1>FAÇA SEU CREDENCIAMENTO</h1>
      </div>
      <p >FAÇA O CIRCUITO E PARTICIPE DAS</p>
      <p >NOSSAS ATIVIDADES!</p>
  </div>
  <form name="form" onSubmit={onSubmitForm}>
    {questions.map(
      ({ id, inputName, label, options, type, placeholder }) => (
        <div className="form-input-container" key={id}>
          <div className="input-container">
            <label className="input-label">{label}</label>
            <div className="inputs-container">
              {type === "radio" ? (
                options.map(({ id: optionId, label }) => (
                  <Radio
                    key={optionId}
                    id={optionId}
                    label={label}
                    value={label}
                    inputName={inputName}
                    onChangeValue={onChangeValue}
                  />
                ))
              ) : (
                <Input
                  id={id}
                  type={type}
                  inputName={inputName}
                  placeholder={placeholder}
                  onChangeValue={onChangeValue}
                />
              )}
            </div>
          </div>
        </div>
      )
    )}
    <Button type="submit">Enviar</Button>
    <p className="t5">SAÚDE É O PRINCÍPIO DA VIDA</p>
     <div>
        <b>SAÚDE É O PRINCÍPIO DA</b> 
        <h3>ROYAL CANIN<sup>®</sup></h3>
      </div>
      
    
  </form>
</div>
);



  
  
}


export default Form;