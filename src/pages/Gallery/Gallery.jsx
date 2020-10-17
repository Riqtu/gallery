import React, { useState } from 'react'
import {
  GalleryWrapper,
  SliderBlock,
  SliderImg,
  SliderWrapper,
  Header,
  SliderTitle,
  NextArrow,
  PrevArrow,
} from './Gallery.styles'
import Slider from 'react-slick'

import arrow from './../../assets/Arrow1.svg'
import logo from './../../assets/logoMini.svg'
// import { data } from './data'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <NextArrow onClick={onClick}>
      <img src={arrow} alt="" />
    </NextArrow>
  )
}
function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <PrevArrow onClick={onClick}>
      <img src={arrow} alt="" />
    </PrevArrow>
  )
}

const Gallery = (props) => {
  const [swiped, setSwiped] = useState(false)
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const list = props.data.map((el, index) => (
    <SliderBlock>
      <SliderImg src={el.src} alt="" w={el.width} l={el.left} />
      <SliderTitle swiped={swiped}>
        <h1>{el.title}</h1>
        <p>{el.description}</p>
      </SliderTitle>
    </SliderBlock>
  ))
  return (
    <GalleryWrapper>
      <Header>
        <h1>{props.title}</h1>
        <img src={logo} alt="" />
      </Header>
      <SliderWrapper>
        <Slider
          {...settings}
          beforeChange={() => setSwiped(true)}
          afterChange={() => setSwiped(false)}
        >
          {list}
        </Slider>
      </SliderWrapper>
    </GalleryWrapper>
  )
}

export default Gallery
