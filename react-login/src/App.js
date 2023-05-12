import { useState, useEffect } from 'react';
import { Container,Row,Col ,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/users")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result);
        }
      )
  }, [])
 
  return (
    <div>
      <Container>
      <Row>
      {users.map(user => (
        <Col xs= {12} sm={4} key={user.id} >
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" width={200} height={300}/>
      <Card.Body>
        <Card.Title>{user.id}</Card.Title>
        <Card.Text className='text-truncate'>
        {user.password}
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      ))}

      </Row>
    </Container>
    </div>
  );
}

export default App;
