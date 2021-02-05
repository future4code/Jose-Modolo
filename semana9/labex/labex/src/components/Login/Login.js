import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

const AreaCadastro = styled.div`
border: solid black 2px;
width: 500px;
height: 500px;
display: flex;
align-items: center;
background-color: white;
margin: auto;
margin-top: 100px;
flex-direction: column;
`

const InputCadastro = styled.input`

`

export default function Login() {
  return (
    <div>
      <Header/>      
        <AreaCadastro>
          <InputCadastro placeholder= "nome"/>
          <InputCadastro placeholder= "senha"/>
          <button>CADASTRAR</button>
        </AreaCadastro>
    </div>
  )
}
