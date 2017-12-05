import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://cdn.pixabay.com/photo/2017/09/22/19/05/tomato-2776735_960_720.jpg"
    },
    {
        title: "Harry Potter",
        poster: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg"
    },
    {
        title: "Starwars",
        poster: "https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_960_720.jpg"
    },
    {
        title: "Oldboy",
        poster: "https://cdn.pixabay.com/photo/2017/10/29/17/43/trout-2900325_960_720.jpg"
    }
]

class App extends Component {

    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

    render() {
        console.log('Did render');
        return (
            <div className="App">
                { movies.map((movie, index) => {
                    return <Movie title={ movie.title } poster={ movie.poster } key={ index } />
                })}
            </div>
        );
    }
}

export default App;
