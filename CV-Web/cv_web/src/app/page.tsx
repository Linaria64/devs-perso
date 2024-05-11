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
    <nav>
      <ol className="flex gap-2 text-[#7a9fd7]/[07] font-bold ">
        <li className="ml-auto "><a href=""><AiFillHome/></a></li>
        <li><a href="#about">A Propos</a></li>
        <li><a href="#skills">Compétence</a></li>
        <li><a href="#works">Parcours</a></li>
        <li><a href="#">Portofolio</a></li>
        <li><a href="#">Contact</a></li>
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
  <section className="mt-3 mx-5 rounded-lg h-screen w-screen bg-[#9e826f]">
    <div className="border-transparent border ">
     <h1 className="text-center bg-[#c7bab4] w-6/12 mx-auto my-2 p-1 text-[#805252] font-bold rounded-lg">{title}</h1>
    </div>
   {children}
   </section>
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
      <div className="rounded-lg bg-[#41434c] w-5/6 h-full mx-auto">
        <p className="text-[#efe0fe]">{text}</p>
      </div>
    )
  }

  function Links({Llinkedin,Lgit,gitHub, LinkeDin}:any) {
    return (
      <div className="rounded-lg bg-[#41434c] w-1/4">
       <ul className="text-[#efe0fe]">
          <li><a  href={Llinkedin}>{gitHub} gitHub</a></li>
          <li><a href={Lgit}>{LinkeDin} Linkedin</a></li>
        </ul>
      </div>
    )
  }

  function Icons({icons,text}:any){
    return (
      <div>
        <ul>
          <li>{icons}<p>{text}</p></li>
        </ul>

      </div>
      )
  }

  function Avatar() {
    return (
      <div>
        <Image className='rounded-lg mx-5 my-5'
          src="/image/Avatar.png"
          alt=" "
          width={200}
          height={200}
        />
      </div>
    ) 
  }

function SkillTitle({title}:any) {
  return <div><h2>{title}</h2></div>
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
export default function Site() {

return (
   <main className="w-full h-full bg-gradient-to-r from-[#e1e3e7] to-[#c9ccd3]">
    <Nav/>
    <section>
      
        <Container id="About" title="A Propos">
          <div className="flex">
            <div className="border-solid  border-4 border-red-500 w-6/12">
                <Avatar/>
                <Links gitHub=<AiFillGithub/>
                      LinkeDin=<AiFillLinkedin className='rounded-xl'/>   
                      Llinkedin= "https://www.linkedin.com/in/dorian-soudan-000a6b1b5/"
                      Lgit= "https://github.com/Linaria64?tab=repositories"    
                  />
              </div>
              <div className="border-solid  border-4 border-red-500 w-6/12">
              <Text text="lorem ipsum"/>
              <div  className="rounded-lg bg-[#41434c] flex flex-row gap-4 mt-5">
              <Icons icons=<AiFillCode/>
                    text="Front-End" 
              />
              <Icons icons=<AiFillDatabase/>
                    text="Back-end" 
              />
              
              <Icons icons=<AiOutlineDocker/>
                    text="Docker" 
              />
              <Icons icons=<IoGitBranchOutline/>
                    text="Git" 
              />
                <Icons icons=<SiFigma/>
                    text="figma" 
              />

              </div>
              </div>
          </div>
        </Container>

        <Container id="skills" title="Compétence">
          <SkillTitle title="Language"/>
          <Icons icons=<AiFillHtml5/>
                text="HTML:utilisé" 
          />
          <Icons icons=<SiCsswizardry />
                text="CSS:utilisé" 
          />
          <Icons icons=<SiJavascript/>
                text="JS:utilisé" 
          />
          <Icons icons=<SiTypescript/>
                text="TS:utilisé" 
          />
          <Icons icons=<SiPhp/>
                text="PHP:utilisé" 
          />
          <Icons icons=<SiMysql/>
                text="MySQL:utilisé" 
          />

          <Icons icons=<SiArduino/>
                 text="C++ Arduino:utilisé" 
          />

          <SkillTitle title="Framework"/>
          <Icons icons=<SiLaravel/>
                text="Laravel:utilisé" 
          />
          <Icons icons=<SiSymfony/>
                text="Symfony:utilisé" 
          />
          <Icons icons=<RiReactjsLine />
                text="ReactJS:utilisé" 
          />
          <Icons icons=<RiAngularjsFill/>
                text="Angular:vue" 
          />
          <Icons icons=<SiApachecordova/>
                text="Cordova:vue" 
          />

          <SkillTitle title="others"/>

          <Icons icons=<BsWordpress/>
                text="Wordpress" 
          />

          <Icons icons=<AiOutlineDocker/>
                text="Docker/Lando:utilisé" 
          />
          <Icons icons=<AiFillGithub/>
                text="Github:utilisé" 
          />
          <Icons icons=<AiOutlineLinux/>
                text="Linux:utilsié" 
          />
          <Icons icons=<VscVscodeInsiders/>
                text="Vscode:utilisé" 
          />
          <Icons icons=<SiPhpstorm/>
                text="PhpStorm:utilisé" 
          />
        </Container>
        
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
        
        <Container  title="Portofolio"/>
    </section>

    <section className="mt-3 mx-5 rounded-lg h-screen w-screen bg-[#9e826f]" >
          <div>
            <Footer icons=<BsFillPhoneFill/>/>
            <Footer icons=<IoIosMail/>/>
            <Footer icons=<IoMdDownload/>/>
          </div>
    </section>
  </main>
  );
}
