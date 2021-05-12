import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'

import * as blogStyles from './blog.module.scss'


const BlogPage = (props) => {
  const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
                slug
            }
          }
        }
      }
		}
  `)
  
  return(
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.blogList}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <Link to={edge.node.fields.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <span>{edge.node.frontmatter.date}</span>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
    
  )
}

export default BlogPage