import React, { useEffect } from 'react'
import D3Gear from './Utils/D3Gear'
import ecoSystemForm from './Utils/ecoSystemForm'
// import graph from './graph'
const Ecosystem = () => {
  useEffect(D3Gear, []) //useEffect will run only 1 time
  useEffect(ecoSystemForm, []) //useEffect will run only 1 time
  return (
    <div>
      <div className="d-flex justify-content-center">
        <svg className="" id="ecosystemD3"></svg>
      </div>
      <div className="container ecosystem-intro">
        <div className="row">
          <p className="font-weight-light">
            Loop Mondo’s ecosystem is a circle database using IA to promote the
            circular economy not only in a given jurisdiction but also by
            optimizing synergies in working with other countries to achieve
            material circularity and ultimately decoupling of resource use from
            economic growth at the macro level.
          </p>
        </div>
        <div className="row pt-3 ">
          <form
            className="gform"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbx6BIcAOh8uEp2muIAxyZ5_5ekI9Gpdi35JrQRu/exec"
            id="ecosystemForm"
          >
            <div className="form-elements" id="ecosystemElements">
              <h6 className="text-center ecosystem-announce">
                Please help fill out the below that helps us screen and match
                the perfect feasible solution
              </h6>
              <fieldset className="form-group">
                <label htmlFor="name">Name: </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name or company name"
                />
              </fieldset>
              <div className="form-group">
                <label htmlFor="businessType">Business Type</label>
                <select
                  className="form-control"
                  id="businessType"
                  name="Business Type"
                  rows="10"
                >
                  <option
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Manufacturer, Producer, Resource, Service"
                  >
                    Input
                  </option>
                  <option
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Industry, Distributor, Trader"
                  >
                    Output
                  </option>
                </select>
              </div>

              <fieldset className="form-group">
                <label htmlFor="message">Message: </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </fieldset>

              <fieldset className="form-group">
                <label htmlFor="emailEcosys">
                  <em>Your</em> Email Address:
                </label>
                <input
                  id="emailEcosys"
                  className="form-control"
                  name="email"
                  type="email"
                  required
                  placeholder="your.name@email.com"
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="phoneEcosys">
                  <em>Your</em> Phone#:
                </label>
                <input
                  id="phoneEcosys"
                  className="form-control"
                  name="Phone#"
                  type="tel"
                  required
                  placeholder="Your phone# to contact you"
                />
              </fieldset>

              {/* <fieldset className="form-group">
                <label htmlFor="color">Favourite Color: </label>
                <input id="color" name="color" placeholder="green" />
              </fieldset> */}

              <fieldset className="pure-group honeypot-field">
                <label htmlFor="honeypot">
                  Kindly leave this empty for stopping spam bot purpose
                </label>
                <input id="honeypot" type="text" name="honeypot" readOnly />
              </fieldset>
              <div className="row justify-content-center pt-4">
                <button className="button-success pure-button button-xlarge">
                  <i className="fa fa-paper-plane"></i>&nbsp;Send
                </button>
              </div>
            </div>

            {/* <!-- Customise the Thankyou Message People See when they submit the form: --> */}
            <div className="thankyou-eco-message" style={{ display: 'none' }}>
              <h5 className="text-center">
                <em>Thanks</em> for contacting us! We will get back to you soon!
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Ecosystem
