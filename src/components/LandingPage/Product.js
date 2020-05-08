import React from 'react'

const Product = () => {
  return (
    <div className="container lp-products py-4">
      <div className="row product-shelf">
        <div className="col-sm-3 product-lot">
          <div className="card product-container">
            <div className="product-thumb">
              <img
                src={require('../../images/products/4ply-face-mask.png')}
                className="card-img-top rounded"
                alt="4 ply face mask"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>Disposable 4 layer filter face masks</li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">4 Ply Face Mask</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 product-lot">
          <div className="card product-container">
            <div className="product-thumb">
              <img
                src={require('../../images/products/face-shield-loop-mondo.png')}
                className="card-img-top rounded"
                alt="face-shield-loop-mondo"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>Clear Film Protect Face & Eyes</li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">Protective Shield</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 product-lot">
          <div className="card product-container">
            <div className="product-thumb">
              <img
                src={require('../../images/products/disposable-booties.png')}
                className="card-img-top rounded"
                alt="disposable-booties"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>Durable Waterproof & Anti-Slip Boot </li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">Disposable Booties</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 product-lot">
          <div className="card product-container">
            <div className="product-thumb">
              <img
                src={require('../../images/products/disposable-gown.png')}
                className="card-img-top rounded"
                alt="disposable-gown"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>Non-Woven Medical Protection Coveralls</li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">Disposable Gown</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
