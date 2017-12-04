import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
    "Matrix",
    "Harry Potter",
    "Starwars",
    "Oldboy"
]

const movieImages = [
    "https://cdn.namuwikiusercontent.com/storage/49dea68c02fb61be721708a4abb79c2028ce22dee90e3d6ae8d0d29065592b21670009eed2e6ccc9dfb3b51b84850078d76348eaa06ca41aa9563eae3fcbd46b49571089ba4d3a040c3cbe8485b00855?e=1518930000&k=TVb5UIJybIL0Z_3gleoWBg",
    "https://cdn.namuwikiusercontent.com/storage/a980b78a3d89b033d07486b5714e267476666bca4d9303fa9f08655189ee0e063394e787c1954ab8b58ad9fe7fb626fa3c92d290573994292fe93c47553d23fca424787795112a371993a6033dc77b11?e=1519222400&k=uop2kl0IyiV77xFHK2eyEQ",
    "https://cdn.namuwikiusercontent.com/storage/aab5a29107acef9ebfc1c43aac3de61177afe72f9594d6e002e2a1f18d04156c5fbb8af2515ffb299d825b371849515c29efb9baeb40b7a425d2c12f891c0606f881921bce22e250c25fcdee0aa26ab5?e=1516878259&k=eJHJ1Td_9t9C-YlrnP6uWg",
    "https://cdn.namuwikiusercontent.com/storage/65a45b6f3817e25ba877179dfd1a6859dcb302ff7397e52201c573f9c2dcbecf26deb9b89e5f3b52e52a2b1880fbb4a85ebc1424106c8060860d344ce38db0291d7b8d11b4481425fa19eb97dcbe0a91?e=1514687512&k=IFq4a9NFMDrBxc3wDr0cJA"
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <Movie title={ movieTitles[0] } poster={ movieImages[0] } />
                <Movie title={ movieTitles[1] } poster={ movieImages[1] } />
                <Movie title={ movieTitles[2] } poster={ movieImages[2] } />
                <Movie title={ movieTitles[3] } poster={ movieImages[3] } />
            </div>
        );
    }
}

export default App;
