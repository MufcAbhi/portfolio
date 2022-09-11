import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';
import SearchPosts from '../components/searchPosts';
import { rhythm } from '../utils/typography';

const Blog = (props) => {
  const { data, navigate, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const { localSearchBlog } = data;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <SearchPosts posts={posts} localSearchBlog={localSearchBlog} navigate={navigate} location={location} />
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    </div>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
