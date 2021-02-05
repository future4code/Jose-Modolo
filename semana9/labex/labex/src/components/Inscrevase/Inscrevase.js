import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

const DescricaoViagem = styled.div`
border: solid black 2px;
width: 350px;
height: 80vh;
margin-left: 50px;
margin-top: 20px;

`

const ViagensDisponiveis = styled.div`
border: solid black 2px;
width: 500px;
height: 80vh;
margin-left: 50px;
margin-top: 20px;

`

const DivCentral = styled.div`
display: inline-grid;
grid-template-columns: 1fr 1fr 1fr;
`



export default function Inscrevase() {
  return (
    <div>
      <Header/>
      <DivCentral>
        <DescricaoViagem>        
        </DescricaoViagem>
        <ViagensDisponiveis>        
        </ViagensDisponiveis>
        <DescricaoViagem>

        </DescricaoViagem>
      </DivCentral>
    </div>
  )
}
