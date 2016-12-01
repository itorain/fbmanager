import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment';
import * as graph from './facebookAPI';
import { Card, CardBlock, CardText, CardTitle, CardSubtitle, CardLink, Modal, ModalHeader, ModalFooter, Button } from 'reactstrap';

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = { modal: false };
        this.toggle = this.toggle.bind(this);
        this.tryDeletePost = this.tryDeletePost.bind(this);
    }

    componentDidMount() {
        graph.post_insights(this.props.post.id, (data) => {
            if (data['values']) {
                this.setState({ insights: data['values'] });
            }
            else {
                this.setState({ insights: 100 });
            }
        });
    }

    toggle(event) {
        this.setState({ modal: !this.state.modal });
    }

    tryDeletePost() {
        graph.delete_post(this.props.post.id, (data) => {
			if(data["success"]) {
                console.log("Post deleted successfully");
                this.toggle("something");
                browserHistory.push('/');
            }
            else {
                console.log("Post not deleted, please try again");
            }
		});
    }

    render() {
        const time = moment(this.props.post.created_time).format("dddd, MMMM Do YYYY, h:mm a");
        const editLink = "edit/" + this.props.post.id;
        const from = "from " + this.props.post.type;
        const type = "A " + this.props.post.from.name;
        return (
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <Card>
                        <CardBlock>
                            <CardTitle>{ `A ${this.props.post.type} from ${this.props.post.from.name}` }</CardTitle>
                            <CardSubtitle>{ time }</CardSubtitle>
                            <CardText>{ this.props.post.message }</CardText>
                            <CardText><small>{ this.props.post.story }</small></CardText>
                            <Link className="card-link" to={`/edit/${this.props.post.id}`}>Edit</Link>
                            <CardLink href="#" onClick={ this.toggle }>Delete</CardLink>
                        </CardBlock>
                    </Card>
                </div>
                <div className="col-lg-4 col-md-4">
                    <Card inverse color="info">
                        <CardBlock className="bg-info">
                            <div className="rotate">
                                <i className="fa fa-eye fa-5x">
                                </i>
                            </div>
                            <h6 className="text-uppercase">Views</h6>
                            <h1 className="display-1">{ this.state.insights }</h1>
                        </CardBlock>
                    </Card>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>
                        Are you sure you want to delete this?
                    </ModalHeader>
                  <ModalFooter>
                    <Button color="danger" onClick={ this.tryDeletePost }>Yes</Button>{' '}
                    <Button color="warning" onClick={this.toggle}>Not sure</Button>
                  </ModalFooter>
                </Modal>
            </div>
        );
    }

    // PostList.propTypes = {
    //     post: React.PropTypes.Object.isRequired
    // }
}
