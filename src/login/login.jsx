import React from "react";
import './login.css';
import axios from 'axios';
import qs from 'qs';

const client = axios.create({
    baseURL: 'http://localhost:4000',
});

axios.interceptors.request.use(
    config => {
        if (config.method === 'post'){
            config.data = qs.stringify(config.data);  
        }
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <button type="submit" className="btn" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        );
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    //axios post username and passworp
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        client.post('/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(function (response) {
            //json parse jwt
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default Login;
