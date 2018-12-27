import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

import 'scss/main.scss'

export default ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
