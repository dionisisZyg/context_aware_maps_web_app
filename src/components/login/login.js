import React, {Component} from 'react';
import {Card, CardActions} from "@material-ui/core/index";
import Button from "@material-ui/core/Button/Button";
import CardContent from "@material-ui/core/CardContent/CardContent";
import TextField from "@material-ui/core/TextField/TextField";
import Loading from "../loading/loading";
import Snackbar from '@material-ui/core/Snackbar';

const style = {
    container: {
        height: '100vh',
    },
    refresh: {
        position: 'fixed',
        top: '80%',
        left: '50%',
        transform: 'translateX(-50%)'
    },
};

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }


    _onInputChange = (evt) => {
        this.setState(
            {
                ...this.state,
                [evt.target.name]: evt.target.value
            }
        );
    };

    _login = (evt) => {
        evt.preventDefault();
        this.props.login({
            sendBody: {
                username: this.state.username,
                password: this.state.password
            }
        })
    };

    render(){
        const { loggingIn, logInResponse, changeUserStoreSettings } = this.props;
        return (
            <div style={style.container}>
                <Loading displayLoader={loggingIn}/>
                <div className={'container d-flex h-100'}>
                    <div className={'row justify-content-center align-self-center  ml-auto mr-auto'}>
                        <Card className={'p-3'}>
                            <CardContent>
                                <form className={'form-horizontal'} onSubmit={this._login}>
                                    <TextField
                                        label="Username"
                                        name={'username'}
                                        value={this.state.username}
                                        onChange={this._onInputChange}
                                        type="text"
                                        fullWidth={true}
                                        margin={"normal"}
                                    />
                                    <TextField
                                        fullWidth={true}
                                        label="Password"
                                        name={'password'}
                                        value={this.state.password}
                                        onChange={this._onInputChange}
                                        type="password"
                                        margin={"normal"}
                                    />
                                    <Button variant="raised" color={"primary"} type={'submit'}>
                                        Sign in
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={!!logInResponse}
                    onClose={() => { changeUserStoreSettings({
                        key: 'logInResponse',
                        value: null
                    }) }}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{logInResponse}</span>}
                />
            </div>
        )
    }
}

export default Login;