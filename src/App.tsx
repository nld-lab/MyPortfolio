import Layout from './components/layout'
import { ThemeProvider } from './components/Theme-provider'
import Homepage from './pages/Homepage'

function App() {
 

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Homepage></Homepage>
      </Layout>
    </ThemeProvider>
  )
}

export default App
