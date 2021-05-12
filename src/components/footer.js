import React from "react"

import {graphql, useStaticQuery} from 'gatsby'
import * as footerStyles from './footer.module.scss'


const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return(
    <p className={footerStyles.footer}>Created by {data.site.siteMetadata.author} &copy;2021 </p>
  )
}

export default Footer