import React from 'react'
import pic03 from '../images/pic03.jpg'

const Office = () => {
  return (
    <div id="office">
      <h2 className="major">Visit Office</h2>
      <span className="image main">
        <img src={pic03} alt="" />
      </span>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <h5>Montreal</h5>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Ha Noi (HQ)</h5>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Ho Chi Minh</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <p>
              <strong>
                <i className="fas fa-map-marked-alt"></i>
              </strong>{' '}
              <a href="https://goo.gl/maps/DaER2G1NwQbQq9Pu6" target="_blank">
                111 Rue Chabanel O Montréal, QC H2N 1C8
              </a>
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <strong>
                <i className="fas fa-map-marked-alt"></i>
              </strong>{' '}
              <a href="https://goo.gl/maps/2mYn6jtRLRMhg35b8" target="_blank">
                86 Duy Tan St, Dich Vong Hau Ward, Cau Gia, Ha Noi, Vietnam
              </a>
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <strong>
                <i className="fas fa-map-marked-alt"></i>
              </strong>{' '}
              <a href="https://goo.gl/maps/BZfbQ5Mx8vV6nfkf7" target="_blank">
                4 Nguyen Dinh Chieu St, Da Kao Ward, District 1 , Ho Chi Minh city,
                Vietnam
              </a>
            </p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-4">
            <p>
              <strong>
                <i className="fas fa-mobile-alt contact-icon mr-2 text-center"></i>
              </strong>
              +1 514-553-4569 (Mr. Bach)
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <strong>
                <i className="fas fa-mobile-alt contact-icon mr-2 text-center"></i>
              </strong>
              +84 32-958-0696 (Mr. Tung)
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <i className="fas fa-mobile-alt contact-icon mr-2 text-center"></i>
              +84 32-958-0696 (Mr. Tung)
            </p>
          </div>
        </div> */}
        {/* google map */}
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  )
}
export default Office
