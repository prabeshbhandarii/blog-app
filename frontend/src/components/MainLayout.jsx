import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ErrorBoundary from '../constants/ErrorBoundary'

const MainLayout = ({children}) => {
  return (
    <>
      <ErrorBoundary>
      <Header />
        {children}
      <Footer />
      </ErrorBoundary>
    </>
  )
}

export default MainLayout
