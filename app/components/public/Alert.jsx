import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type }) => {
    const alertStyles = {
        success: 'bg-green-100 text-green-800 border-green-300',
        error: 'bg-red-100 text-red-800 border-red-300',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        info: 'bg-blue-100 text-blue-800 border-blue-300',
    };

    return (
        <div
            className={`border-l-4 p-4 rounded-md mb-4 ${
                alertStyles[type] || alertStyles.info
            }`}
            role="alert"
        >
            <p>{message}</p>
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
};

Alert.defaultProps = {
    type: 'info',
};

export default Alert;