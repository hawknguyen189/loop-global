import React from 'react'
const Certificate = () => {
  return (
    <div className="lp-cert">
      <div className="container border-top border-bottom py-5">
        <div className="row">
          <div className="col-sm-3 align-self-center">
            <img
              src={require('../../images/landing-page/FDA-cert.png')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3 align-self-center pt-2 pb-1">
            <img
              src={require('../../images/landing-page/CE-cert.png')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3 align-self-center py-1">
            <img
              src={require('../../images/landing-page/iso-9001.png')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3 align-self-center">
            <img
              src={require('../../images/landing-page/iso-13485.png')}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate;