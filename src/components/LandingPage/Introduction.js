import React from "react";

const Introduction = () => {
    return (
      <div className="container lp-desc mt-5 pb-3">
        <div className="row text-left">
          <div className="col-sm-4">
            <div className="text-center">
              <i className="fas fa-handshake pb-3"></i>
            </div>
            <h5 className="font-weight-bold">Your Global Partner</h5>
            <p>
              We're proud to be your trusted global parter for the success of a
              global sourcing.
            </p>
          </div>
          <div className="col-sm-4">
            <div className="text-center">
              <i className="fas fa-hand-holding-usd pb-3"></i>
            </div>
            <h5 className="font-weight-bold">Warranty Best Price</h5>
            <p>
              By taking advantages of economies of scale, We're offering you low
              price warranty.
            </p>
          </div>
          <div className="col-sm-4">
            <div className="text-center">
              <i className="fas fa-comments-dollar pb-3"></i>
            </div>
            <h5 className="font-weight-bold">No Service Fee</h5>
            <p>
              During this Covid19 Pandemic, We dont take any serivce fee
              regarding PPEs.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Introduction