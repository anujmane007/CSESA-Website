import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, image, theme }) {
  return (
    <Fade bottom>
      <div
        key={id}
        className='singleProject'
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className='projectContent'>
          <h2
            id={name.replace(/ /g, '-').toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>
          <img src={image ? image : placeholder} alt={name} />
        </div>
        <p
          className='project--desc'
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc}
        </p>
        <div
          className='project--lang'
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </Fade>
  );
}

SingleProject.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default SingleProject;
