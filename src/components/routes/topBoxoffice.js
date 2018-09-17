import React from "react";
import MovieLayout from "../layout/MovieLayout"
import client from '../config/client';
let MovieList = [];
const query = `{
          movies(
            releaseDateAfter: "2016-09-01",
            releaseDateBefore: "2018-09-01",
            limit: 10,
            order: {field: BOX_OFFICE, ascending:false}
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

class TopBox extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            resone: []
        }
    }

    componentDidMount(){
        client
            .request(query)
            .then(data => {
                data.movies.forEach((item)=> MovieList.push(item));
                this.setState({ resone : MovieList });
            })
            .catch(err => console.log(err))
    }

    render(){
        if (this.state.resone.length ===0){
            return(
                <div className="pageloader"><span className="title">Pageloader</span></div>
            )
        } else {
            return (
                <div>
                    {this.state.resone.map((item, index) =>
                        <MovieLayout
                            title={item.title}
                            ImdbUrl={item.imdbUrl}
                            ImdbScore={item.imdbScore}
                            rank={index + 1}
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
            )
        }
    }
}

export default TopBox;