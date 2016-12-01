import React, { Component } from 'react';
import * as graph from './facebookAPI';
import { Link, browserHistory } from 'react-router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', pubBool: false };
        this.handleText = this.handleText.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.tryUpdatePost = this.tryUpdatePost.bind(this);
    }

    handleText(event) {
        this.setState({value: event.target.value});
    }

    handleCheck(event) {
        this.setState({ pubBool: !(this.state.pubBool) });
        //alert("Radio button state changed: " + this.state.pubBool);
    }

    tryUpdatePost() {
        //alert("id is " + this.props.params.id);
        const id = this.props.params.id;
        const value = this.state.value;
        // graph.posts_all((data) => {
        //     //this.setState({ feed: data['data'] });
        // });
        graph.update_post(id, value, (res) => {
            console.log(res);
            if(res["success"]) {
                console.log("Post updated");
                browserHistory.push('/');
            }
            else {
                console.log("Post not created try again");
            }
        });
    }

    render() {
        return (
            <div>
            <Form>
                <FormGroup>
                    <Label for={ this.props.params.id }>Enter Message below</Label>
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
            </Form>
            <Button color="primary" size="lg" onClick={ this.tryUpdatePost }>Submit</Button>
            </div>
        );
    }
}
