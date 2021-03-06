import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Products from './Products/Products'
import Ecosystem from './Ecosystem'
import Office from './Office'
import MeetTeam from './MeetTeam'
import contactForm from './Utils/contactForm'

const Main = props => {
  React.useEffect(contactForm, [])
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="aboutus"
        className={`${props.article === 'aboutus' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About Us</h2>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <p>
          Loop Mondo helps our partners to grow organically by bringing truly
          sustainable solutions in global manufacturing innovative and more
          economically efficient. In the context of global economy and
          international value chains, Loop Mondo optimize all step toward
          material development, product design and manufacturing processes to
          integrate the paths of environmental sustainability and economic
          growth with the profitably of companies.
        </p>
        <p>
          Based in{' '}
          <a
            href=""
            onClick={event => {
              event.preventDefault()
              props.onLinkArticle('office')
            }}
          >
            Ha Noi
          </a>
          , with 2 offices in{' '}
          <a
            href=""
            onClick={event => {
              event.preventDefault()
              props.onLinkArticle('office')
            }}
          >
            Ho Chi Minh
          </a>{' '}
          and{' '}
          <a
            href=""
            onClick={event => {
              event.preventDefault()
              props.onLinkArticle('office')
            }}
          >
            Montreal city
          </a>
          , Loop Mondo is uniquely positioned to create a perfect bridge to
          growth your two way international trade and global manufacturing. By
          experience in international development, manufacturing and logistics,
          Loop Mondo accompanies our partners to create a sustainable
          breakthrough. Certainly, YOU too, Loop Mondo provides you with the
          powerful tools and resources to help your business grow sustainably.
        </p>
        <p>
          “The circular economy is a major transformational force that will last
          decades…investors are increasingly considering sustainability factors
          when making investment decisions” —BlackRock
        </p>
        {close}
      </article>

      <article
        id="portfolio"
        className={`${props.article === 'portfolio' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Company Portfolio</h2>
        <Products
          portfolioIntro={props.portfolioIntro}
          portfolioPPE={props.portfolioPPE}
          onHandlePortfolio={props.onHandlePortfolio}
          onHandleDefault={props.onHandleDefault}
        ></Products>
        {close}
      </article>

      <article
        id="ecosystem"
        className={`${props.article === 'ecosystem' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Ecosystem</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <Ecosystem></Ecosystem>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form
          className="gform"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbzj1IPU-7uQk69pLXc0PyrdOyyCxcVJf4r7Wj0VkA/exec"
          id="contactForm"
        >
          <div className="form-elements" id="contactElements">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
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
          <div className="thankyou-contact-message" style={{ display: 'none' }}>
            <h5 className="text-center">
              <em>Thanks</em> for contacting us! We will get back to you soon!
            </h5>
          </div>
        </form>
        <ul className="icons">
          <li>
            <a
              href="https://www.facebook.com/loopmondoltd"
              className="icon fa-facebook"
              rel="noreferrer noopener"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
      <article
        id="meetus"
        className={`${props.article === 'meetus' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <Office></Office>
        {/* meet the team div  */}
        <MeetTeam></MeetTeam>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
