import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
      <p className="copyright">
        {' '}
        Made with <i className="fas fa-fire-alt"></i> by Hoc Nguyen - &copy;
        Loop Mondo 2020 - Connecting The World
      </p>
    </footer>
  )
}

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
