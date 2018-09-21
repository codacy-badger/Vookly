import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SigninPage = () => (
  <Layout>
    <h1>Hi from the registration page</h1>
    <p>Please register</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SigninPage
