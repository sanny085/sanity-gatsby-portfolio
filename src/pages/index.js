import * as React from "react"
import { Link, graphql } from "gatsby"
import {  GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query MyQuery {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }

`

const IndexPage = ({data}) => (

  <Layout>
    <Seo title="Home" />
    <h1>My Portfolio</h1>  
    <ul style={{listStyle:'none', display:'flex', alignItems: 'space-between', padding:'0px'}}> 
    { 
      data.allSanityProject.edges.map(({node})=> {
       return(
        
          <li key={node.slug.current} style={{flex:'1 45%', maxWidth:'45%', margin: '5px'}}>
            <Link to={node.slug.current}>
              <h2 style={{fontSize:'24px'}}>{node.title}</h2>
            </Link> 
            <GatsbyImage image={node.image.asset.gatsbyImageData} alt={node.title}/>
            <p style={{marginTop:'1.5rem'}}>{node.description}</p>
            <Link to={node.slug.current}>See Project Details</Link>
          </li>
       
      )})
    }
    </ul>
  </Layout>
)

export default IndexPage
