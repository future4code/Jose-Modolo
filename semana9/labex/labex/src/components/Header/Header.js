import React from 'react'
import styled from 'styled-components'
import SpaceImg from '../img/maxresdefault.jpg'
import { useHistory } from 'react-router-dom'


const Menu = styled.div`
width: ;
height: 70px;
border: solid black 2px;
display: flex;
justify-content: space-between;
align-items: center;
background-image: url(${SpaceImg});
`

const Bttn = styled.button`
background-color: gray;
border-radius: 2px;
display: flex;
height: 50px;
align-items: center;
`

const LabexLogo = styled.h1`
color: blue;
`


export default function Header() {
  const history = useHistory()
  
  return (
    <div>
      <Menu>
        <LabexLogo>LABEX</LabexLogo>
        <Bttn onClick = {() => history.push('/')}>HOME</Bttn>
        <Bttn onClick = {() => history.push("/INSCREVA-SE")}>INSCREVA-SE PARA VIAGEM</Bttn>
        <Bttn onClick = {() => history.push("ROTAS")}>ROTAS ESPACIAIS</Bttn>
        <Bttn onClick = {()=> history.push("/LOGIN")}>LOGIN</Bttn>
      </Menu>
    </div>
  )
}
