import React, {useEffect} from 'react'
import landingForm from '../Utils/landingForm'

const Background = () => {
  useEffect(landingForm, [])
  return (
    <div className="landing-container px-lg-5 mx-lg-5">
      <div className="lp-background">
        <div className="container">
          <div className="lp-heading pt-4 pb-2">
            <h1 className="text-center">LOOP MONDO</h1>
            <h3 className="text-center">CONNECTING THE WORLD</h3>
          </div>
          <div className="lp-intro pt-2">
            <p className="text-center pb-0 mb-0">
              Together Let's Beat The <strong>Covid19</strong> With The Supports
              from <strong>Loop Mondo's PPEs</strong>
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
                    <label htmlFor="name" className="font-weight-bold">
                      Name
                    </label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half col-sm-4  mb-0">
                    <label htmlFor="email" className="font-weight-bold">
                      Email
                    </label>
                    <input type="text" name="email" id="email" required />
                  </div>
                  <div className="field half col-sm-4  mb-0">
                    <label htmlFor="phoneEcosys" className="font-weight-bold">
                      Phone#:
                    </label>
                    <input id="phoneEcosys" name="Phone#" type="tel" required />
                  </div>
                </div>
                <div className="row">
                  <div className="field col-sm-8 px-0">
                    <label htmlFor="message" className="font-weight-bold">
                      Message
                    </label>
                    <textarea name="message" id="message" rows="4"></textarea>
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
              <div className="thankyou-lp-message" style={{ display: 'none' }}>
                <h5 className="text-center">
                  <em>Thanks</em> for contacting us! We will get back to you
                  soon!
                </h5>
                <img
                  src={require('../../images/landing-page/work-process.png')}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background
