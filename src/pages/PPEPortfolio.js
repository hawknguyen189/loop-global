import React, { useEffect } from 'react'
import Layout from '../components/layout'
import landingForm from '../components/Utils/landingForm'
import Background from '../components/LandingPage/Background'
import Introduction from '../components/LandingPage/Introduction'
import Certificate from '../components/LandingPage/Certificate'
import Product from '../components/LandingPage/Product'

const PPEPortfolio = () => {
  return (
    <Layout>
      <div className="jumbotron landing-page py-0">
        <Background></Background>
        {/* end landing form */}
        <Product></Product>
        {/* end product info  */}
        <Introduction></Introduction>
        {/* end landing desc */}
        <Certificate></Certificate>
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

export default PPEPortfolio
