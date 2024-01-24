import { AcademicFormation } from "@/components/AcademicFormation";
import { CurriculumContainer } from "@/components/CurriculumContainer";
import { CurriculumGoals } from "@/components/CurriculumGoals";
import { CurriculumSkills } from "@/components/CurriculumSkills";
import { Experience } from "@/components/Experience";
import { GenerateCurriculum } from "@/components/GenerateCurriculum";
import { Languages } from "@/components/Languages";
import { MainContactInfo } from "@/components/mainContactInfo";



export function CurriculumLayout(){
    return(
        <>
            <CurriculumContainer>
                <MainContactInfo/>
                <CurriculumGoals/>
                <AcademicFormation/>
                <Experience/>
                <CurriculumSkills/>
                <Languages/>
                <GenerateCurriculum/>
            </CurriculumContainer>
        </>
    )
}