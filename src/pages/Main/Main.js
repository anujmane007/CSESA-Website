import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About,  Testimonials,Faculty, Blog,Result,  Contacts, Projects, Services} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Website</title>
            </Helmet>

            <Navbar />        
            <Landing />
            {/* <EventTable/> */}
            <About />
            <Projects />
            <Services />
            <Testimonials />
            <Faculty />
            <Blog />
            <Result />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
