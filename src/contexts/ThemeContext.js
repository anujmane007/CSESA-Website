import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    // Removed the declaration of setTheme since it's not used in this file
    const [theme, /* setTheme */] = useState(themeData.theme);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const value = { theme, drawerOpen, setHandleDrawer };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// Define PropTypes for the component's props
ThemeContextProvider.propTypes = {
    children: PropTypes.node, // children prop is typically a React node
};

export default ThemeContextProvider;
