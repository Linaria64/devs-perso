"use client";

import  pdf  from "../type.s";
import Image from 'next/image';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillHome} from 'react-icons/ai';
import {AiFillCode} from 'react-icons/ai';
import {AiFillDatabase} from 'react-icons/ai';
import {AiOutlineDocker} from 'react-icons/ai';
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
      <ol className="flex gap-2 text-[#c7cbd2]/[07] font-bold fixed inset-x-0 top-0  px-5 py-1">
        <li className="ml-auto p-1"><a  href="#"><AiFillHome/></a></li>
        <li><a href="#about">A Propos</a></li>
        <li><a href="#skills">Compétence</a></li>
        <li><a href="#works">Parcours</a></li>
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
  <div className=" mt-3  rounded-lg   flex flex-col w-[97%] mx-auto">
    <div className="border-transparent border-4 ">
     <h1 className="text-center bg-[#c7cbd2] w-2/6 mx-auto my-2 p-1 text-[#436371] font-bold rounded-lg">{title}</h1>
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
      <div className="rounded-lg bg-[#715143] my-5 mx-auto w-5/6 h-3/6 ">
        <p className="text-[#c7cbd2]">{text}</p>
      </div>
    )
  }

  function Links({Llinkedin,Lgit,gitHub, LinkeDin}:any) {
    return (
      <div className="rounded-lg bg-[#715143] w-3/6 p-2  mx-auto mb-5">
       <ul className="text-[#c7cbd2] ">
          <li><a className='flex gap-2 italic'  href={Llinkedin}>{gitHub} gitHub</a></li>
          <li><a className='flex gap-2 italic' href={Lgit}>{LinkeDin} Linkedin</a></li>
        </ul>
      </div>
    )
  }

  function Icons({icons,text}:any){
    return (
        <ul className='p-1'>
          <li className='flex flex-col gap-2'>{icons}<p className='text-[#c7cbd2]'>{text}</p></li>
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
        <Image className='rounded-lg mx-auto my-5 mb-5 w-3/6 '
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
  function WorkTitleL({title}:any) {
    return <div className='p-3  bg-[#41434c] rounded-lg w-1/4 mx-48 mr-auto mb-3'><h2 className='text-center rounded-lg p-2 text-[#efe0fe] font-semibold'>{title}</h2></div>
  }

  function WorkTitleR({title}:any) {
    return <div className='p-3 bg-[#41434c] rounded-lg w-1/4 mx-48 ml-auto mb-3'><h2 className='text-center rounded-lg p-2 text-[#efe0fe] font-semibold'>{title}</h2></div>
  }


  function TextWorkL({text}:any) {
    return (
      <div className='p-5 bg-[#41434c] rounded-lg w-2/4 mr-auto'>
        <p className=''>{text}</p>
      </div>
    )
  }
  function TextWorkR({text}:any) {
    return (
      <div className='p-5 bg-[#41434c] rounded-lg w-2/4 ml-auto'>
        <p className=''>{text}</p>
      </div>
    )
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
function Footer({tag,icons}:any) {
  return (
    <footer className="mx-auto">
    <div className="bg-[#41434c] p-5 rounded-lg">
<a href={tag}>{icons}</a>  
  </div>
    </footer>
)
}



function Download({icons}:any) {
  
  const resumePDF = pdf("CV_Pro_dorian_finalV2.pdf");

  return (
    <footer className="mx-auto">
    <div className="bg-[#41434c] p-5 rounded-lg">
      <a href={resumePDF} download={resumePDF}  >{icons}</a>
  </div>
    </footer>
)


}

/**
 * Function all in one
 * Call all JSX Element
 * @returns all jsx element
 * 
 */



/**
 * TODO Faire en sorte que le site soit responsive
 * TODO heberger le site
 * @returns 
 */
export default function Site() {
return (
  <main className=" bg-gradient-to-r from-[#F0F2F0]  to-[#000C40]">
      <Nav/>
      <section>
        <section id="about">
        <Container   title="A Propos">
              <div className="flex">
                <div className="w-2/6">
                  <Avatar/>
                  <Links gitHub=<AiFillGithub className='w-7 h-7'/>
                      LinkeDin=<AiFillLinkedin className='rounded-xl w-7 h-7'/>   
                      Llinkedin= "https://www.linkedin.com/in/dorian-soudan-000a6b1b5/"
                      Lgit= "https://github.com/Linaria64?tab=repositories"    
                      />
                </div>

               <div className="w-full">
                <Text text="lorem ipsum"/>

                <div  className="rounded-lg bg-[#715143] flex  gap-x-12  mx-auto w-2/4 ">
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

        <section id="skills"  >
          <Container  title="Compétence">
            <section className='flex gap-5  h-full'>
            <div className='w-2/6  rounded-lg  gap-2 '>
              <SkillTitle title="Language"/>

              <div className='flex gap-2 h-5/6'>
                  <section className='rounded-lg space-x-10 w-2/4 bg-[#41434c] space-y-4'>
                    <p></p>
                    <IconsSkils icons=<AiFillHtml5 className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiCsswizardry className='w-14 h-14 rounded-lg'/>/>
                    <IconsSkils icons=<SiJavascript className=' rounded-lg w-14 h-14'/>/>
                    <IconsSkils icons=<SiTypescript className='w-14 h-14 rounded-lg'/>/>
                    <IconsSkils icons=<SiPhp className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiMysql className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiArduino className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                  </section>

                  <section className='rounded-lg w-2/4 bg-[#41434c] space-y-4'>
                    <p></p>
                    <TextSkils text="· Html: Utiliser"/>
                    <TextSkils text="· Css: Utiliser"/>
                    <TextSkils text="· JS: Utiliser"/>
                    <TextSkils text="· TS: Utiliser"/>
                    <TextSkils text="· PHP: Utiliser"/>
                    <TextSkils text="· MYSQL: Utiliser"/>
                    <TextSkils text="· ARDUINO: Utiliser"/>
                  </section>
              </div>
            </div> 

            <div className='w-2/6  rounded-lg  gap-2 '>
              <SkillTitle title="Language"/>

              <div className='flex gap-2 h-5/6'>
                  <section className='rounded-lg space-x-10 w-2/4 bg-[#41434c] space-y-10'>
                    <p></p>
                    <IconsSkils icons=<SiLaravel className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiSymfony className='w-14 h-14 rounded-lg'/>/>
                    <IconsSkils icons=<RiReactjsLine className=' rounded-lg w-14 h-14 fill-[#41434c] bg-neutral-50'/>/>
                    <IconsSkils icons=<RiAngularjsFill className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiApachecordova className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                  </section>

                  <section className='rounded-lg w-2/4 bg-[#41434c] space-y-10'>
                    <p></p>
                    <TextSkils text="· Laravel: Utiliser"/>
                    <TextSkils text="· Symfony: Utiliser"/>
                    <TextSkils text="· ReactJS: Utiliser"/>
                    <TextSkils text="· Angular: Vue"/>
                    <TextSkils text="· Cordova: Vue"/>
                  </section>
              </div>
            </div> 


            <div className='w-2/6  rounded-lg  gap-2 '>
              <SkillTitle title="Language"/>

              <div className='flex gap-2 h-5/6'>
                  <section className='rounded-lg space-x-10 w-2/4 bg-[#41434c] space-y-2'>
                    <p></p>
                    <IconsSkils icons=<BsWordpress className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<AiOutlineDocker className='w-14 h-14 rounded-lg fill-[#41434c] bg-neutral-50 '/>/>
                    <IconsSkils icons=<IoGitBranchOutline  className=' rounded-lg w-14 h-14 '/>/>
                    <IconsSkils icons=<AiFillGithub className='w-14 h-14 rounded-lg fill-[#41434c] bg-neutral-50 '/>/>
                    <IconsSkils icons=<AiOutlineLinux className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<VscVscodeInsiders className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiPhpstorm className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                    <IconsSkils icons=<SiFigma className='w-14 h-14 fill-[#41434c] bg-neutral-50 rounded-lg'/>/>
                  </section>

                  <section className='rounded-lg w-2/4 bg-[#41434c] space-y-3'>
                    <p></p>
                    <TextSkils text="· Wordpress: Utiliser"/>
                    <TextSkils text="· Docker/Lando: Utiliser"/>
                    <TextSkils text="· Git: Utiliser"/>
                    <TextSkils text="· GitHub/GitLab: Utiliser"/>
                    <TextSkils text="· VsCode: Utiliser"/>
                    <TextSkils text="· PhpStorm: Utiliser"/>
                    <TextSkils text="· Figma: Utiliser"/>
                  </section>
              </div>
            </div> 

            </section>
          </Container>
        </section>
        
        <section  id="works">
        <Container title="Parcours">
            <ContainerWorks className="bg-gray-400">
              <WorkTitleL title="un titre"/>
              <TextWorkL text="un text"/>
            </ContainerWorks>

            <ContainerWorks className="bg-gray-400">
              <WorkTitleR title="un titre"/>
              <TextWorkR text="un text"/>
            </ContainerWorks>


            <ContainerWorks className="bg-gray-400">
              <WorkTitleL title="un titre"/>
              <TextWorkL text="un text"/>
            </ContainerWorks>
          </Container>
        </section>
        {/**
 * 
        <Container  title="Portofolio" 
        
        />
 */}

        <div className="mt-3 mx-5 gap-5 rounded-lg flex p-3 bg-[#9e826f]" id="contact">
            <Footer tag="tel:0784833599" icons=<BsFillPhoneFill className='w-6 h-6 fill-[#9e826f]'/>/>
            <Footer tag="mailto:dorianpro77@proton.me" icons=<IoIosMail className='w-6 h-6 fill-[#9e826f]'/>/>
            <Download icons=<IoMdDownload className='w-6 h-6 fill-[#9e826f]'/>/>
          </div>
    </section>
  </main>
  );
}
