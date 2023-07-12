import React from "react";
import AddUser from "./addUser";
import { IoCloseCircleSharp, IoPencilSharp } from "react-icons/io5"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user">
                <span className="icons">
                    <IoPencilSharp onClick={() => {
                            this.setState({
                                editForm: !this.state.editForm                                
                            })
                        }} className="edit-icon" />
                    <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                </span>
                <h3>{this.user.first_name || this.user.last_name ? `${this.user.first_name} ${this.user.last_name}`: "Аноним"}</h3>
                <p>{this.user.email}</p>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} title="Изменить данные" text="Сохранить" />} 
            </div>
        )
    }
}

export default User