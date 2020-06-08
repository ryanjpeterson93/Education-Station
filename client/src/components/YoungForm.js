import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { Redirect } from "react-router-dom";
import axios from "axios";

class YoungForm extends React.Component {
  state = {
    title: "",
    body: "",
    photo: "",
    video: "",
    file: null,
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onDrop = (files) => {
    console.log('files[0]', files[0])
    this.setState({ file: files[0] })
  };

  handleSubmit = () => {
    let data = new FormData();
    const { file } = this.state
    console.log('file: submit', file)
    data.append("file", file);
    const {
      title,
      body,
      photo,
      video,
    } = this.state
    axios
      .post(`/api/yposts?title=${title}&body=${body}&photo=${photo}&video=${video}`, data)
      .then((res) => {
        console.log(res);
        this.setState({
          title: "",
          body: "",
          photo: "",
          video: "",
          file: null,
        });
        return <Redirect to='/young' />
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, body, video } = this.state;
    return (
      <>
        <Header as="h3" textAlign="center">Young Class Upload Form</Header>
        <div className="">
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
              <Dropzone onDrop={this.onDrop} multiple={true}>
                {({ getRootProps, getInputProps }) => (
                  < div className="styledDrop">
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Click to add a photo, or drag photo here</p>
                    </div>
                  </div>
                )}
              </Dropzone>
            </Form.Field>
            <Form.Field>
              <label>Video From Youtube</label>
              <input
                name="video"
                value={video}
                placeholder="Make sure the link is the 'embed' link"
                onChange={this.handleChange} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      </>
    )
  }
}
export default YoungForm;