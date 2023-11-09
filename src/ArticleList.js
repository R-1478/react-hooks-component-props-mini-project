import Article from "./Article";

function ArticleList({posts}){
  const myPost = posts.map(post => {
return <Article 
key={post.id}
 title={post.title}
  date={post.date} 
   preview={post.preview} 
   minutes={post.minutes}
   />
  })
  return(
    <>
    <main >
    
         {myPost}
        
    </main>
    </>
  )
}
export default ArticleList
