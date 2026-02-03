import { useState } from "react";

export interface Post {
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
  const [isEditting, setIsEditing] = useState <boolean>(false);
  const [editableContent, setEditableContent] = useState <string>(newPost.content)
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => { //You do this instead when writing Typescript in js you'd do (e.target.value)
  setComment(e.target.value);
}

const handleAddComment = () => {
  setAllComment([...allComment, comment])
  setComment("");
}

const handleDeleteComment = (commentToDelete : string) => {
setAllComment(allComment.filter((c) => c !== commentToDelete))

}


  return(
    <div>
      <p>{newPost.username}</p>
      <p>{newPost.content}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {isEditting ? ( <> <input value={editableContent} onChange={(e) => setEditableContent(e.target.value)} /> <button onClick={() => setIsEditing(false)}>Save</button>  </> )  : <p>{ editableContent }</p>}
      <p>{getPostStatus(newPost.isPublished)}</p>
      <button onClick={()=> setLikesCount(likesCount + 1)}>Like</button>
      { likesCount }
      <p></p>
      <button onClick={() => setIsBookmarked(!isBookmarked)}>
        { isBookmarked ? "Saved ✅": "Bookmark 🔖" }</button>
        <input type="text" placeholder="type..." value={comment} onChange={ handleTextChange }/>
        <button onClick={handleAddComment}>Post comment</button>
        {allComment.map((m) => (
        <p key={m}>{m} <button onClick={() => handleDeleteComment(m)}>x</button> 
        </p>
       
        ))}
        <p>{ comment }</p>
    </div>
  )
}

export default PostCard