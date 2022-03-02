import React from 'react'
import { URL } from '../../environment'

const VideoDetails = ({video}) => {
  return (
    <div>
        <h3>{video.name}</h3>
        <p>{video.content}</p>
    </div>
  )
}

// STATIC GENERATION

export const getStaticPaths = async () => {
    const res = await fetch (`${URL}/api/videos`)
    const videos = await res.json()

    const paths = videos.map(video => {
        return {
            params: { id: video.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch (`${URL}/api/videos/${context.params.id}`)

    const video = await res.json()

    return {
       props: {
           video,
       }
    }
}

// SERVER-SIDE RENDERING

// export const getServerSideProps = async (context)=> {
//     const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const post = await res.json()

//     return {
//         props: {
//             post,
//         }
//     }
// }
export default VideoDetails