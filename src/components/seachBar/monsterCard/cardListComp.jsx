import { Component } from "react";
import '../monsterCard/card-list.style.css'
import Card from "../../Card/card.component";
class CardList extends Component {
  render() {
    const { filtered } = this.props;
    console.log(filtered);
    return (
      <div className="card-list">
        {filtered.map((f) => {
            const {name,id,email}=f
          return (
           <Card name={name} id={id} email={email}/>
          );
        })}
      </div>
    );
  }
}
export default CardList;
