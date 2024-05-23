import { AcademicFormation } from "@/components/CurriculumComponents/AcademicFormation";
import { CurriculumContainer } from "@/components/CurriculumComponents/CurriculumContainer";
import { CurriculumGoals } from "@/components/CurriculumComponents/CurriculumGoals";
import { CurriculumSkills } from "@/components/CurriculumComponents/CurriculumSkills";
import { Experience } from "@/components/MainComponents/Experience";
import { GenerateCurriculum } from "@/components/CurriculumComponents/GenerateCurriculum";
import { Languages } from "@/components/MainComponents/Languages";
import { MainContactInfo } from "@/components/CurriculumComponents/mainContactInfo";



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