import React from 'react'

const MeetTeam = () => {
  return (
    <div className="pt-3" id="meetTeam">
      <h2 className="major">Meet The Team</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <img
              src={require('../images/founders/bach-nguyen.jpg')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-8">
            <h6 className="mb-0">
              <strong>Nguyen, Bach</strong>
            </h6>
            <p className="mb-0">
              <strong>Founder</strong>
            </p>
            <p className="mb-0">
              <em>CEO</em>
            </p>
            <p className="mb-0">
              <i className="fas fa-phone-volume"></i> (+1) 514-984-4295
            </p>
            <p>
              <i className="fas fa-envelope"></i> bachnx@loopmondo.com
            </p>
            <p>
              Bach has a strong background in sustainability development. Lorem
              ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
              eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
              erat volutpat. Praesent urna nisi, fringila lorem et vehicula
              lacinia quam. Integer sollicitudin mauris nec lorem luctus
              ultrices. Aliquam libero et malesuada fames ac ante ipsum primis
              in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem
              ipsum dolor sit amet.
            </p>
            <p>
              Bach is also the founder of TreO Bamboo which is a project aims to
              promote eco-friendly solutions to home accessories. His famous
              quote is "bambooing the planet for a better life".
            </p>
          </div>
        </div>
        {/* end founder intro */}
        <div className="team-slider mx-auto"></div>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img
              src={require('../images/founders/tung-nguyen-white.jpg')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-8">
            <h6 className="mb-0">
              <strong>Nguyen, Tung</strong>
            </h6>
            <p className="mb-0">
              <strong>Founder</strong>
            </p>
            <p className="mb-0">
              <em>Supplier Relationship Manager, CTO</em>
            </p>
            <p className="mb-0">
              <i className="fas fa-phone-volume"></i> (+84) 32-958-0696
            </p>
            <p>
              <i className="fas fa-envelope"></i> tungnt@loopmondo.com
            </p>
            <p>
              Tung is the co-founder of LoopMondo. He takes on the role of
              research and development of technology and design (CTO) and
              Supplier Relationship Manager. He is passionate about creating and
              designing projects of high economic and cultural value in the
              present but still ensures sustainable development in the future .
              According to the judgment, each country must find its unique
              socio-economic and environmental heritage values to have a high
              position in the world.
            </p>
            <p>
              He graduated with a DPEA- master's degree in urban design,
              heritage and sustainable development from the National University
              of Architecture in Toulouse (France) and Hanoi Architectural
              University (Vietnam).
            </p>
          </div>
        </div>
        {/* end founder intro */}
        <div className="team-slider mx-auto"></div>
        <div className="row">
          <div className="col-sm-4 text-center">
            <img
              src={require('../images/founders/hoc-nguyen.jpg')}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-8">
            <h6 className="mb-0">
              <strong>Nguyen, Hoc</strong>
            </h6>
            <p className="mb-0">
              <strong>Founder</strong>
            </p>
            <p className="mb-0">
              <em>Operation Manager, Web Dev</em>
            </p>
            <p className="mb-0">
              <i className="fas fa-phone-volume"></i> (+1) 514-984-4295
            </p>
            <p>
              <i className="fas fa-envelope"></i> hocnt@loopmondo.com
            </p>
            <p>
              Hoc is a founding partner at Loop Mondo. He assumes the role of
              Operation Manager, Web Dev, among many other things. After
              graduating B.B.A degree in both International Business and
              information system from Troy University, AL, US, he found his
              passion in connecting the world by filling in the gap between
              emerging and emerged countries and easing the hurdle of global
              supply chain management.
            </p>
            <p>
              Hoc spent several years working in logistics industry and later
              freelancer web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MeetTeam
