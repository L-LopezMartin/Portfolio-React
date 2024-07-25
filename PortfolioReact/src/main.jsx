import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Main from './assets/Component/Main/Main'
import Header from './assets/Component/Header/Header'
import Footer from './assets/Component/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header/>
      <Main/>
      <Footer/>
    </ChakraProvider>
  </React.StrictMode>,
)
