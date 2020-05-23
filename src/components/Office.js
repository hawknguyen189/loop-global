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
              <a href="https://goo.gl/maps/MQH49wvCdRQ7mGmT6" target="_blank">
                111 Rue Chabanel O Montréal, QC H2N 1C8
              </a>
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <strong>
                <i className="fas fa-map-marked-alt"></i>
              </strong>{' '}
              <a href="https://goo.gl/maps/rKq4jvKaBfmMsHj26" target="_blank">
                1B Hoàng Hoa Thám St, Hà Đông, Hà Nội, Vietnam
              </a>
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              <strong>
                <i className="fas fa-map-marked-alt"></i>
              </strong>{' '}
              <a href="https://goo.gl/maps/9W5BdRyFCsPMo2ys5" target="_blank">
                267 Thong Nhat St, Ward 10, Go vap District, Ho Chi Minh city,
                Vietnam
              </a>
            </p>
          </div>
        </div>
        <div className="row">
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
        </div>
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
