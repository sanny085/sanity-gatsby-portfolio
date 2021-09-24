const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
  query MyQuery {
    allSanityProject {
      edges {
        node { 
          slug {
            current
          } 
        }
      }
    }
  }
`);
 
 //console.log('gatsby-node page ',Object.keys(result));
 const projects = result.data.allSanityProject.edges.map(({node}) => node);

 projects.forEach((project) => {
    actions.createPage({
      path: project.slug.current,
      component:  path.resolve('./src/components/Post/index.js'),
      context: {
        //pass context value to graphql query
        slug: project.slug.current,
      },
    })
  })

}
 

 