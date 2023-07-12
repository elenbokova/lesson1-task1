import React from "react";

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <legend>
                    <h4>{this.props.title}</h4>
                </legend>
                <input placeholder="Имя" onChange={(e) => this.setState({ first_name: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ last_name: e.target.value })} />
                <input placeholder="Адрес электронной почты" onChange={(e) => this.setState({ email: e.target.value })} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }}>{this.props.text}</button>
            </form>

        )
    }
}

export default AddUser