import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

    state = {}

    componentDidMount() {
        this._getMovies();
    };

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return <Movie title={ movie.title } poster={ movie.large_cover_image } key={ movie.id } />
        }); // 컴포넌트의 key는 인덱스를 사용할 경우 느려진다.
        return movies;
    };

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({ // this._callApi()가 실행 완료(성공적인 완료가 아님)가 되기 전까진 실행되지 않음.
            movies
        });
    };

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
        .then(response => response.json()) // Promise
        .then(json => json.data.movies)
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="App">
                { this.state.movies ? this._renderMovies() : 'Loading' }
            </div>
        );
    };
};

export default App;
