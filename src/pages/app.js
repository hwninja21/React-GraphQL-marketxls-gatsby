import React from "react"
import { Router } from "@reach/router"
import Profile from "../Profile"
import Details from "../Details"
import Login from "../Login"
import PrivateRoute from "../PrivateRoute"
import Status from "../Status"

const App = () => (
  <div>
    <Status />
    <Router>
      <PrivateRoute path="/" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </div>
)

export default App