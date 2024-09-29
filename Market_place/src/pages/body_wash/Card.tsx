import { ReactNode } from "react";
import '../card.css'
import lotion from "../../assets/lotion.png"


function Card(props: { cname: ReactNode; status: ReactNode; location: ReactNode; }) {


  return (
    <div id="div">
    <div id="image">
   {/* <p id="status">{props.status}</p> */ } 
    <img src={lotion} alt='' onClick={function(){
      window.location.href = './product_info/index.tsx';
    }}></img>
    </div>
    <div id="description">
        <p>{props.cname}</p>
        <p>{props.location}</p>
    </div>
    </div>
  );
}

export default Card;
