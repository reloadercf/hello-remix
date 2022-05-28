import { Form,useLoaderData } from "@remix-run/react"

const user ={
  name:'Carlos',
  movie:'back to de future',
  favFood: ['chalupas','pozole']
}

export const loader = () =>{
  return user;
}

export const action = async ({request}) =>{
  const formData = await request.formData();
  const food = formData.get('food');
  user.favFood.push(food);
  return null;
}

export default function Index() {
  const user=useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix {user.name}</h1>

      <h2>Comida favorita:</h2>
      <p />
        <ul>
          {user.favFood.map((onlyFood,i)=>(
            <li key={i}>{onlyFood}</li>
          ))}
        </ul>
      
      <form method="post">
        <label>add food
          <input type="text" name="food" placeholder="Agrega tu papa" />
        </label>
        <button type="submit">send</button>
      </form>
    </div>
  );
}
