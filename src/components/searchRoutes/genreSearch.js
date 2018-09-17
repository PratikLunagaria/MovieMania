import React, {Component} from 'react';
import client from '../config/client';

let MovieList = [];


class genreSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            resone: [],
            QueryOne: []
        }
    }

    componentDidMount(){
        const query = `{
          movies(
            directedBy: ${this.state.QueryOne},
            limit: 10
          ) {
            imdbScore
            title
            imdbUrl
            releaseDate
            synopsis
            genres
            directors{name}
            stars{name}
            boxOfficeString
            metacriticScore
          }
        }`;
        client
            .request(query)
            .then(data => {
                data.movies.forEach((item)=> MovieList.push(item));
                this.setState({ resone : MovieList });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default genreSearch;