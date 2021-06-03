import React, { Component } from 'react';

class Profile extends Component {
    render() {
        const {fullName,bio,imgSrc,profession} = this.props.person
        return (
            <div className="container">
                <img className="image" src={imgSrc} alt="dkfni"></img>
                <ul type="square">
                <li><h1>Name: {fullName}</h1></li>
                <li><h2>Bio: {bio}</h2></li>
                <li><h2>Profession: {profession}</h2></li>
                </ul>
            </div>
        );
    }
}

export default Profile;
