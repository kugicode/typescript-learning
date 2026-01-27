interface Post {
  username: string;
  content: string;
  likes: number;
  isPublished: boolean;
  category: "news" | "manga" | "code"
}

function getPostStatus(status: boolean): string{
  if(status){
    return "Public";
}
else{
  return "Private";
}
}

function App() {
const posts :Post[] = [
{username: "anas", content: "DQDai", likes: 22, isPublished: true, category: "manga"},
{username: "taikobo", content: "hoshin", likes: 44, isPublished: true, category: "manga"},
{username: "popp", content: "javascript", likes: 55, isPublished: false, category: "code"},
]

  return (
    <>
  {posts.map((m) => (
    <div key={m.username}>
    <p>{m.username}</p>
    <p>{m.content}</p>
    <p>{getPostStatus(m.isPublished)}</p>
    </div>
  ))}

  
    </>
  )
}

export default App