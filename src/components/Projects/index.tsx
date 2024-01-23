import { CaretRight } from "phosphor-react"
import { Project } from "./Project"
import virtualBudget from '/virtualBudget.jpg'

export function Projects(){
    return(
        <>
        <div className="flex flex-col items-center mt-[3rem]" >
            <span className="flex justify-center items-center text-4xl"><CaretRight/>Projetos</span>
            <Project 
            key="virtualBudget"
            src={virtualBudget} 
            title="Virtual Budget"
            description="O resultado que Virtual Budget traz
            é facilitar o controle de gastos baseado em projetos e orçamentos de projetos. 
            É possível adicionar novos projetos, novos orçamentos,
            verificar o orçamento disponível, gastos e saldo total após gastos." 
            link="https://virtualbudgets.netlify.app" 
            repoLink="https://github.com/P9DRIN/virtualBudget"
            />
            <Project 
            key="virtualBudget"
            src={virtualBudget} 
            title="Virtual Budget"
            description="O resultado que Virtual Budget traz
            é facilitar o controle de gastos baseado em projetos e orçamentos de projetos. 
            É possível adicionar novos projetos, novos orçamentos,
            verificar o orçamento disponível, gastos e saldo total após gastos." 
            link="https://virtualbudgets.netlify.app" 
            repoLink="https://github.com/P9DRIN/virtualBudget"
            />
            
            
        
        </div>
        </>
    )
}