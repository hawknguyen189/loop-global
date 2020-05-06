import React from 'react'
import PPE from './PPE'
import Intro from './Intro'

const Products = props => {
  return (
    <div>
      <Intro
        portfolioIntro={props.portfolioIntro}
        portfolioPPE={props.portfolioPPE}
        handlePortfolio={props.onHandlePortfolio}
        handleDefault={props.onHandleDefault}
      ></Intro>
      <PPE portfolioPPE={props.portfolioPPE}></PPE>
    </div>
  )
}
export default Products
