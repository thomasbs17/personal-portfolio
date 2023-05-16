import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <Navbar className='fixed-bottom' bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Text style={{fontSize:"10px"}}>Thomas Bouamoud - 2023</Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <SocialIcon url="https://twitter.com/TotoshBouams" target="_blank" style={{ height: 25, width: 25, marginLeft: '10px'}}/>
                    <SocialIcon url="https://github.com/thomasbs17" target="_blank" bgColor='white' style={{ height: 25, width: 25, marginLeft: '10px' }}/>
                    <SocialIcon url="mailto:thomas.bouamoud@gmail.com" target="_blank" bgColor='white' style={{ height: 25, width: 25, marginLeft: '10px'}}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;