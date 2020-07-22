import React from 'react';
import './css/Card.css';

function Card(props) {
    const { children } = props;

    return (
        <div className="timeline-card">
            <div className="timeline-card-content">{children}</div>
        </div>
    );
}

export default Card;
