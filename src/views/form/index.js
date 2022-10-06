import React from "react";
import { useState } from "react";
import Radio from "../../components/radio";
import Button from "../../components/button";
import Input from "../../components/input";
import "./styles.scss"
import Modal from "../../components/modal";

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
    label: "SOBRENOME",
    type: "text",
    placeholder: "SOBRE",
  },
  {
    id: 3,
    inputName: "c",
    label: "Gênero",
    type: "radio",
    options: [
      {
        id: "01",
        label: "feminino",
      },
      {
        id: "02",
        label: "masculino",
      },
      {
        id: "03",
        label: "prefiro não informar",
      },
      {
        id: "04",
        label: "outros",
      },
    ],
  },
  {
    id: "4",
    inputName: "d",
    label: "Email",
    type: "email",
    placeholder: "Insira seu email",
  },
  {
    id: "5",
    inputName: "e",
    label: "celular",
    type: "text",
    placeholder: "(00) 00000-0000",
  },
  {
    id: "6",
    inputName: "f",
    label: "Data Nascimento do PET",
    type: "date",
  },
  {
    id: 7,
    inputName: "g",
    label: "Espécie",
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
    const [especie, setEspecie] = useState("");
    const [email, setEmail] = useState("");

const onSubmitForm = async (e) => {
    e.preventDefault();

    // if (
    //     !nome ||
    //     !sobrenome.length ||
    //     !dataNascPet.length ||
    //     !genero.length ||
    //     !celular.length ||
    //     !especie.length ||
    //     !email.length
    //   ) {
    //     alert("Preencha todos os campos corretamente");
    //     return;
    //   }




    //  Parte Banco de DADOS


    //   try {
    //     await addDoc(collection(db, "respostas"), {
    //      }
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
      case "f":
        setDataNascPet(value);
        break;
      case "g":
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
    <p >
        <h1>FAÇA SEU CREDENCIAMENTO</h1>
      </p>
      <p >FAÇA O CIRCUITO E PARTICIPE DAS</p>
      <p >NOSSAS ATIVIDADES!</p>
  </div>
  <form name="form" onSubmit={onSubmitForm}>
    {questions.map(
      ({ id, inputName, label, options, type, placeholder }) => (
        <div className="form-input-container" key={id}>
          <div className="input-container">
            <h2>{label}</h2>
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
    <p>SAÚDE É O PRINCÍPIO DA VIDA</p>
     <p>
        <b>SAÚDE É O PRINCÍPIO DA</b> 
        <h3>ROYAL CANIN®</h3>
      </p>
      <img src="https://hubbr.app/rc_img/CONVITE_v03.png" alt="header" width="600px" height="309px"
      />
  </form>
</div>
);



  
  
}


export default Form;