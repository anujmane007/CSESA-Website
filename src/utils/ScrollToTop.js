import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]); // Make sure to add 'history' as a dependency in useEffect

  return (null);
}

// Add prop type validation for 'history'
ScrollToTop.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(ScrollToTop);
