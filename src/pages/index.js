import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import SiteBanner from '../components/Utils/SiteBanner'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      portfolioIntro: true,
      portfolioPPE: false,
      portfolioHandcraft: false,
      portfolioOEM: false,
      portfolioSpecial: false,
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleLinkArticle = this.handleLinkArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handlePortfolio = this.handlePortfolio.bind(this)
    this.handleDefault = this.handleDefault.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }
  handlePortfolio = event => {
    let index
    event.preventDefault()
    this.setState({ portfolioIntro: false })
    event.persist()
    const classArray = event.target.className.split(' ')
    for (let i = 0; i < classArray.length; i++) {
      if (classArray[i].includes('portfolio')) {
        index = i
        break
      }
    }
    switch (classArray[index]) {
      case 'portfolio-ppe':
        this.setState({
          portfolioPPE: true,
          portfolioHandcraft: false,
          portfolioOEM: false,
          portfoliospecial: false,
        })
        console.log('done')
        break
      case 'portfolio-handcraft':
        this.setState({
          portfolioHandcraft: true,
          portfolioPPE: false,
          portfolioOEM: false,
          portfoliospecial: false,
        })
        break
      case 'portfolio-OEM':
        this.setState({
          portfolioOEM: true,
          portfolioPPE: false,
          portfolioHandcraft: false,
          portfoliospecial: false,
        })
        break
      case 'portfolio-special':
        this.setState({
          portfoliospecial: true,
          portfolioPPE: false,
          portfolioHandcraft: false,
          portfolioOEM: false,
        })
        break
    }
  }
  handleDefault = event => {
    event.preventDefault()
    this.setState({
      portfolioIntro: true,
      portfolioPPE: false,
      portfolioHandcraft: false,
      portfolioOEM: false,
      portfoliospecial: false,
    })
    // event.persist()
    // console.log(event)
  }
  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }
  handleLinkArticle(article) {
    this.setState({
      isArticleVisible: this.state.isArticleVisible,
      article,
    })
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
        this.setState({ portfolioIntro: true })
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <SiteBanner
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              onOpenArticle={this.handleOpenArticle}
              onLinkArticle={this.handleLinkArticle}
            ></SiteBanner>
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              portfolioIntro={this.state.portfolioIntro}
              portfolioPPE={this.state.portfolioPPE}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              onOpenArticle={this.handleOpenArticle}
              onLinkArticle={this.handleLinkArticle}
              onHandlePortfolio={this.handlePortfolio}
              onHandleDefault={this.handleDefault}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
