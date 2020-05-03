import React from 'react'

const SiteBanner = props => {
  return (
    <div
      className={`${
        props.isArticleVisible === true
          ? 'd-none'
          : ''
      } ${props.articleTimeout ? 'timeout' : ''} warning py-1 px-1 text-center`}
    >
      <a
        href=""
        className="banner"
        onClick={event => {
          event.preventDefault()
          props.onOpenArticle('portfolio')
        }}
      >
        During this time, we are safely conducting business and doing our best
        to flaten the Covid-19 curve. Stay safe, be healthy and trust
        LoopMondo's equipments to protect you. Click here to read more.
      </a>
    </div>
  )
}

export default SiteBanner
