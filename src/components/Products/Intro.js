import React from 'react'
const Intro = props => {
  return (
    <div>
      <div
        className={`${
          props.portfolioIntro === true ? 'd-block' : 'd-none'
        } container portfolio-intro`}
        id="portfolioIntro"
      >
        <div className="row">
          <p>
            As a result from the ten flattening forces derived by Friedman, the
            developed-developing economy gap is shrinking; and, definitely, the
            world is flattening now.
          </p>
          <p>
            Loop Mondo is proud of being a part of the flattenning forces. We're
            looking forward to filling in the gap between emerging and emerged
            countries. Along with the access to the North America markets, we're
            working in close cooperation with the local Asia companies that
            enables us the ability to match the challenges regarding the
            circular economy with best possible solutions.
          </p>
          <p>"It's a Flat World, After All" - Thomas L. Friedman</p>
        </div>
      </div>
      <div className="container pb-3 px-5 portfolio-collection">
        <div className="row default-portfolio" onClick={props.handleDefault}>
          <div className="col-sm portfolio-logo">
            <a href="">
              <img
                src={require('../../images/loop-mondo.png')}
                alt="loop-mondo-logo"
                className="img-fluid"
                width="180"
                height="auto"
              />
            </a>
          </div>
        </div>
        <div className="row pb-1 px-5">
          <div className="col-sm-6 pr-1 portfolio-item text-center">
            <a href="" onClick={props.handlePortfolio} id="PPE">
              <div className="item-text d-none">
                <h5 className="portfolio-ppe">Personal Protective Equipment</h5>
              </div>
              <img
                src={require('../../images/portfolio/ppe.png')}
                alt=""
                className="img-fluid rounded portfolio-ppe"
              />
            </a>
          </div>
          <div className="col-sm-6 pl-1 portfolio-item text-center">
            <a href="" onClick={props.handlePortfolio}>
              <div className="item-text d-none">
                <h5 className="portfolio-handcraft">Nature Handcraft</h5>
              </div>
              <img
                src={require('../../images/portfolio/nature-craft.png')}
                alt=""
                className="img-fluid rounded portfolio-handcraft"
              />
            </a>
          </div>
        </div>
        <div className="row px-5 pt-1">
          <div className="col-sm-6 pr-1 portfolio-item text-center">
            <a href="" onClick={props.handlePortfolio}>
              <div className="item-text d-none">
                <h5 className="portfolio-OEM">OEM Shoes & Clothing</h5>
              </div>
              <img
                src={require('../../images/portfolio/sewing.png')}
                alt=""
                className="img-fluid rounded portfolio-OEM"
              />
            </a>
          </div>
          <div className="col-sm-6 pl-1 portfolio-item text-center">
            <a href="" onClick={props.handlePortfolio}>
              <div className="item-text d-none">
                <h5 className="portfolio-special">Special Request</h5>
              </div>
              <img
                src={require('../../images/portfolio/special-request.png')}
                alt=""
                className="img-fluid rounded portfolio-special"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
