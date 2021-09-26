import React from 'react'
import { graphql, Link } from 'gatsby';
import {  GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
 query($slug: String) {
  sanityProject(slug: {current: {eq: $slug}}) {
      title
      description
      image {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      slug {
        current
      }
    }
  }
`

const Post = ({data}) => {
    console.log('each project page', data.sanityProject.title)
    return (
      <div>
         <h1>{data.sanityProject.title}</h1>
         <p>{data.sanityProject.description}</p>
         <GatsbyImage image={data.sanityProject.image.asset.gatsbyImageData} alt={data.sanityProject.title}/>
        <Link to="/">Back To Home Page</Link>
      </div>
    )
}

export default Post;
