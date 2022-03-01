import React from 'react'
import Post from './Post'

const PostList = ({posts}) => {
  return (
    <div>
        {posts.map(post =>(
        <div key={post.id}>
            <Post post={post}/>
        </div>
      ))}
    </div>
  )
}

export default PostList