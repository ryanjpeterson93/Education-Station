import React from 'react';
import { Header, Form, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";
import axios from "axios";
// import { InputFile } from 'semantic-ui-react-input-file'

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

  // fileChange = e => {
  //   this.setState({ file: e.target.files[0] }, () => {
  //     console.log("File chosen --->", this.state.file);
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const ypost = { ...this.state, };
  //   axios.post("/api/yposts", ypost)
  //     .then(res => {
  //       console.log(res);
  //       // this.props.history.push("/products");
  //     })
  //   this.setState({
  //     title: "",
  //     body: "",
  //     photo: "",
  //     video: "",
  //     file: null,
  //   });
  // }

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
    const { title, body, video} = this.state;
    return (
      <>
        <Header as="h3" textAlign="center">Young Class Upload Form</Header>
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
                <StyledDrop>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag or drop a picture of your home</p>
                  </div>
                </StyledDrop>
              )}
            </Dropzone>
          </Form.Field>
          <Form.Field>
            <label>Video From Youtube</label>
            <input
              name="video"
              value={video}
              placeholder="video from youtube"
              onChange={this.handleChange} />
          </Form.Field>
          {/* <Form.Field>
          <input
            type="file"
            name="photo"
            value={photo}
            onChange={this.fileChange}
            ref={this.fileInput}
          />
          </Form.Field> */}
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