import PostCard from "../components/post-card"

export function PostLists ({ posts }) {
    return (
        <>
                  {
        posts?.map(post => {
          const {
            id,
            user,
            content 
          } = post
          const {
            username: userName,
            name: userFullName,
            avatar_url: avatarUrl,
          } = user
          return <PostCard 
          key={id} 
          userName={userName} 
          userFullName={userFullName} 
          avatarUrl={avatarUrl}
          content={content} />
        })
      } 

        </>
    )
}