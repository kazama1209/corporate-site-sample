import { GetStaticPaths, GetStaticProps } from "next"
import { ThemeProvider } from "@material-ui/core/styles"

import Post from "../../components/blog/Post"
import PageTemplate from "../../components/layouts/PageTemplate"
import theme from "../../components/utils/theme"

import { fetchAllPosts, fetchPostById } from "../../lib/api"

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchAllPosts()
  const paths = posts.map(({ id }) => `/blog/${id}`)

  return { 
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = String(params.id)
  const post = await fetchPostById(id)

  return {
    props: { post },
    revalidate: 1
  }
}

interface Post {
  post: {
    id: string
    title: string
    publishedAt: string
    thumbnail: {
      url: string
    }
    body: HTMLElement
  }
}

const BlogId = ({ post }: Post) => {
  return (
    <ThemeProvider theme={theme}>
      <PageTemplate title="Blog | Corporate Site Sample">
        <Post
          id={post.id}
          title={post.title}
          publishedAt={post.publishedAt}
          thumbnail={post.thumbnail.url}
          body={post.body}
        />
      </PageTemplate>
    </ThemeProvider>
  )
}

export default BlogId
