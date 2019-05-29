import React, { Component } from 'react';


class Person extends Component {

    render() {
        return (
            <div className="person-container col-md-4 col-sm-6 col-xs-12">
                <div className="person-image">
                    <img className="image-center" src={this.props.image} alt={this.props.name} />
                </div>
                <div className="person-name text-center">
                    {this.props.name}
                </div>
                <div className="person-title text-center">
                    {this.props.title}
                </div>
                <div className="person-bio">
                    {this.props.bio}
                </div>
            </div>
        );
    }
}

export default Person;
