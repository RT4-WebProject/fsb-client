import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { ContextProvider } from './contexts'
import { ModalProvider } from '@'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <ModalProvider>
            <App />
          </ModalProvider>
        </MantineProvider>
      </ContextProvider>
    </Router>
  </React.StrictMode>
)
