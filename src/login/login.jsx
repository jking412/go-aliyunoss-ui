import React from "react";
import './login.css';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return (
            <div className="main">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
}

export default Login;
