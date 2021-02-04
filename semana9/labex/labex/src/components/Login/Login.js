import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

const areaCadastro = styled.div`
border: solid black 2px;
width: auto;
height: auto;

`

export default function Login() {
  return (
    <div>
      <Header/>
      <areaCadastro>
        <input placeholder= "nome"/>
        <input placeholder= "senha"/>
      </areaCadastro>
    </div>
  )
}
