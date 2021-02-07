import React, {useState, setForm, form, onChangeInput} from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import MenuChoice from '../Menuchoice/Menuchoice'


const DescricaoViagem = styled.div`
border: solid black 2px;
width: 160vh;
height: 80vh;
margin-left: 50px;
margin-top: 20px;
display: flex;
align-items: center;

`

const AreaCadastro = styled.div`
margin: auto;
border: solid black 2px;
width: 500px;
height: 600px;
border-radius: 50px;
background-color: #88969f;


`

const DivCentral = styled.div`
display: inline-grid;
grid-template-columns: 1fr 1fr 1fr;

`

const Formulario = styled.form`
display:flex;
flex-direction:column;

`

const Bttn = styled.button`
background-color: red;
border-radius: 2px;
color: white;
border: solid black 2px;
width: 170px;
margin-left: 180px;
font-size: 25px;
&:hover{
  background-color: blue;
  cursor: pointer;
  }
`

const Titulo = styled.h1`
margin: auto;
margin-top: 90px;

`

 const ApplicationPage = () => {
   const [form, setForm] = useState ({
     email:'',
     password:'',
   })
 }

 const onChange = (event) => {
   const newValue = event.target.value
   const fieldName = event.target.email

   setForm({...form, [fieldName]: newValue})

 }


export default function Inscrevase() {
  const trips = [
    {
        "id": "5Fjmtdclph7Lt3LCjGZP",
        "description": "Uma viagem bem legal, na melhor época de marte",
        "planet": "Marte",
        "name": "Festança Marciana",
        "durationInDays": 228,
        "date": "21/12/21"
    },
    {
        "id": "5J6izTTfwNHikDEt3q0V",
        "planet": "Jupiter",
        "name": "Multi luau em Jupiter",
        "durationInDays": 540,
        "date": "21/12/20",
        "description": "Noite mágica, com vista para as 69 luas de Jupiter"
    }, ]

  return (
    <div>
      <Header/>
      <DivCentral>
        <DescricaoViagem> 
          <AreaCadastro>
          <Formulario>
            <Titulo>CADASTRO</Titulo>
            <p>Nome do Usuario</p>
            <input/>            
            <p>Senha</p>
            <input/>
            <MenuChoice></MenuChoice>          
            <Bttn>CADASTRAR</Bttn>           
          </Formulario>
          </AreaCadastro>       
        </DescricaoViagem>
      </DivCentral>
    </div>
  )
}
