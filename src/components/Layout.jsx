import React from 'react'
import Header from './Header'
import Footer from './Footer'

import '../scss/main.scss'
import 'font-awesome/css/font-awesome.css'

export default ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
