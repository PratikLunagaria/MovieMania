import React, {Component} from 'react';

class home extends Component {
    render() {
        return (
            <div>
                <h1 className="title">
                    Search thousands of Movies, Artists, Genres, Directors and Producers...
                </h1>
                <div className="field has-addons has-addons-centered">
                    <p className="control">
                        <span className="select">
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
                        <input className="input" type="text" placeholder="Find a repository"/>
                    </div>
                    <div className="control">
                        <a className="button is-info">
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