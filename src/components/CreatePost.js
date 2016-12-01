import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import * as graph from './facebookAPI';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', pubBool: false, timestamp: '' };
        this.handleText = this.handleText.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.tryCreatePost = this.tryCreatePost.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }

    handleText(event) {
        this.setState({value: event.target.value});
    }

    handleCheck(event) {
        this.setState({ pubBool: !(this.state.pubBool) });
    }

    handleTime(event) {
        this.setState({ timestamp: event.target.value });
    }

    tryCreatePost() {
        //alert("TImestamp" + this.state.timestamp);
        graph.create_post(this.state.value, this.state.pubBool, this.state.timestamp, (res) => {
            if (res["id"]) {
                console.log("Post Created");
                browserHistory.push('/');
            }
            else {
                console.log("Post not created try again");
            }
        });
    }

    render() {
        //alert("Checkbox state: " + this.state.pubBool);
        return (
            <div>
            <Form>
                <FormGroup>
                    <Label>Enter Message below</Label>
                    <Input type="textarea" tag="value=${this.state.value}" onChange={ this.handleText } />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" onChange={ this.handleCheck }/>{' '}
                            Published
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Enter a timestamp for a scheduled post:
                        <Input type="textbox" tag="value=${this.state.timestamp}" onChange={ this.handleTime }/>
                    </Label>
                </FormGroup>
            </Form>
            <Button color="primary" size="lg" onClick={ this.tryCreatePost }>Submit</Button>
            </div>
        );
    }
}
