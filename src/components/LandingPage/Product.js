import React from 'react'

const Product = () => {
  return (
    <div className="container lp-products py-4">
      <div className="row product-shelf">
        <div className="col-sm-3 product-lot py-2">
          <div className="card product-container">
            <div className="product-thumb d-flex">
              <img
                src={require('../../images/products/4ply-face-mask.png')}
                className="card-img-top rounded align-self-center"
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
        <div className="col-sm-3 product-lot py-2">
          <div className="card product-container">
            <div className="product-thumb  d-flex">
              <img
                src={require('../../images/products/3m-1860.png')}
                className="card-img-top rounded align-self-center"
                alt="face-shield-loop-mondo"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>
                      <a
                        href="https://www.3m.com/3M/en_US/company-us/all-3m-products/~/3M-Health-Care-Particulate-Respirator-and-Surgical-Mask-1860-N95-120-EA-Case/?N=5002385+3294795990&preselect=3293786499&rt=rud"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        3M
                      </a>{' '}
                      1860 Offers > 99% BFE
                    </li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">3M 1860 Mask</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 product-lot py-2">
          <div className="card product-container">
            <div className="product-thumb d-flex">
              <img
                src={require('../../images/products/3m-8210.png')}
                className="card-img-top rounded align-self-center"
                alt="disposable-booties"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>
                      <a
                        href="https://www.3m.com/3M/en_US/company-us/all-3m-products/~/3M-Particulate-Respirator-8210-N95-160-EA-Case/?N=5002385+3294780268&rt=rud"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        3M
                      </a>{' '}
                      8210 Offers at least 95% BFE
                    </li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">3M 8210 Mask</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 product-lot">
          <div className="card product-container">
            <div className="product-thumb d-flex">
              <img
                src={require('../../images/products/nitrile-gloves.png')}
                className="card-img-top rounded align-self-center"
                alt="disposable-gown"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>Powdered/Non-Powdered </li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">Nitrile Gloves</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row product-shelf">
        <div className="col-sm-3 product-lot py-2">
          <div className="card product-container">
            <div className="product-thumb d-flex">
              <img
                src={require('../../images/products/disposable-booties.png')}
                className="card-img-top rounded align-self-center"
                alt="4 ply face mask"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>Durable Waterproof & Anti-Slip Boot</li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">Disposable Booties</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 product-lot py-2">
          <div className="card product-container">
            <div className="product-thumb  d-flex">
              <img
                src={require('../../images/products/face-shield-loop-mondo.png')}
                className="card-img-top rounded align-self-center"
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
        <div className="col-sm-3 product-lot py-2">
          <div className="card product-container">
            <div className="product-thumb d-flex">
              <img
                src={require('../../images/products/protective-set.png')}
                className="card-img-top rounded align-self-center"
                alt="disposable-booties"
              />
            </div>
            <div className="card-body product-desc">
              <div className="product-action">
                <div className="container justify-content-center">
                  <ul>
                    <li>Durable Waterproof & Anti-Slip Boot</li>
                    <li>Certificate: FDA, CE</li>
                  </ul>
                </div>
              </div>
              <p className="product-name text-center">Protective Sets</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 product-lot">
          <div className="card product-container">
            <div className="product-thumb d-flex">
              <img
                src={require('../../images/products/disposable-gown.png')}
                className="card-img-top rounded align-self-center"
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
