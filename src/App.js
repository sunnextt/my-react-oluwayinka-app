import React from 'react'
import "./styles.css";
import "./normalize.css"
import "./grid.css.css"
import Header from "./Header";
import PageInfo from './Section1'
import PageProgress from './section2';
import Padding from './Section3';
import FeaturesPage from "./Section4"
import Testimonnials from "./section5"
import Gallery from './Section7';
import DownloadApp from "./Section8"
import Pricing from './Section9';
import Questions from './Section10';
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Screenshot from './Section6';



class App extends React.Component {
    render() {
        return(
            <div>
             <Header  />
             <PageInfo />
             <PageProgress />
             <Padding />
             <FeaturesPage />
             <Testimonnials />
             <Screenshot />
             <Gallery />
             <DownloadApp />
             <Pricing />
             <Questions />
            <Subscribe />
            <Footer />
            </div>
        )
    }
}




export default App