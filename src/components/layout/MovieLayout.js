import React, {Component} from 'react';
import $ from 'jquery';

class MovieLayout extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        $(document).ready(() => {
            $('.pricing-plan').on('mouseenter', event => {
                $(event.currentTarget).addClass('is-active')
            }).on('mouseleave', event => {
                $(event.currentTarget).removeClass('is-active')
            })
        });
    }


    render() {
        return (
            <div>
                <a href={this.props.ImdbUrl}>
                <div className="pricing-table is-horizontal">
                    <div className="pricing-plan is-danger">
                        <div className="plan-header">
                            <div>{this.props.title}</div>
                            <div className="plan-price">
                                <span className="plan-price-amount">
                                    <span className="plan-price-currency">#</span>{this.props.rank}
                                </span>
                            </div>
                            <div>
                                BoxOffice Collection: $ {this.props.boxoffice}
                            </div>
                        </div>
                        <div className="plan-items">
                            <div className="plan-item">
                                <span><i className="fas fa-star"></i></span>
                                <span><strong>IMDb Score:</strong> {this.props.ImdbScore}/10</span>
                            </div>
                            <div className="plan-item"><strong>Release Date:</strong> {this.props.releasedate}</div>
                            <div className="plan-item"><strong>Genres:</strong>{this.props.genres.toString()}</div>
                            <div className="plan-item"><strong>MetaCritic Score:</strong>{this.props.MCScore}</div>
                            <div className="plan-item"><strong>Artists: </strong>{this.props.artists.toString()}</div>
                            <div className="plan-item"><strong>Directors:</strong>{this.props.directors.toString()}</div>
                        </div>
                        <div className="plan-footer has-text-black">
                            <h2><strong>Synopsis</strong></h2>
                            <h3>{this.props.synopsis}</h3>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        );
    }
}

export default MovieLayout;