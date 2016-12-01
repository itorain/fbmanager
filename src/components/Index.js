import React, { Component } from 'react';
import Link from 'react-router';
import * as graph from './facebookAPI';
import PostList from './PostList';
//import './App.css';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { feed: [], published: "all" }
    }

    componentDidMount() {
        //this.setState({ feed: [{"id": "1", "created_time": "2016-11-26T01:57:37+0000", "message": "A message"}]});
        // console.log("Logging in...");
        // graph.login(() => {
        //
        // });
        graph.posts_published((data) => {
			this.setState({ feed: data['data'] });
		});
    }

    render() {
        return (
            <div>
                <section className="content-header">
                  <h1>
                    { this.props.name }
                  </h1>
                </section>
                <section className="content">
                  <div>
                    <PostList posts={ this.state.feed }/>
                  </div>
                </section>
            </div>
        );
    }
}

Index.propTypes = {
    name: React.PropTypes.string.isRequired
};
Index.defaultProps = {
    name: "Published Posts"
};
