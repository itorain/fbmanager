import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Post from './Post';
import { Button } from 'reactstrap';

export default class PostList extends Component {

    constructor(props) {
        super(props);
        this.routeToCreateNew = this.routeToCreateNew.bind(this);
    }

    routeToCreateNew() {
        //alert("button clicked")
        //browserHistory.push('/new');
    }

    render() {
        if (this.props.posts.length === 0) {
            return (
                <div>
                    <p>No posts yet! Click button below to create one!</p>
                    <Button color="success" size="lg" onClick={ this.routeToCreateNew }>New Post</Button>
                </div>
            )
        }
        var p = this.props.posts.map(post =>
            <Post key={post.id} post={post}/>
        );
        console.log(p);
        return (
            <div>
                <Link to={`/new`}>New Post</Link>
                {p}
            </div>
        );
    }
   // PostList.propTypes = {
   //     posts: React.PropTypes.Object.isRequired
   // }
}
