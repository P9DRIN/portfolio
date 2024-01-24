import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Description } from "@/components/Description";
import { DescriptionTwo } from "@/components/DescriptionTwo";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/themes/theme-provider";



export function MainLayout(){
    return(
        <>
        <ThemeProvider key="phls" defaultTheme="dark">

          <Container>
          <Header/>
          <Description/>
          <DescriptionTwo/>
          <Contact/>
          </Container>
        </ThemeProvider>
      
    </>
        )
}