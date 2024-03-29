import { CaretRight } from "phosphor-react"
import { Project } from "./Project"
import virtualBudget from '/virtualBudget.jpg'
import smorp from '/smorp.jpg'
import sshave from '/sshave.jpg'
import { ShortSkills } from "./ShortSkills"

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
            <ShortSkills key="first" 
                    firstSkill="React" secondSkill="NodeJS" thirdSkill="Typescript" 
                    fourthSkill="Express" fifthSkill="MongoDB" sixthSkill="Axios"
                    seventhSkill="Zod" eigthSkill="React-router-dom" ninethSkill="React-hook-form"
            />
            <Project
            key={smorp}
            src={smorp}
            title="Smorp"
            description="Smorp é um e-commerce de roupas básicas. Tem como objetivo trazer simplicidade e agilidade na compra, sem muita poluição visual como é encontrado nas lojas hoje em dia e trazer uma excelente experiência ao usuário!"
            link="https://smorp.netlify.app"
            repoLink="https://github.com/P9DRIN/smorp"
            />
            <ShortSkills key="first" 
                    firstSkill="React" secondSkill="NodeJS" thirdSkill="Express" 
                    fourthSkill="MongoDB" fifthSkill="Typescript" sixthSkill="React-router-dom" seventhSkill="Axios" eigthSkill="Styled-Components" ninethSkill="Zod"
            />
            <Project
            key={sshave}
            src={sshave}
            title="SchedShave"
            description="Ainda em construção! Sistema de Gerenciamento Web de Agendamentos para cortes de cabelo!"
            link="https://scheduleshave.netlify.app"
            repoLink="https://github.com/P9DRIN/sshave"
            />
            <ShortSkills key="first" 
                    firstSkill="NextJS" secondSkill="React" thirdSkill="Typescript" 
                    fourthSkill="TailwindCSS" fifthSkill="ShadcnUI"  
            />
        </div>
        </>
    )
}