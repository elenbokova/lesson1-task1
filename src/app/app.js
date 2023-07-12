import React from "react";
import Header from "../components/header";
import Users from "../components/users";
import AddUser from "../components/addUser";
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((response) =>{
            this.setState({users: response.data.data})
        })
        
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    render() {
        return (
            <>
                <Header title="Lesson 1, task 1" />
                <section className="container">
                    <main>
                        <h1>Список пользователей</h1>
                        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
                    </main>
                    <aside>
                        <AddUser title="Добавить нового пользователя" text="Добавить" onAdd={this.addUser} />
                    </aside>
                </section>
            </>
        );
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []}, () =>{
            this.setState({ users: [...allUsers]})
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }
}

export default App