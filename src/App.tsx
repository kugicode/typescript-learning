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
  const [allComment, setAllComment] = useState <string[]>([]);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => { //You do this instead when writing Typescript in js you'd do (e.target.value)
  setComment(e.target.value);
}

const handleAddComment = () => {
  setAllComment([...allComment, comment])
  setComment("");
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
        <button onClick={handleAddComment}>Post comment</button>
        {allComment.map((m) => (
        <p key={m}>{m}</p>
        ))}
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