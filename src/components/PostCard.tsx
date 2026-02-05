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

const handleDeleteComment = (commentToDelete : number) => {
setAllComment(allComment.filter((c, index) => index !== commentToDelete))

}


  return(
    <div>
      <p>{newPost.username}</p>
      <p>{newPost.content}</p>
      <p style={newPost.category === "manga" ? {color: "red"  } : newPost.category === "code" ? {color: "green"}: {color: "blue"}}>{newPost.category}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {isEditting ? ( <> <input value={editableContent} onChange={(e) => setEditableContent(e.target.value)} /> <button onClick={() => setIsEditing(false)}>Save</button>  </> )  : <p>{ editableContent }</p>}
      <p>{getPostStatus(newPost.isPublished)}</p>
      <button onClick={()=> setLikesCount(likesCount + 1)}>Like</button>
      { likesCount }
      <p></p>
      <button onClick={() => setIsBookmarked(!isBookmarked)}>
        { isBookmarked ? "Saved ✅": "Bookmark 🔖" }</button>
        <input type="text" placeholder="type..." value={comment} onChange={ handleTextChange }/>
        <button onClick={handleAddComment} disabled={comment === ''}>Post comment</button>
        {allComment.map((m, index) => (
        <p key={index}>{m} <button onClick={() => handleDeleteComment(index)}>x</button> 
        </p>
       
        ))}
        <p>{ comment }</p>col
    </div>
  )
}

export default PostCard