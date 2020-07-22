import React from 'react';
import ClassNames from 'classnames';
import './css/Text.css';

function Text(props) {
    const {
        className,
        bold,
        italic,
        deleted,
        underline,
        lowercase,
        uppercase,
        capitalize,
        leftSpace,
        rightSpace,
        block,
        align,
        children,
    } = props;

    const classes = ClassNames('timeline-text', className, {
        'timeline-text--bold': bold,
        'timeline-text--italic': italic,
        'timeline-text--deleted': deleted,
        'timeline-text--underline': underline,
        'timeline-text--lowercase': lowercase,
        'timeline-text--uppercase': uppercase,
        'timeline-text--capitalize': capitalize,
        'timeline-text--left-space': leftSpace,
        'timeline-text--right-space': rightSpace,
        'timeline-text-block': block || align,
        [`timeline-text-align--${align}`]: align,
    });

    return (
        <span className={classes} style={{ padding: '8px' }}>
            {children}
        </span>
    );
}

export default Text;
