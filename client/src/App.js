import './App.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <body className='App'>
        <Navbar bg="secondary" expand="lg">
            <Container>
              <Navbar.Brand href="#home">ΑΤΑ</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Αρχική</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>

        <footer className='App-header'>
          
          <h1 className='h1'>ΟΥΛΕ ΤΕ ΚΑΙ ΜΑΛΑ ΧΑΙΡΕ</h1>
          
          <Button>Δοκιμαστικό</Button>

          <Form>
            <Form.Group>
              <Form.Label>Εγγραφείτε</Form.Label>
              <Form.Control type='email' placeholder='πχ παράδειγμα@icloud.com'></Form.Control>
              <Form.Text className='text-muted'>Τα δεδομένα σας είναι ασφαλή μαζί μας</Form.Text>
            </Form.Group>
          </Form>
          
        </footer>
      </body>
  );
}

export default App;
