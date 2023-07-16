import { Card, Typography} from "@material-ui/core"
import { useNavigate, Link, Outlet } from "react-router-dom"

const AboutUs = ({data, setCurrentYear}) => {
    const navigate = useNavigate()
    const keys = Object.keys(data)
    const handleClick = (id) => {
        console.log('This is id '+id)
        setCurrentYear(id)
        navigate('/committee/' + id)
    }
    return (
        <section>
            <h1>About Us</h1>
            <Card sx={{padding: '20px'}}>
                <Typography sx={{padding: '20px'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Cupiditate voluptatem, vitae, quo mollitia esse modi repellat dicta minima iure, 
                    ullam odit necessitatibus repudiandae distinctio 
                    commodi earum cumque? Fuga, repudiandae dicta?
                </Typography>
                    <ul>
                        {keys.map((d, i) => (
                            <li key={i} style={{listStyle: 'none'}} >
                                <Link to={`/committee/${d}`} 
                                    onClick={() => handleClick(d)} 
                                    style={{paddingLeft:'20px', cursor: 'pointer', textDecoration:'none'}}
                                >
                                    {d}
                                </Link>
                            </li>
                        ))}
                    </ul>
            </Card>
            <Outlet />
        </section>
    )
}

export default AboutUs