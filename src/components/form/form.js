import react from 'react';
import axios from 'axios';
import './form.css';

export default class Form extends react.Component {
    state = {
        userName:'',
    }
    handleSubmit  =  async (event) => {
        // input = userNameInput.current.value;
        event.preventDefault();
        const response =  await axios.get(`https://api.github.com/users/${this.state.userName}`); // specify api endpoint & use template string so you can interpolate
        this.props.onSubmit(response.data);
       this.setState({userName:''})
    }
    render() {
       // const userNameInput = react.createRef();
       //ref={userNameInput}

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form__field">
                    <input className="form__input" type="text "placeholder="Enter github user name" value={this.state.userName} onChange={event => this.setState({userName: event.target.value})}/>
                    <button className="form__button">add user</button>
                </div>
            </form>
        )
    }
}