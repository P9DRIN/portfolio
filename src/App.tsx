import { Header } from "./components/Header"
import { ThemeProvider } from "./themes/theme-provider"
import { Container } from "./components/Container"
import { Description } from "./components/Description"
import { DescriptionTwo } from "./components/DescriptionTwo"
import './global.css'

export function App() {
  return (
    <>
      <div>
        <ThemeProvider storageKey="phlstheme" defaultTheme="dark">
          <Container>
          <Header/>
          <Description/>
          <DescriptionTwo/>
          </Container>
        </ThemeProvider>
      </div>
      
    </>
  )
}

