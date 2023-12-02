import { Component } from 'react';
import CardList from './components/seachBar/monsterCard/cardListComp';
import SearchBoX from './components/seachBar/searchBar/SearchboxCompo'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => this.setState(() => {
      return { monsters: data }
    }, () => {
      console.log(this.state);
    }))
  };
 onSearchChange= e=>{
    this.setState(()=>{
      return {searchField:e.target.value.toLowerCase()}
    })
    };

  render() {
    const {monsters,searchField}=this.state;
    const {onSearchChange}=this
    const filtered=monsters.filter((m)=>{
      return(
          m.name.toLowerCase().includes(searchField)
      )
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBoX onSearchChange={onSearchChange} />
        {/* {
         filtered.map((m) => {
            return (
              <h1>{m.name}</h1>
            )
          })
        } */}
        <CardList filtered={filtered}/>
      </div>
    );
  }


}

export default App;
