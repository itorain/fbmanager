import React, { Component } from 'react';
import Link from 'react-router';
import * as graph from './facebookAPI';
import PostList from './PostList';

export default class AllIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { feed: [] }
    }

    componentDidMount() {
        graph.posts_all((data) => {
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

AllIndex.propTypes = {
    name: React.PropTypes.string.isRequired
};
AllIndex.defaultProps = {
    name: "All Posts"
};
