import React from "react"
import View from "./View"
import { Link } from "gatsby"

import { getCurrentUser } from "./utils/auth"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Your Profile">
      <p>Welcome back to your profile, {name}!</p>
      <div>
        <Link to="/">Back To Home Page</Link>
      </div>
    </View>
  )
}

export default Profile
