"use client";

/**
 * Menu de navigation
 * @returns NavJSX
 */
function Nav() {
  return (
    <header className="  bg-gray-500">
    <nav>
      <ol className="flex gap-2">
        <li><a href="#about">A Propos</a></li>
        <li><a href="#skills">Compétence</a></li>
        <li><a href="#">Parcours</a></li>
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
  <div className=" border-solid border-2 border-blue-800 bg-amber-700">
    <div>
     <h1>{title}</h1>
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
      <div>
                  <p>{text}</p>

      </div>
    )
  }

  function Links({Llinkedin,Lgit,gitHub, LinkeDin}:any) {
    return (
      <div>
        <ul>
          <li><a href={Llinkedin}>{gitHub}</a></li>
          <li><a href={Lgit}>{LinkeDin}</a></li>
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

  function Avatar({img}:any) {
    return (
      <div>
              <h1>{img}</h1>

      </div>
    ) 
  }

function SkillTitle({title}:any) {
  return <div> <h2>{title}</h2> </div>
}

function ContainerWorks({children}:any) {
  return (
  <div className="bg-gray-400">{children}</div>
)
}



/**
 * 
 * @returns Footer JSX
 */
function Footer({icons}:any) {
  return (
    <footer>
    <div className="bg-gray-400">
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
  <main className="w-full h-full">

      <Nav/>

    <div>
      <Container id="About" title="A Propos">
        <Avatar img="mettre une image ici et remplacer le h1 par un img:s"/>
          <Text text="lorem ipsum"/>
          <Links gitHub="Lien GitHub"
                LinkeDin="Lien LinkeDin"   
                Llinkedin = "https://www.youtube.com/results?search_query=jsx+tuto+"
                Lgit = "https://www.youtube.com/results?search_query=jsx+tuto+"    
        />
        <Icons icons="icons"
               text="text" 
        />
        <Icons icons="icons"
               text="text" 
        />
        <Icons icons="icons"
               text="text" 
        />
        <Icons icons="icons"
               text="text" 
        />
        
      </Container>

      <Container id="skills" title="Compétence">
          <SkillTitle title="Language"/>
          <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />

        <SkillTitle title="Framework"/>
          <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
          <SkillTitle title="others"/>
          <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />
            <Icons icons="icons"
               text="text" 
        />


      </Container>
        
      <Container  title="Parcours">
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
    </div>
   

  <Container>
     <Footer icons="telephone"/>
     <Footer icons="mail"/>
     <Footer icons="dl"/>

  </Container>
   
    
  </main>
  );
}
