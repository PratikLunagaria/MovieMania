import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="hero-foot container has-text-centered">
                    <a className="button is-info is-inverted " href="https://github.com/PratikLunagaria">
                        <span>Made with </span>
                        <span className="icon">
                            <i className="fas fa-heart has-text-danger"></i>
                        </span>
                        <span>by PratikLunagaria</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;