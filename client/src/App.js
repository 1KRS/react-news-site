import './App.css';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <body className='App'>
        <header className='App-header'>
          <h1 className='h1'>ΟΥΛΕ ΤΕ ΚΑΙ ΜΑΛΑ ΧΑΙΡΕ</h1>
          <Button>Δοκιμαστικό</Button>

          <Form>
            <Form.Group>
              <Form.Label>Εγγραφείτε</Form.Label>
              <Form.Control type='email' placeholder='πχ παράδειγμα@icloud.com'></Form.Control>
              <Form.Text className='text-muted'>Τα δεδομένα σας είναι ασφαλή μαζί μας</Form.Text>
            </Form.Group>
          </Form>
        </header>
      </body>
  );
}

export default App;
