import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Products from './Products/Products'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="aboutus"
          className={`${this.props.article === 'aboutus' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
                this.props.onLinkArticle('office')
              }}
            >
              Ha Noi
            </a>
            , with 2 offices in{' '}
            <a
              href=""
              onClick={event => {
                event.preventDefault()
                this.props.onLinkArticle('office')
              }}
            >
              Ho Chi Minh
            </a>{' '}
            and{' '}
            <a
              href=""
              onClick={event => {
                event.preventDefault()
                this.props.onLinkArticle('office')
              }}
            >
              Montreal city
            </a>
            , Loop Mondo is uniquely positioned to create a perfect bridge to
            growth your two way international trade and global manufacturing. By
            experience in international development, manufacturing and
            logistics, Loop Mondo accompanies our partners to create a
            sustainable breakthrough. Certainly, YOU too, Loop Mondo provides
            you with the powerful tools and resources to help your business grow
            sustainably.
          </p>
          <p>
            “The circular economy is a major transformational force that will
            last decades…investors are increasingly considering sustainability
            factors when making investment decisions” —BlackRock
          </p>
          {close}
        </article>

        <article
          id="product"
          className={`${this.props.article === 'product' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Products</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <Products></Products>
          {close}
        </article>

        <article
          id="ecosystem"
          className={`${this.props.article === 'ecosystem' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Ecosystem</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
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
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
        <article
          id="office"
          className={`${this.props.article === 'office' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div id="office">
            <h2 className="major">Visit Office</h2>
            <span className="image main">
              <img src={pic03} alt="" />
            </span>
            <div className="container">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <h5>Montreal</h5>
                </div>
                <div className="col-sm-4 text-center">
                  <h5>Ha Noi (HQ)</h5>
                </div>
                <div className="col-sm-4 text-center">
                  <h5>Ho Chi Minh</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p>
                    <strong>
                      <i class="fas fa-map-marked-alt"></i>
                    </strong>{' '}
                    4026 Rue Mackenzie, Montreal, Quebec, H3S1E6
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <strong>
                      <i class="fas fa-map-marked-alt"></i>
                    </strong>{' '}
                    1B Hoàng Hoa Thám St, Hà Đông, Hà Nội, Vietnam
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <strong>
                      <i class="fas fa-map-marked-alt"></i>
                    </strong>{' '}
                    267 Thong Nhat St, Ward 10, Go vap District, Ho Chi Minh
                    city, Vietnam
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p>
                    <strong>
                      <i className="fas fa-mobile-alt contact-icon mr-2 text-center"></i>
                    </strong>
                    +1 514-984-4295
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <strong>
                      <i className="fas fa-mobile-alt contact-icon mr-2 text-center"></i>
                    </strong>
                    +84 32-958-0696
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <i className="fas fa-mobile-alt contact-icon mr-2 text-center"></i>
                    +84 32-958-0696
                  </p>
                </div>
              </div>
              {/* google map */}
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4"></div>
              </div>
            </div>
          </div>
          {/* meet the team div  */}
          <div className="pt-3" id="meetTeam">
            <h2 className="major">Meet The Team</h2>
            <div className="container">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <img
                    src={require('../images/founders/AI-generated.jpg')}
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
                    <i class="fas fa-phone-volume"></i> (+1) 514-984-4295
                  </p>
                  <p>
                    <i class="fas fa-envelope"></i> bachnx@loopmondo.com
                  </p>
                  <p>
                    Bach has a strong background in sustainability development.
                    Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
                    Praesent eleifend dignissim arcu, at eleifend sapien
                    imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
                    fringila lorem et vehicula lacinia quam. Integer
                    sollicitudin mauris nec lorem luctus ultrices. Aliquam
                    libero et malesuada fames ac ante ipsum primis in faucibus.
                    Cras viverra ligula sit amet ex mollis mattis lorem ipsum
                    dolor sit amet.
                  </p>
                  <p>
                    Bach is also the founder of TreO Bamboo which is a project
                    aims to promote eco-friendly solutions to home accessories.
                    His famous quote is "bambooing the planet for a better
                    life".
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 text-center">
                  <img
                    src={require('../images/founders/AI-generated-2.jpg')}
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
                    <i class="fas fa-phone-volume"></i> (+84) 32-958-0696
                  </p>
                  <p>
                    <i class="fas fa-envelope"></i> tungnt@loopmondo.com
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
                    Praesent eleifend dignissim arcu, at eleifend sapien
                    imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
                    fringila lorem et vehicula lacinia quam. Integer
                    sollicitudin mauris nec lorem luctus ultrices. Aliquam
                    libero et malesuada fames ac ante ipsum primis in faucibus.
                    Cras viverra ligula sit amet ex mollis mattis lorem ipsum
                    dolor sit amet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
                    Praesent eleifend dignissim arcu, at eleifend sapien
                    imperdiet ac. 
                  </p>
                </div>
              </div>
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
                    <i class="fas fa-phone-volume"></i> (+1) 514-984-4295
                  </p>
                  <p>
                    <i class="fas fa-envelope"></i> hocnt@loopmondo.com
                  </p>
                  <p>
                    Hoc is a founding partner at Loop Mondo. He assumes the role
                    of Operation Manager, Web Dev, among many other things.
                    After graduating B.B.A degree in both International Business
                    and information system from Troy University, AL, US, he
                    found his passion in connecting the world by filling in the
                    gap between emerging and emerged countries and easing the
                    hurdle of global supply chain management.
                  </p>
                  <p>
                    Hoc spent several years working in logistics industry and
                    later freelancer web developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {close}
        </article>
      </div>
    )
  }
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
