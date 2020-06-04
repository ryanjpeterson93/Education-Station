import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';

class YoungForm extends React.Component {
  state = {
    title: "",
    body: "",
    photo: "",
    video: "",
    file: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onDrop = (files) => {
    console.log('files[0]', files[0])
    this.setState({ file: files[0] })
  };



  render() {
    const { title, body, photo, video } = this.state;

    //   <Input
    //   label="Address"
    //   required
    //   autoFocus
    //   name="address"
    //   value={address}
    //   placeholder="Address"
    //   onChange={this.handleChange}
    // />

    return (
      <>
        <Form onSubmit={this.handleSubmit} >
          <Form.Field>
            <label>Title</label>
            <input
              name="title"
              value={title}
              placeholder="title"
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Body of Post</label>
            <input
              name="body"
              value={body}
              placeholder="body"
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Picture</label>
            <input
              name="title"
              value={title}
              placeholder="title"
              onChange={this.handleChange} />
          </Form.Field>
          <Dropzone onDrop={this.onDrop} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <StyledDrop>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag or drop a picture of your home</p>
                </div>
              </StyledDrop>
            )}
          </Dropzone>
          <Button type='submit'>Submit</Button>
        </Form>
      </>
    )
  }
}

const StyledDrop = styled.div`
border: 2.5px dashed black;
width: 200px;
height: 200px;
padding: 50px 10px;
background: #e3e3e3;
text-align: center;
margin: 10px 10px;
cursor: pointer;
`

export default YoungForm;