import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

const SlidesEspaciais = styled.div`
width: 900px;
height: 500px;
border: solid black 2px;
margin: auto;
margin-top: 100px;

`

const DescricaoSlide = styled.div`
width: 900px;
height: 100px;
border: solid black 2px;
margin-left: 232px;
`

export default function Rotas() {
  return (
    <div>
      <Header/>
      <SlidesEspaciais></SlidesEspaciais>
      <DescricaoSlide></DescricaoSlide>
    </div>
  )
}
