interface User {
  name: string;
  age: number;
  isStudent: boolean;
  role: "admin" | "user";
  bio?: string;
}

function greet (name: string): string {
  return "Hello " + name
}
  
function App() {
const hobbies: string[] = ["coding", "manga"];
const me: User = {name: "anas", age: 22, isStudent: true, role: "admin", bio: "..."}

  return (
    <>
  <p>My name is { me.name }!</p>
  <p>I am { me.age } years old!</p>
  <p>{ hobbies[0] }</p>
  <p>{ greet(me.name) }</p>
    </>
  )
}

export default App