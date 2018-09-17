import React, { Component } from 'react';
import { request } from 'graphql-request';
import classNames from 'classnames';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

//http://www.omdbapi.com/?i=tt3896198&apikey=bb8f9a2d

import './App.css';
import home from './components/routes/home';
import TopImdb from './components/routes/topImdb';
import TopBox from './components/routes/topBoxoffice';
import TopMeta from './components/routes/topMeta';
import Navbar from './components/layout/Navbar';
import BgCarousel from './components/layout/Carousel';
import Footer from './components/layout/Footer';
import NoMatch from './components/routes/NoMatch';

//http://www.omdbapi.com/?i=tt3896198&apikey=bb8f9a2d

class App extends Component {

render(){
    return (
        <Router>
            <section className="hero is-fullheight has-carousel is-black">
                <BgCarousel/>
                <Navbar/>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <Switch>
                                <Route exact path="/" component={home} />
                                <Route exact path="/top10Imdb" component={TopImdb} />
                                <Route exact path="/top10BoxOffice" component={TopBox} />
                                <Route exact path="/top10Metacritic" component={TopMeta} />
                                <Route component={NoMatch} />
                            </Switch>
                        </div>
                    </div>
                <Footer/>
            </section>
        </Router>
    );
  }
}

export default App;
