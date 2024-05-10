// import logo from './logo.svg';
// import './App.css';
// import SearchBar from './components/SearchBar';

// function App() {
//   return (
//     <div className="App">
//       <h1>Bakery Shop</h1>
//       <SearchBar />
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import SearchBar from './components/SearchBar'
import BakeryData from './model/BakeryData'
import BakeryList from './components/BakeryList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bakeryList: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.bakerySearch(this.state.searchTerm);
  }

  bakerySearch(term) {
    const filteredData = BakeryData.filter((bakery) =>
      bakery.name.toLowerCase().includes(term.toLowerCase())
    )

    this.setState({
      bakeryList: filteredData,
      searchTerm: term
    })
  }

  render() {
    return (
      <div className="App container">
        <Navigation />
        <SearchBar onSearchTermChange={(term) => this.bakerySearch(term)} />
        <BakeryList bakeries={this.state.bakeryList} />
      </div>
    )
  }
}

export default App