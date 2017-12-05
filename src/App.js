import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

    state = {
        movies: [
            {
                title: "Matrix",
                poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
            },
            {
                title: "Harry Potter",
                poster: "https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/7xmtxRc9nQnCuWINuTT4SMP5NJc.jpg/revision/latest/scale-to-width-down/333?cb=20130803164345"
            },
            {
                title: "Starwars",
                poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
            },
            {
                title: "Oldboy",
                poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
            }
        ]
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title: "Transformer",
                        poster: "https://i.ytimg.com/vi/oHGrd6GhSs4/maxresdefault.jpg"
                    },
                    ...this.state.movies // 이 부분이 없을 경우 추가가 아니라 대체함.
                ]
            })
        }, 5000)
    }

    render() {
        return (
            <div className="App">
                { this.state.movies.map((movie, index) => {
                    return <Movie title={ movie.title } poster={ movie.poster } key={ index } />
                })}
            </div>
        );
    }
}

export default App;
