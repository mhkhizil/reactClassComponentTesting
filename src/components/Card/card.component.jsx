import { Component } from "react";
import '../Card/card.style.css';
class Card extends Component{
render(){
    const {name,id,email}=this.props;
    return(
        <div key={id} className="card-container">
        <img  alt={`monsters ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
      <h1 >{name}</h1>
      <p>{email}</p>
    </div>
    )

}
}
export default Card;