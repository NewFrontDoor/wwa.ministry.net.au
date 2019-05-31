import React, { Component } from 'react';


class Person extends Component {

    render() {
        return (
            <div className={`person-container col-md-6 col-sm-6 col-xs-12 ${this.props.mobileHeight}`}>
                <div className="row col-xs-12">

                    <div className="col-xs-7" style={{ float: "left" }} >

                        <div className="person-image" >
                            <img src={this.props.image} alt={this.props.name} />
                        </div>
                        <div className="person-name">
                            {this.props.name}
                        </div>
                        <div className="person-title">
                            {this.props.title}
                        </div></div>
                    <div className="bio-fix" style={{ marginTop: "160px" }} />
                    <div className="bio-container col-xs-12">
                        <div className="person-bio" dangerouslySetInnerHTML={{ __html: this.props.bio }} />
                    </div>




                </div>


                {/*bio below image
                <div className={`person-container col-md-6 col-sm-6 col-xs-12 ${this.props.mobileHeight}`}>
                <div className="row col-xs-12">
                    <div>
                        <div className="person-image">
                            <img src={this.props.image} alt={this.props.name} />
                        </div>
                        <div className="person-name">
                            {this.props.name}
                        </div>
                        <div className="person-title" style={{ marginBottom: "20px" }}>
                            {this.props.title}
                        </div>
                    </div>
                    <div className="bio-container">
                        <div className="person-bio" dangerouslySetInnerHTML={{ __html: this.props.bio }} />
                    </div>


                </div>
                */}



                {/*<div className="person-container col-md-4 col-sm-6 col-xs-12">
                <div className="person-image">
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <div className="person-name">
                    {this.props.name}
                </div>
                <div className="person-title">
                    {this.props.title}
                </div>
                <div className="person-bio">
                    {this.props.bio}
                </div>
        </div>*/}

            </div >
        );
    }
}

export default Person;
