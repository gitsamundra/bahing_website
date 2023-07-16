
import useStyles from './styles.js'
import bgImage from '../../img/home-page.jpg'

const Home = () => {
    const classes = useStyles()
    return (
        <>  <div className={classes.body}></div>
            <h1>Home</h1>
            <img src={bgImage} alt="Image" />
        </>
    )
}

export default Home