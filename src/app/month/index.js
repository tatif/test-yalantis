import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../tooltip';

export const Month = ({ index, onClick, name, fill, content }) =>
    <Tooltip title="Users:" content={content}>
        <h3 onClick={onClick} data-index={index} style={{ color: `${fill}` }}>
            {name}
        </h3>
    </Tooltip>

Month.propTypes = {
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    fill: PropTypes.string,
    content: PropTypes.node
};