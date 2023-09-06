import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About,  Testimonials,Faculty, Blog,  Contacts, Projects, Services} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Website</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Projects />
            <Services />
            <Testimonials />
            <Faculty />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
