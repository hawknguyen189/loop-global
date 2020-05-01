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
              M.A. Bach Nguyen completed a Master of International Law from
              Université François Rabelais de Tours (France) in 2009. Prior to
              Master of law, Bach completed her undergraduate degree at
              University of Foreign Languages (Hanoi) in French Language Faculty
              in 2002. Since completing law master program, he spent 4 years
              studying in Intellectual Property Law at Université de Sherbrooke
              and living in Québec, Canada. He completed a Master of Environment
              and Sustainable Development Management from Université de
              Sherbrooke in 2016. M.A.
            </p>
            <p>
              Bach Nguyen has 10 years of working as an international project
              manager in education and environment and over 5 years in
              international trade and investment consulting between Canada and
              Vietnam. Currently, Mr. Bach is the founder and CEO of TreO Bamboo
              (Canada).
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
