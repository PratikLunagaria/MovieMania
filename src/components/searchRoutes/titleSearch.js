import React, {Component} from 'react';
import client from '../config/client';
import DetailCard from "../layout/DetailCard";

let MovieList = [];

class titleSearch extends Component {
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
            titleSearch: ${StarQuery}
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
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.resone.map((item, index) =>
                    <DetailCard
                        ImdbUrl={item.imdbUrl}
                        ImdbScore={item.imdbScore}
                        rank={item.title}
                        boxoffice={item.boxOfficeString}
                        releasedate={item.releaseDate}
                        genres={item.genres.map((genre) => genre)}
                        MCScore={item.metacriticScore}
                        synopsis={item.synopsis}
                        artists={item.stars.map((artist) => artist.name)}
                        directors={item.directors.map((direc) => direc.name)}
                    />
                )}
            </div>
        );
    }
}

export default titleSearch;