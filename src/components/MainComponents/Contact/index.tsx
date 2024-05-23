import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";


export function Contact(){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-[15rem] gap-4 bg-neutral-900 antialiased" >
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">Obrigado!</h1>
            <h3 className="text-2xl text-gray-400 mb-1">Entre em Contato:</h3>
            <div className="mb-2"><a href="mailto:pedrohenriquelimasilva2837@hotmail.com" className="bg-sky-800 font-semibold hover:bg-sky-900 p-3 md:p-5 text-2xl rounded-md">Me envie um email</a></div>
            <div className="flex gap-8 mt-1">
                <a href="https://linkedin.com/in/p9drin/" className=" text-sky-500 hover:text-sky-700"><LinkedinLogo className="text-4xl md:text-5xl"/></a>

                    <a href="https://api.whatsapp.com/send?phone=5512992391602" className=" text-sky-500 hover:text-sky-700"><WhatsappLogo className="text-4xl md:text-5xl"/></a>

                    <a href="https://github.com/P9DRIN"
                     className="text-sky-500 hover:text-sky-700"><GithubLogo className="text-4xl md:text-5xl"/></a>
            </div>
        </div>
        </>
    )
}