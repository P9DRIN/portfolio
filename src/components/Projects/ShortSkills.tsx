interface shortSkillsProps{
    firstSkill?: string,
    secondSkill?: string,
    thirdSkill?: string,
    fourthSkill?: string,
    fifthSkill?: string,
    sixthSkill?: string,
    seventhSkill?: string,
    eigthSkill?: string,
    ninethSkill?: string,
    tenthSkill?: string,
}

export function ShortSkills(
    {firstSkill, secondSkill, thirdSkill,
     fourthSkill, fifthSkill, sixthSkill,
     seventhSkill, eigthSkill, ninethSkill,
     
    }: shortSkillsProps){

    return(
        <div className="flex flex-wrap gap-1 w-[100%] md:w-[50%] lg:w-[30%] justify-center items-center border border-b-neutral-500 p-5">
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{firstSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{secondSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{thirdSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{fourthSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{fifthSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{sixthSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{seventhSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{eigthSkill}</span>
            <span className="bg-slate-700 w-[7rem] flex justify-center text-sky-400 font-semibold">{ninethSkill}</span>
        </div>
    )
}