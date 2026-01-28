import { useState } from "react";

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

function PostCard({ newPost }: { newPost: Post }){
  const [likesCount, setLikesCount] = useState<number>(newPost.likes);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setComment(e.target.value);
}
  return(
    <div>
      <p>{newPost.username}</p>
      <p>{newPost.content}</p>
      <p>{getPostStatus(newPost.isPublished)}</p>
      <button onClick={()=> setLikesCount(likesCount + 1)}>Like</button>
      { likesCount }
      <p></p>
      <button onClick={() => setIsBookmarked(!isBookmarked)}>
        { isBookmarked ? "Saved ✅": "Bookmark 🔖" }</button>
        <input type="text" placeholder="type..." value={comment} onChange={ handleTextChange }/>
        <p>{ comment }</p>
    </div>
  )
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
    <PostCard key={m.username} newPost={m}/>
    
  ))}
  
    </>
  )
}

export default App