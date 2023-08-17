import PostCard from "./post-card"
import {type Post} from "@/app/types/posts"

export function PostLists ({ posts }: {posts: Post[]}) {
    return (
        <>
                  {
        posts?.map(post => {
          const {
            id,
            content,
            user,
          } = post
          const {
            username: userName,
            name: userFullName,
            avatar_url: avatarUrl,
          } = user
          return (
          <PostCard 
          userName={userName}
          avatarUrl={avatarUrl}
          userFullName={userFullName}
          content={content}
          key={id} 
           />
           )
        })
      } 

        </>
    )
}