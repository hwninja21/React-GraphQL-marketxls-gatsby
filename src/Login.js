import React from "react"
// import { navigate } from "gatsby"
import Form from "./Form"
import View from "./View"
import { handleLogin } from "./utils/auth"
class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <View title="Log In">
          <Form
            handleUpdate={e => this.handleUpdate(e)}
            handleSubmit={e => this.handleSubmit(e)}
          />

          <p>
            Return To Home <a href="/"> Page</a>
          </p>
        </View>
      </div>
    )
  }
}

export default Login
