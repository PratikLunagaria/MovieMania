import React, {Component} from 'react';
import client from '../config/client';

let MovieList = [];

class artistSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            resone: [],
            QueryOne: this.props.match.params.id
        }
    }

    componentDidMount(){
        let StarQuery = '"'+this.state.QueryOne+'"';
        const query = `{
          movies(
            starring: ${StarQuery},
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
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.QueryOne}
            </div>
        );
    }
}

export default artistSearch;