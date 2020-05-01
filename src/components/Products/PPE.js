import React from 'react'

const PPE = () => {
  return (
    <div className="d-none">
      <h3>4-Ply Disposable Medical Face Mask</h3>
      <div className="product-slider"></div>
      <div className="product-heading">
        <h6>
          Designed and manufactured by our well-established medical equipment
          suppliers
        </h6>
      </div>
      <div className="product-desc">
        <p>
          <strong>Good material:</strong> made of soft and breathable non-woven
          fiber fabric, which offers you a feeling of comfortable feeling
        </p>
        <p>
          <strong>Functions:</strong> disposable 4 layer filter face masks can
          help filter out residue, debris, dust, pollen and smoke in daily life
        </p>
        <p>
          <strong>One size fits most people:</strong> the disposable mouth mask
          size is 17.9 x 9.5 cm/ 7.05 x 3.7 inch, suitable for most adults and
          children over 8 years old
        </p>
        <p>
          <strong>Elastic ear loops:</strong> with 2 pieces strings on 2 sides,
          it has good elastic stretchable, not easy to be broken, comfortable
          and easy to wear
        </p>
        <p>
          <strong>Quantity:</strong> package includes 50 pack fashion blue/white
          disposable face masks, meet your demands of daily life
        </p>
      </div>
      <div className="product-specification">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <img
                  src={require('../../images/loop-mondo-mask-angle.png')}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="row ">
                <p className="col-sm text-center">
                  <em>Medical Face Mask</em>
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <p>
                  <strong>Pieces or Pieces Per Carton:</strong> 50 Pcs / Box, 50
                  Boxes/ Carton
                </p>
                <p>
                  <strong>Packaging Info:</strong> 6,5kg Carton Size DxWxH (cm)
                  : 17,5 x 40 x 19,5 cm
                </p>
              </div>
              <div className="row">
                <p>
                  <strong>Certificate:</strong> FDA, CE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm d-flex justify-content-center">
            <div className="btn btn-primary btn-request">Request Quotation</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PPE
