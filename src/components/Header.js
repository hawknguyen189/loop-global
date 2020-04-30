import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="row justify-content-center">
                <div className="d-sm-flex pl-sm-2">
                  <h1 className="pl-sm-5">Loop </h1>
                  <span>
                    <a href="" className="">
                      <img
                        src={require('../images/loop-logo.png')}
                        alt=""
                        width="90"
                        height="90"
                      />
                    </a>
                  </span>
                  <h1>Global</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          We aim to bridge the gap in the communication hurdle between the
          emerging countries and the emerged ones all in terms of
          Importing/Exporting, Offshoring, Outstourcing, or Turn-key. We're
          proud to be your trusted global parter for the success of a global
          supply chain management.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('aboutus')
            }}
          >
            About Us
          </button>
        </li>
        <li className="">
          <button
            onClick={() => {
              props.onOpenArticle('product')
            }}
          >
            Products
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('ecosystem')
            }}
          >
            Ecosystem
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('office')
            }}
          >
            Office
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
