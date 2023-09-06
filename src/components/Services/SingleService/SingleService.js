import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css';

function SingleService({ id, title, icon }) {
    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <div key={id} className="single-service" style={{ backgroundColor: theme.primary400 }}>
                <div className="service-content" style={{ color: theme.tertiary }}>
                    <i className="service-icon">{icon}</i>
                    <h4 style={{ color: theme.tertiary }}>{title}</h4>
                </div>
            </div>
        </Fade>
    );
}

SingleService.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default SingleService;
