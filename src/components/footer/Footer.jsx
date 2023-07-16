import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import './style.css'

const Footer = () => {
    return (
        <footer >
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div>
                    <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <p>
                            <MDBIcon color='secondary' icon='envelope' className='me-3' />
                            info@example.com
                        </p>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a className='text-reset fw-bold' href='https://localhost:5173/'>
                    BBS-UK.com
                    </a>
                </div>
            </MDBFooter>
        </footer>
    )
}

export default Footer