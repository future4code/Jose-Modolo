import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'

const CentralArea= styled.div`


display: inline-grid;
grid-template-columns: 1fr 1fr;
`

const ImgDiv = styled.div`
display: flex;
align-items: center;
`


export default function Home() {
  return (
    <div>
      <Header/>
      <CentralArea>
        <div>
          <p>
          Nam diam tellus, elementum ut fermentum quis, sodales ac velit. 
          Donec porttitor dui non quam suscipit, tincidunt mollis tellus tempus. 
          Donec facilisis scelerisque vulputate. Mauris suscipit aliquam est, nec malesuada diam congue quis. 
          Vestibulum a suscipit dolor. Ut pharetra enim eros, sed sodales urna fringilla non. 
          </p>
        </div>
        <ImgDiv>
          <img src = "https://picsum.photos/600/400"></img>
        </ImgDiv>
      </CentralArea>
    </div>
  )
}
