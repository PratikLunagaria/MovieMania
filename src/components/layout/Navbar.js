import React, {Component} from 'react';
import classNames from "classnames";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuClick: false
        };
        this.mobMenuClick = this.mobMenuClick.bind(this);
    }

    mobMenuClick(){
        this.setState({
            mobileMenuClick : !this.state.mobileMenuClick
        })
    }
    render() {
        return (
            <div className="hero-head ">
                <header className="navbar">
                    <div className="container ">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <h1>Movie Mania</h1>
                            </a>
                            <span className= {
                                classNames({
                                    "navbar-burger burger" :true,
                                    "is-active": this.state.mobileMenuClick
                                })
                            }
                                  data-target="navbarMenuHeroC"
                                  onClick={this.mobMenuClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                              </span>
                        </div>
                        <div id="navbarMenuHeroC" className={
                            classNames({
                                "navbar-menu" :true,
                                "is-active": this.state.mobileMenuClick
                            })}>
                            <div className="navbar-end">
                                <a className="navbar-item">
                                    <Link to="/top10Imdb">
                                    Top10 IMDb
                                    </Link>
                                </a>
                                <a className="navbar-item">
                                    <Link to="/top10BoxOffice">
                                    Top10 BoxOfficeCollection
                                    </Link>
                                </a>
                                <a className="navbar-item">
                                    <Link to="/top10Metacritic">
                                    Top10 Metacritic
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;