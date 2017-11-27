import React, { Component } from 'react';

class Navigation extends Component {

    state = {
        responsive: false,
    }

    get responsiveMenu() {
        return `Navigation-menu Navigation-menu${this.state.responsive ? '--responsive': '--desktop'}`;
    }

    get openResponsiveClassName() {
        return `Navigation-burger Navigation-burger${!this.state.responsive ? '--visible' : '--invisible'}`;
    }

    get closeResponsiveClassName() {
        return `Navigation-close Navigation-close${this.state.responsive ? '--visible' : '--invisible'}`;
    }

    render() {

        return (
            <div className="header">
                <nav className={this.responsiveMenu}>
                    <h1><a>HOME</a></h1>
                    <section className="Navigation-links">
                        <a>visual identities</a>
                        <a>editorial & books</a>
                        <a>web content</a>
                        <a>music events</a>
                        <a>contact</a>
                        <a>FR</a>
                    </section>
                </nav>
                <div
                    onClick={() => this.setState({responsive: true})}
                    className={this.openResponsiveClassName}>
                    <span class="burger"></span>
                    <span class="burger"></span>
                    <span class="burger"></span>
                </div>
                <span
                    onClick={() => this.setState({responsive: false})}
                    className={this.closeResponsiveClassName}></span>
                <span id="overlay" class="overlay"></span>
            </div>
        );
    }
}

export default Navigation;