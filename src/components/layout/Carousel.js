import React, {Component} from 'react';

class BgCarousel extends Component {
    render() {
        return (
            <div className="hero-carousel carousel-animate-slide is-reversing carousel-animated" data-autoplay="true">
                <div className="carousel-container">
                    <div className="carousel-item has-background is-active" style={{zIndex : 1, order: 1, opacity: 0.3}}>
                        <img
                        className="is-background"
                        src="static/one.jpg"
                        alt="First" width="640" height="310" draggable="false"/>
                    </div>
                    <div className="carousel-item has-background" style={{zIndex: 0, order: 2, opacity: 0.3}}>
                        <img
                        className="is-background"
                        src="static/two.jpg"
                        alt="Second" width="640" height="310" draggable="false"/>
                    </div>
                    <div className="carousel-item has-background" style={{zIndex: 0, order: 3, opacity: 0.3}}>
                        <img
                        className="is-background"
                        src="static/three.jpg"
                        alt="Third" width="640" height="310" draggable="false"/>
                    </div>
                    <div className="carousel-item has-background" style={{zIndex: 0, order: 0, opacity: 0.3}}>
                        <img
                        className="is-background"
                        src="static/four.jpg"
                        alt="Fourth" width="640" height="310" draggable="false"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BgCarousel;