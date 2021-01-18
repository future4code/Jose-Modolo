import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {ListaDeUsuario} from './pages/ListaDeUsuario'

const Main = styled.div`
display: flex;
justify-content: center;
width: auto;
height: auto;
`

const CentralDiv = styled.div`
border: 2px solid black;
display:flex;
flex-direction:column;
width: 300px;
height: 200px;
border-radius: 2px;
`

const Bttn = styled.button`
background-color: blue;
color: white;
border: 1px solid black;
border-radius: 2px;
cursor: pointer;
&:hover{
  background-color: gray;
  color: black;
}
`

const BttnChange = styled.button`
background-color: blue;
color: white;
border: 1px solid black;
border-radius: 2px;
cursor: pointer;
&:hover{
  background-color: gray;
  color: black;
}
`

const BttnDiv = styled.div`

display:flex;
flex-direction:column;
width: 300px;
height: 200px;
border-radius: 2px;
`



export default class App extends React.Component{


  //codigo cadastro usuario
  state = {
    inputName: '',
    inputEmail: '',  
  }

  handleInputName = (event) => {
    this.setState({inputName: event.target.value})
  }

  handleInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  createUser = () =>{
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    body,
    {
      headers: {
        Authorization: 'jose-modolo-epps'
      }
    })
    .then((res) => {
      alert("Usuario criado com sucesso!")
    })
    .catch((err) => {
      alert("Erro: usúario não pode ser criado.")
    })
  }

  //codigo botão de mudança de pagina

  state = {
    page: true
  }
  changePage = () => {
    this.setState({page: !this.state.page})
  }
  {this.state.page ? }


  render() {
    return (
      <Main>
        <CentralDiv>        
          <p>Nome</p><input value={this.state.inputName} onChange={this.handleInputName}/>
          <p>E-Mail</p><input value={this.state.inputEmail} onChange={this.handleInputEmail}/><br />
          <Bttn onClick={this.createUser}>SALVAR</Bttn>
        </CentralDiv>
          <BttnDiv>            
            <Bttn onClick={this.changePage}>Pagina Lista</Bttn>
          </BttnDiv>      
      </Main>
    );
  }
}





