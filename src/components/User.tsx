import { Component } from "react";

interface Users{
    id: any,
    username: String | undefined,
    name: String | undefined
    email: String | undefined
}

class User extends Component<Users>{
    state = {
        users: [
            {
                id: this.props.id,
                username: this.props.username,
                name: this.props.name,
                email: this.props.email
            }
        ]
    }
    
    getUser() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({users: data}))
    }
    
    componentDidMount(){
        this.getUser()
    }

    render(){
        return(
            <div className="container">
                <h1>User Page!</h1>
                <hr />
                {
                    this.state.users ? 
                    this.state.users.map(user => 
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h3>{user.username}</h3>
                        <li>{user.email}</li>
                    </div>
                    ) : <h1>Loading...</h1>
                }
            </div>
        )
    }
}

export default User;