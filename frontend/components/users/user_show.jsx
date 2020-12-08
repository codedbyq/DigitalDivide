import React, { Component } from 'react'


class UserShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        console.log(this.props.user);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default UserShow;
