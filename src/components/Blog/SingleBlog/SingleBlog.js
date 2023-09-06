import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleBlog.css';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <Fade bottom>
            <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer" style={{ backgroundColor: theme.primary400 }}>
                <div className="singleBlog--image" style={{ backgroundColor: theme.secondary }}>
                    <img src={image ? image : placeholder} alt={title} />
                </div>
                <div className="singleBlog--body">
                    <p style={{ color: theme.tertiary }}>{date}</p>
                    <h3 style={{ color: theme.secondary }}>{title}</h3>
                    <h6 style={{ color: theme.secondary }}>{desc}</h6>
                </div>
            </a>
        </Fade>
    );
}

// Define PropTypes for the expected props
SingleBlog.propTypes = {
    theme: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default SingleBlog;
