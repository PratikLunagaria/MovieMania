import React, {Component} from 'react';

class home extends Component {
    constructor(props){
        super(props);
        this.state= {
            searchType: 'title',
            QueryName: '',
            placeholder: 'Find a Movie',
            searchHref: ''
        };
        this.handleQuery = this.handleQuery.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleType(e){
        let placeholderVal = 'Find a '+ e.target.value;
        this.setState({
            searchType: e.target.value,
            placeholder: placeholderVal
        });
    }

    handleQuery(e){
        this.setState({
            QueryName: e.target.value
        });
    }

    handleRedirect(){
        let searchString = '/'+this.state.searchType+'/'+this.state.QueryName;
        this.setState({
            searchHref: searchString
        })
    }

    render() {
        return (
            <div>
                <h1 className="title">
                    Search thousands of Movies from your Favorite Artists, Directors and Producers...
                </h1>
                <div className="field has-addons has-addons-centered">
                    <p className="control">
                        <span className="select">
                          <select onChange={this.handleType}>
                            <option>Title</option>
                            <option>Artist</option>
                            <option>Director</option>
                            <option>Producer</option>
                          </select>
                        </span>
                    </p>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder={this.state.placeholder} onChange={this.handleQuery}/>
                    </div>
                    <div className="control">
                        <a className="button is-info" onClick={this.handleRedirect} href={this.state.searchHref}>
                            Search
                        </a>
                    </div>
                </div>
                <div className="tags columns">
                    <div className="column is-4 container has-text-centered">
                        <h2>Popular Searches....</h2>
                        <div>
                            <a href="/Artist/Robert%20Downey%20Jr."><span className="tag is-rounded is-danger">Robert Downey Jr.</span></a>
                            <a href="/title/the%20nun"><span className="tag is-rounded is-success">The Nun</span></a>
                            <a href="/title/Avengers:%20Infinity%20War"><span className="tag is-rounded is-info">Avengers: Infinity War</span></a>
                            <a href="/Artist/Chris%20Hemsworth"><span className="tag is-rounded is-primary">Chris Hemsworth</span></a>
                            <a href="/Artist/Emma%20Watson"><span className="tag is-rounded is-warning">Emma Watson</span></a>
                            <a href="/Director/Christopher%20Nolan"><span className="tag is-rounded is-link">Christopher Nolan</span></a>
                            <a href="/Producer/Walt%20Disney"><span className="tag is-rounded is-black">Walt Disney</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;