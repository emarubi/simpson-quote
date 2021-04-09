import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Quotecard.css';

class Quotecard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favorite: false,
        }
    }

    eventHandler = (event) => {
        const newFavorite = !this.state.favorite;
        this.setState({ favorite: newFavorite });
    }

    render() {
        return (
            <figure className="QuoteCard">
            <img
                src={this.props.image}
                alt={this.props.character}/>
            <figcaption>
                <blockquote>
                   {this.props.quote}
                </blockquote>
                <p>
                    <cite>{this.props.character}</cite>
                    <span className={this.state.favorite? "is-favorite" : ""} onClick={this.eventHandler}>&#9733;</span>
                </p>
            </figcaption>
        </figure>
        )
    }
}

// function Quotecard(props) {
//     return (
//         <figure className="QuoteCard">
//             <img
//                 src={props.image}
//                 alt={props.character}/>
//             <figcaption>
//                 <blockquote>
//                    {props.quote}
//                 </blockquote>
//                 <cite>{props.character}</cite>
//             </figcaption>
//         </figure>
//     )
// }

Quotecard.propTypes = {
    character: PropTypes.string.isRequired,
}

export default Quotecard;
