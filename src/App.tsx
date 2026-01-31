import PostCard, {type Post } from "./components/PostCard"


function App() {
const posts :Post[] = [
{username: "anas", content: "DQDai", likes: 22, isPublished: true, category: "manga"},
{username: "taikobo", content: "hoshin", likes: 44, isPublished: true, category: "manga"},
{username: "popp", content: "javascript", likes: 55, isPublished: false, category: "code"},
]

  return (
    <>
  {posts.map((m) => (
    <PostCard key={m.username} newPost={m}/>
    
  ))}
  
    </>
  )
}

export default App