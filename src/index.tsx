import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function HelloMessage({ name }: { name: string }) {
    return <div>Hello {name}</div>;
}

HelloMessage.propTypes = {
    name: PropTypes.string,
};

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('main')
);
