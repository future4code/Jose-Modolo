import React from 'react'
import styled from 'styled-components'
import SpaceImg from '../img/maxresdefault.jpg'
import { useHistory } from 'react-router-dom'
import Astronauta from '../img/Astronauta.jpg'


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
background-color: red;
border-radius: 10px;
display: flex;
height: 50px;
align-items: center;
border: solid black;
color: white;
&:hover{
  background-color: blue;
  cursor: pointer;

}
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
