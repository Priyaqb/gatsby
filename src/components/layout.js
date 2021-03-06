import React from "react"


import Header from '../components/header'
import Footer from '../components/footer'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return(
    <div className={layoutStyles.layout}>
        <Header />
        <div className={layoutStyles.content}>
          {props.children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout