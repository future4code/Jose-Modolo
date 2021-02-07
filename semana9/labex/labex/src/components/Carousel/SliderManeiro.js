import React, { useState } from 'react'
import Slider from 'react-styled-carousel'
import styled from 'styled-components'
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import Carousel from 'react-elastic-carousel'

const Bttn = styled.button`

`

const Card = styled.div`
width: 900px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Img1 = styled.img`
width: 100%;
height: 100%;

min-width: 900px;
z-index: 1;
`

const BttnWrap =styled.div`
width: 100%;
height: 100%;
align-items: center;
display: flex;
justify-content: space-between;
z-index: 5;
`

const SliderManeiro = () => {
  const [items, setItems] = useState ([
    {id:1, imgUrl:slide1},
    {id:2, imgUrl:slide2}
  ])
  return (
    <Card>
      <Carousel itemsToShow={items.length}>
        {items.map((img) => {
          <Img1 key={img.id} src={img.imgUrl}/>
        })}
        

      </Carousel>
      
    </Card>
  )
}

export default SliderManeiro
