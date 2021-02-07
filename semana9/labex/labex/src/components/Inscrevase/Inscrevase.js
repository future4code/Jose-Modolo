import React, {useState, setForm, form, onChangeInput} from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

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
     name:'',
     senha:'',
   })
 }

 const onChange = (event) => {
   const newValue = event.target.value
   const fieldName = event.target.name

   setForm({...form, [fieldName]: newValue})

 }


export default function Inscrevase() {
  return (
    <div>
      <Header/>
      <DivCentral>
        <DescricaoViagem> 
          <AreaCadastro>
          <Formulario>
            <Titulo>CADASTRO</Titulo>
            <p>Nome do Usuario</p>
            <input
            onChange={onChangeInput}
            value={form['name']}
            name={'name'}/>            
            <p>Senha</p>
            <input
            onChange={onChangeInput}
            value={form['senha']}
            name={'senha'}/>           
            <Bttn>CADASTRAR</Bttn>           
          </Formulario>
          </AreaCadastro>       
        </DescricaoViagem>
      </DivCentral>
    </div>
  )
}
