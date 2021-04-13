import {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid"

export default function GifExpertApp(){

  //const categories = ["One Puch", "Samurai X", "Dragon Ball"];
  const [categories, setcategories] = useState(["Samurai X"])

  // function HandleAdd(){
    // //setcategories([...categories, "HunterXHunter"]);
    // setcategories(cats => [...cats, 'HunterXHunter'])
  // }
  return(
    <>
      <h2>
        GifExpertApp
      </h2>
      <AddCategory setcategories={setcategories} />
      <hr/>
      <ol>
        {
          categories.map((cat)=> (
             <GifGrid category={cat} key={cat}/>
        ))
        }
      </ol>
    </>
  )
}


