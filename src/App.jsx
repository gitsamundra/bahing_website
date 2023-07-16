import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/contact/Contact'
import ListImage from './components/Gallery/ImageList/ImageList'
import Committee from './components/about-us/Committee/Committee'
import AboutUs from './components/about-us/About-Us'
import Header from './components/header/Header'
import { useState } from 'react'
import {useSelector} from 'react-redux'

// import { lazy } from 'react'
// const Footer = lazy(() =>  import( './components/footer/Footer'))
// const Header = lazy(() =>  import( './components/header/Header'))
// const Home = lazy(() => import( './components/home/Home'))
// const AboutUs = lazy(() =>  import( './components/about-us/About-Us'))
// const Gallery = lazy(() =>  import( './components/Gallery/Gallery'))
// const Contact = lazy(() =>  import( './components/contact/Contact'))
// const ListImage = lazy(() => import('./components/Gallery/ImageList/ImageList'))
// const Committee = lazy(() => import('./components/about-us/Committee/Committee'))



function App() {
    
    const {thumbnails} = useSelector(state => state.thumbnails);
    const {members} = useSelector(state => state.members);

    const [currentYear, setCurrentYear] = useState(null)
    // eslint-disable-next-line no-unused-vars
    const [_, setImageId] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />}/>
                <Route path='about-us' 
                    element={<AboutUs  
                        data={members}
                        currentYear={currentYear} 
                        setCurrentYear={setCurrentYear}
                    />}
                />
            <Route path='/committee/:id' 
                element={<Committee data={members} 
                currentYearear={currentYear}
            />} />
            <Route path='gallery' 
                element={<Gallery setImageId={setImageId} 
                thumbnails={thumbnails}
                />}
            /> 
            <Route path='imageList/:imageId' 
                element={<ListImage 
                    thumbnails={thumbnails}
                />}
            />
            <Route path='contact' element={<Contact 
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
            />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default App
