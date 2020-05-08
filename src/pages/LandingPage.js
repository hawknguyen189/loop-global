import React, { useEffect } from 'react'
import Layout from '../components/layout'
import landingForm from '../components/Utils/landingForm'

const LandingPage = () => {
  useEffect(landingForm, [])
  return (
    <Layout>
      <div className="jumbotron landing-page py-0">
        <div className="landing-container px-sm-5 mx-sm-5">
          <div className="lp-background">
            <div className="container">
              <div className="lp-heading pt-4 pb-2">
                <h1 className="text-center">LOOP MONDO</h1>
                <h3 className="text-center">CONNECTING THE WORLD</h3>
              </div>
              <div className="lp-intro pt-2">
                <p className="text-center pb-0 mb-0">
                  Together Let's Beat The <strong>Covid19</strong> With The
                  Supports from <strong>Loop Mondo's PPEs</strong>
                </p>
                <p className="text-center">
                  Proud To Be Among Leaders In The Fight Against The Pandemic
                </p>
              </div>
              <div className="lp-form container px-5 pb-2">
                <form
                  className="gform"
                  method="POST"
                  action="https://script.google.com/macros/s/AKfycbzYAsOjcJITBa4llsdNOSd4MhSZjj1x2lhrmNpS/exec"
                  id="lpForm"
                >
                  <div className="form-elements" id="lpElements">
                    <div className="row">
                      <div className="field half first col-sm-4 mb-0">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                      </div>
                      <div className="field half col-sm-4  mb-0">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required />
                      </div>
                      <div className="field half col-sm-4  mb-0">
                        <label htmlFor="phoneEcosys">Phone#:</label>
                        <input
                          id="phoneEcosys"
                          name="Phone#"
                          type="tel"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="field col-sm-8 px-0">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <ul className="actions">
                      <li>
                        <button className="button-success pure-button button-xlarge">
                          <i className="fa fa-paper-plane"></i>&nbsp;Send
                        </button>
                      </li>
                      <li>
                        <input type="reset" value="Reset" />
                      </li>
                    </ul>
                  </div>
                  <div
                    className="thankyou-lp-message"
                    style={{ display: 'none' }}
                  >
                    <h5 className="text-center">
                      <em>Thanks</em> for contacting us! We will get back to you
                      soon!
                    </h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end landing form */}
        <div className="container lp-desc mt-5 pb-3">
          <div className="row text-left">
            <div className="col-sm-4">
              <div className="text-center">
                <i className="fas fa-handshake pb-3"></i>
              </div>
              <h5 className="font-weight-bold">Your Global Partner</h5>
              <p>
                We're proud to be your trusted global parter for the success of
                a global sourcing.
              </p>
            </div>
            <div className="col-sm-4">
              <div className="text-center">
                <i className="fas fa-hand-holding-usd pb-3"></i>
              </div>
              <h5 className="font-weight-bold">Warranty Best Price</h5>
              <p>
                By taking advantages of economies of scale, We're offering you
                low price warranty.
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
        {/* end landing desc */}
        <div className="lp-cert">
          <div className="container border-top border-bottom py-5">
            <div className="row">
              <div className="col-sm-3 align-self-center">
                <img
                  src={require('../images/landing-page/FDA-cert.png')}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-3 align-self-center pt-2 pb-1">
                <img
                  src={require('../images/landing-page/CE-cert.png')}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-3 align-self-center py-1">
                <img
                  src={require('../images/landing-page/iso-9001.png')}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-sm-3 align-self-center">
                <img
                  src={require('../images/landing-page/iso-13485.png')}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end landing page cert */}
        <div className="container ceo-quote text-center py-3">
          <p>
            <strong>
              "We aim to bridge the gap in the communication hurdle between the
              emerging countries and the emerged ones all in terms of
              Importing/Exporting, Offshoring, Outstourcing, or Turn-key. We're
              proud to be your trusted global parter for the success of a global
              supply chain management. " - Loop Mondo CEO
            </strong>
          </p>
        </div>
        {/* end ceo quote */}
        <div className="container policy text-right">
          <div className="row justify-content-end">
            <div className="col-sm-3">
              <a href="">
                <p>Terms Of Service</p>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="">
                <p>Privacy Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage
