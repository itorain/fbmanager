import React, { Component } from 'react';
import Link from 'react-router';
import { graph } from './facebookAPI';

export default class NavMenu extends Component {
    render() {
        return (
            <div className="col-md-3 col-lg-2 sidebar-offcanvas">
                <ul className="nav nav-pills nav-stacked">
                    <li className="nav-item"><Link className="nav-link" to={'/'}>All Posts</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={'/'}>Published</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={'/'}>UnPublished</Link></li>
                </ul>
            </div>
        );
    }
}
