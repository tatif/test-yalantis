import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const Tooltip = ({ title, children, content }) => {
    const node = useRef();
    const [isVisible, setState] = useState(false);

    const handleClick = ({ target }) => {
        if (node.current.contains(target)) {
            return;
        }
        setState(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <div ref={node} onClick={() => setState(!isVisible)}>
            <div>{children}</div>
            {isVisible && (
                <div>
                    {title}
                    {content}
                </div>
            )}
        </div>
    );
};

Tooltip.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};