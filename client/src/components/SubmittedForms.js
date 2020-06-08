import React from "react"
import axios from 'axios'
import { Card, Button} from 'react-bootstrap'

class SubmittedForms extends React.Component {
  state = { contacts: [] };

  componentDidMount() {
    axios.get("/api/contacts")
      .then(res => {
        this.setState({ contacts: res.data })
      })
  }

  deletePost = (id) => {
    axios.delete(`/api/contacts/${id}`)
      .then( res => {
        const { contacts } = this.state;
        this.setState({ contacts: contacts.filter(t => t.id !== id), })
      })
  }

  render() {
    const { contacts } = this.state
    return contacts.map(contact =>
      <div className="submitted">
        <Card key={contact.id} style={{ width: '350px', margin: '1%', float: 'left' }}>
          <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Phone: {contact.phone}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Email: {contact.email}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"> {contact.created_at} </Card.Subtitle>
            <Card.Text>
              {contact.body}
            </Card.Text>
            <Button onClick={() => this.deletePost(contact.id)}>Delete</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default SubmittedForms