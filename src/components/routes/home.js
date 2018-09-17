import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class home extends Component {
    constructor(props){
        super(props);
        this.state= {
            searchType: 'title',
            QueryName: '',
            placeholder: 'Find a Movie'
        };
        this.handleQuery = this.handleQuery.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleType(e){
        let typeVal = e.target.value;
        let placeholderVal = 'Find a '+typeVal;
        this.setState({
            searchType: typeVal,
            placeholder: placeholderVal
        });

    }

    handleQuery(e){
        this.setState(e)({
            QueryName: e.target.value
        })
    }

    handleRedirect(){

    }

    render() {
        return (
            <div>
                <h1 className="title">
                    Search thousands of Movies, Artists, Genres, Directors and Producers...
                </h1>
                <div className="field has-addons has-addons-centered">
                    <p className="control">
                        <span className="select" onChange={this.handleType}>
                          <select>
                            <option>Title</option>
                            <option>Artist</option>
                            <option>Genre</option>
                            <option>Director</option>
                            <option>Producer</option>
                          </select>
                        </span>
                    </p>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder={this.state.placeholder}/>
                    </div>
                    <div className="control">
                        <a className="button is-info" onClick={this.handleRedirect}>
                            Search
                        </a>
                    </div>
                </div>
                <div className="tags columns">
                    <div className="column is-4 container has-text-centered">
                        <h2>Popular Searches....</h2>
                        <div>
                            <span className="tag is-rounded is-danger">Robert Downey Jr.</span>
                            <span className="tag is-rounded is-success">The Nun</span>
                            <span className="tag is-rounded is-info">Avengers: Infinity War</span>
                            <span className="tag is-rounded is-primary">Chris Hemsworth</span>
                            <span className="tag is-rounded is-warning">Emma Watson</span>
                            <span className="tag is-rounded is-link">Arnold Schwarzenegger</span>
                            <span className="tag is-rounded is-black">Tom Cruise</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;