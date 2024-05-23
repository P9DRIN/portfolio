import { Contact } from "@/components/MainComponents/Contact";
import { Container } from "@/components/Container";
import { Description } from "@/components/MainComponents/Description";
import { DescriptionTwo } from "@/components/MainComponents/DescriptionTwo";
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