"use client";
import Image from 'next/image'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {AiFillCode} from 'react-icons/ai'
import {AiFillDatabase} from 'react-icons/ai'
import {AiOutlineDocker} from 'react-icons/ai'
import { IoGitBranchOutline } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiSymfony } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { SiApachecordova } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { AiOutlineLinux } from "react-icons/ai";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPhpstorm } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { BsFillPhoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
/**
 * Menu de navigation
 * @returns NavJSX
 */
function Nav() {
  return (
    <header>
    <nav className='p-2 gap-4 mr-5'>
      <ol className="flex gap-2 text-[#7a9fd7]/[07] font-bold ">
        <li className="ml-auto p-1"><a  href="#"><AiFillHome className=''/></a></li>
        <li><a href="#about">A Propos</a></li>
        <li><a href="#skills">Compétence</a></li>
        <li><a href="#works">Parcours</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ol>
    </nav>
</header>
)
}

/**
 * Passage de props pour les titres et les enfants JSX des différentes Sections
 * @returns ContainerJSX
 */
function Container({title,children}:any) {
  return (
  <div className=" mt-3  rounded-lg  bg-[#9e826f] h-screen w-full border-4  border-red-600">
    <div className="border-transparent border-4 ">
     <h1 className="text-center bg-[#c7bab4] w-2/6 mx-auto my-2 p-1 text-[#805252] font-bold rounded-lg">{title}</h1>
    </div>
   {children}
   </div>
)
}

  /**
   * Enfant JSX ( Avatar, Text, Réseaux, etc...)
   * @returns Enfant JSX
   * Text : Retourne une chaine de caractère
   * Links : Retourne 2 Liens 
   */

  function Text({text}:any) {

    return (
      <div className="rounded-lg bg-[#41434c] my-5 mx-auto w-5/6 h-3/6 ">
        <p className="text-[#efe0fe]">{text}</p>
      </div>
    )
  }

  function Links({Llinkedin,Lgit,gitHub, LinkeDin}:any) {
    return (
      <div className="rounded-lg bg-[#41434c] w-3/6 p-2  mx-auto mb-5">
       <ul className="text-[#efe0fe] ">
          <li><a className='flex gap-2'  href={Llinkedin}>{gitHub} gitHub</a></li>
          <li><a className='flex gap-2' href={Lgit}>{LinkeDin} Linkedin</a></li>
        </ul>
      </div>
    )
  }

  function Icons({icons,text}:any){
    return (
        <ul className='p-1'>
          <li className='flex flex-col gap-2'>{icons}<p className='text-[#efe0fe]'>{text}</p></li>
        </ul>

      )
  }

  /**
   * Fonction qui retourne des icones pour la section skill
   * @returns Icones
   */

function IconsSkils({icons}:any) {
  return (
    <div>
      <ul className='p-1'>
        <li>{icons}</li>
      </ul>
    </div>
  )
}

  /**
   * Fonction qui retourne une chaines de caractères pour la section skill
   * @returns Une chaine de caractère
   */

  function TextSkils({text}:any) {
    return (
      <div className='p-5'>
        <p className=''>{text}</p>
      </div>
    )
  }
  
  
  function Avatar() {
    return (
        <Image className='rounded-lg mx-auto my-5 w-3/6'
          src="/image/Avatar.png"
          alt=" "
          width={300}
          height={300}
          priority
        />
    ) 
  }

function SkillTitle({title}:any) {
  return <div className='mb-2 rounded-lg bg-[#41434c] p-1'><h2 className='text-center rounded-lg p-2 text-[#efe0fe] font-semibold'>{title}</h2></div>
}

function ContainerWorks({children}:any) {
  return (
  <div className="">{children}</div>
)
}



/**
 * 
 * @returns Footer JSX
 */
function Footer({icons}:any) {
  return (
    <footer className="">
    <div className="bg-[#41434c] w-1/4 rounded-lg m-auto">
<a href="">{icons}</a>  
  </div>
    </footer>
)
}

/**
 * Function all in one
 * Call all JSX Element
 * @returns all jsx element
 */



/**
 * TODO METTRE EN ITALIQUE LE TEXT LIEN GITHUB ET LIEN LINKEDIN 
 * TODO COMMENCER LA SECTION PARCOURS
 * @returns 
 */
export default function Site() {
return (
  <main className=" bg-gradient-to-r from-[#e1e3e7] to-[#c9ccd3] h-full w-full ">
      <Nav/>
      <section id="About">
        <section>
        <Container   title="A Propos">
              <div  className="flex">
                <div className="w-2/6">
                  <Avatar/>
                  <Links gitHub=<AiFillGithub className='w-7 h-7'/>
                      LinkeDin=<AiFillLinkedin className='rounded-xl w-7 h-7'/>   
                      Llinkedin= "https://www.linkedin.com/in/dorian-soudan-000a6b1b5/"
                      Lgit= "https://github.com/Linaria64?tab=repositories"    
                      />
                </div>

               <div className="w-4/6">
                <Text text="lorem ipsum"/>

                <div  className="rounded-lg bg-[#41434c] flex  gap-x-12  mx-auto w-4/6 h-2/6 ">
                  <Icons icons=<AiFillCode className='w-14 h-14'/>
                    text="Front-End" 
                  />
                  <Icons icons=<AiFillDatabase className='w-14 h-14'/>
                    text="Back-end" 
                  />
                  <Icons icons=<AiOutlineDocker className='w-14 h-14'/>
                    text="Docker" 
                  />
                  <Icons icons=<IoGitBranchOutline className='w-14 h-14'/>
                    text="Git" 
                  />
                  <Icons icons=<SiFigma className='w-14 h-14'/>
                    text="figma" 
                  />
                </div>
               </div>
              </div>
          </Container>
        </section>

        <section id="skills" className='border-4 border-neutral-950 '>
          <Container  title="Compétence">
            <section className='flex gap-5  h-full'>
            <div className='w-2/6  rounded-lg  gap-2 '>
              <SkillTitle title="Language"/>

              <div className='flex gap-2 h-5/6'>
                  <section className='border-4 border-red-700 w-2/4 bg-[#41434c] space-y-5'>
                    <IconsSkils icons=<AiFillHtml5 className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiCsswizardry className='w-14 h-14 rounded-lg'/>/>
                    <IconsSkils icons=<SiJavascript className=' rounded-lg w-14 h-14'/>/>
                    <IconsSkils icons=<SiTypescript className='w-14 h-14 rounded-lg'/>/>
                    <IconsSkils icons=<SiPhp className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiMysql className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiArduino className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                  </section>

                  <section className='border-4 border-blue-800 w-2/4 bg-[#41434c] space-y-5'>
                    <TextSkils text="· Html: Utilisé"/>
                    <TextSkils text="· Css: Utilisé"/>
                    <TextSkils text="· JS: Utilisé"/>
                    <TextSkils text="· TS: Utilisé"/>
                    <TextSkils text="· PHP: Utilisé"/>
                    <TextSkils text="· MYSQL: Utilisé"/>
                    <TextSkils text="· ARDUINO: Utilisé"/>
                  </section>
              </div>
            </div> 

            <div className='w-2/6  rounded-lg  gap-2 '>
              <SkillTitle title="Language"/>

              <div className='flex gap-2 h-5/6'>
                  <section className='border-4 border-red-700 w-2/4 bg-[#41434c] space-y-14'>
                    <IconsSkils icons=<SiLaravel className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiSymfony className='w-14 h-14 rounded-lg'/>/>
                    <IconsSkils icons=<RiReactjsLine className=' rounded-lg w-14 h-14 fill-[#41434c] bg-neutral-50'/>/>
                    <IconsSkils icons=<RiAngularjsFill className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiApachecordova className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                  </section>

                  <section className='border-4 border-blue-800 w-2/4 bg-[#41434c] space-y-14'>
                    <TextSkils text="· Laravel: Utilisé"/>
                    <TextSkils text="· Symfony: Utilisé"/>
                    <TextSkils text="· ReactJS: Utilisé"/>
                    <TextSkils text="· Angular: Vue"/>
                    <TextSkils text="· Cordova: Vue"/>
                  </section>
              </div>
            </div> 


            <div className='w-2/6  rounded-lg  gap-2 '>
              <SkillTitle title="Language"/>

              <div className='flex gap-2 h-5/6'>
                  <section className='border-4 border-red-700 w-2/4 bg-[#41434c] space-y-2'>
                    <IconsSkils icons=<BsWordpress className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<AiOutlineDocker className='w-14 h-14 rounded-lg fill-[#41434c] bg-neutral-50 '/>/>
                    <IconsSkils icons=<IoGitBranchOutline  className=' rounded-lg w-14 h-14 '/>/>
                    <IconsSkils icons=<AiFillGithub className='w-14 h-14 rounded-lg fill-[#41434c] bg-neutral-50 '/>/>
                    <IconsSkils icons=<AiOutlineLinux className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<VscVscodeInsiders className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiPhpstorm className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiFigma className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                  </section>

                  <section className='border-4 border-blue-800 w-2/4 bg-[#41434c]'>
                    <TextSkils text=""/>
                    <TextSkils text=""/>
                    <TextSkils text=""/>
                    <TextSkils text=""/>
                    <TextSkils text=""/>
                    <TextSkils text=""/>
                    <TextSkils text=""/>
                  </section>
              </div>
            </div> 

            </section>
          </Container>
        </section>
        












        <Container id="works" title="Parcours">
          <ContainerWorks className="bg-gray-400">
            <SkillTitle title="un titre"/>
            <Text text="un text"/>
          </ContainerWorks>

          <ContainerWorks className="bg-gray-400">
            <SkillTitle title="un titre"/>
            <Text text="un text"/>
          </ContainerWorks>


          <ContainerWorks className="bg-gray-400">
            <SkillTitle title="un titre"/>
            <Text text="un text"/>
          </ContainerWorks>
        </Container>
        {/**
 * 
        <Container  title="Portofolio"/>
 */}

        <div className="mt-3 mx-5 rounded-lg  bg-[#9e826f]">
            <Footer icons=<BsFillPhoneFill/>/>
            <Footer icons=<IoIosMail/>/>
            <Footer icons=<IoMdDownload/>/>
          </div>
    </section>
  </main>
  );
}
