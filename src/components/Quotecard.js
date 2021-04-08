import React from 'react';
import PropTypes from 'prop-types';

import './Quotecard.css';

function Quotecard(props) {
    return (
        <figure className="QuoteCard">
            <img
                src={props.image}
                alt={props.character}/>
            <figcaption>
                <blockquote>
                   {props.quote}
                </blockquote>
                <cite>{props.characterFirstName + ' ' + props.characterLastName}</cite>
            </figcaption>
        </figure>
    )
}

Quotecard.propTypes = {
    characterFirstName: PropTypes.string.isRequired,
    characterLastName: PropTypes.string.isRequired,
}

export default Quotecard;
