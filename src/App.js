import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


import './App.css';
import home from './components/routes/home';
import TopImdb from './components/routes/topImdb';
import TopBox from './components/routes/topBoxoffice';
import TopMeta from './components/routes/topMeta';
import Navbar from './components/layout/Navbar';
import BgCarousel from './components/layout/Carousel';
import Footer from './components/layout/Footer';
import titleSearch from "./components/searchRoutes/titleSearch";
import artistSearch from "./components/searchRoutes/artistSearch";
import directorSearch from "./components/searchRoutes/directorSearch";
import producerSearch from "./components/searchRoutes/producerSearch";


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
                                <Route exact path="/title/:id" component={titleSearch}/>
                                <Route exact path="/Artist/:id" component={artistSearch}/>
                                <Route exact path="/Director/:id" component={directorSearch}/>
                                <Route exact path="/Producer/:id" component={producerSearch}/>
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

{/*<Route component={NoMatch} />*/}