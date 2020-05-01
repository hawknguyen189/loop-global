import React from 'react'
const Intro = () => {
  return (
    <div className="container">
      <div className="row pb-3">
        <div className="col-sm-5">
          <img
            src={require('../../images/loop-mondo-ppe.png')}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-sm-7">
          <div className="row">
            <img
              src={require('../../images/pic01.jpg')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="row">
            <img
              src={require('../../images/pic01.jpg')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="row">
            <img
              src={require('../../images/pic01.jpg')}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
        eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
        volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
        Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et
        malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula
        sit amet ex mollis mattis lorem ipsum dolor sit amet.
      </p>
    </div>
  )
}

export default Intro
