import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { IconBrandGit, IconBrandGithub, IconSparkles, IconArrowUpRight, IconBrandHtml5, IconBrandJavascript, IconBrandCss3, IconBrandReact, IconBrandTailwind, IconBrandFigma, IconBrandNodejs } from '@tabler/icons-react'
import './App.css'
import { 
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter
} from './components/ui/card';
import Foto from "@/assets/fotohg.jpg";

function App() {

  return (
    <Router>
      <div className='gap-24'>
      <section className=' flex py-8 justify-between items-center'>
        <header className=' flex items-center gap-2'>
          <IconSparkles />
          <h3>Hugo Nascimento</h3>
        </header>
        <nav>
          <ul className=' flex items-center gap-8 text-base'>
            <li><Link smooth to="/#sobremim">Sobre min</Link></li>
            <li><Link smooth to="/#skills">Skills</Link></li>
            <li><Link smooth to="/#hobbies">Hobbies</Link></li>
            <li><Link smooth to="/#formacoes">Formações e Cursos</Link></li>
            <li><Link smooth to="/#experiencia">Experiência</Link></li>
            <li className='  font-semibold'><a href="mailto:hugonascimento704@gmail.com">hugonascimento704@gmail.com</a></li>
          </ul>
        </nav>
      </section>

      {/* Sessão de Header/Title */}
      <section>
        <div className='flex justify-between items-center'>
          <div id='sobremim' className=' flex flex-col items-start gap-6'>
            <h2 className=' text-5xl font-bold text-secondary w-[810px] flex text-start h-auto'>Olá, meu nome é Hugo Nascimento e sou desenvolvedor front-end</h2>
            <h3 className='text-start w-[810px] h-auto'>Eu sou graduando em Sistemas para Internet e atualmente estou participando do projeto Oracle One na Alura,msmccldcm akmskmkdsc mksmdskxsm.</h3>
            <ul className='flex flex-row gap-6'>
              <li>
                <Link className='flex flex-row gap-1'>Github<IconArrowUpRight/> </Link>
              </li>
              <li >
                <Link className='flex flex-row gap-1'>Linkedin<IconArrowUpRight/></Link>
              </li>
              <li>
                <Link className='flex flex-row gap-1'>Instagram<IconArrowUpRight/></Link>
              </li>
              <li>
                <Link className='flex flex-row gap-1'>Curriculo<IconArrowUpRight/></Link>
              </li>
            </ul>
          </div>
          {/* <img className=' rounded-full' src={Foto} /> */}
        </div>
      </section>

      {/* Sessão sobre mim  */}
      <section className=' flex p-16 flex-col items-center gap-[10px] self-stretch bg-[#EAF2FD] w-full'>
        <div className='flex flex-col items-start gap-4 text-start'>
          <h3 className=' font-semibold text-secondary text-3xl'>Sobre mim</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia. Aenean sit amet felis venenatis, egestas metus vitae, aliquet metus.</p>
          {/* assinatura aqui */}
        </div>
      </section>

      {/* Sessão Skills/Habilidades  */}
      <section>
        <div id='skills'>
          <h3 className=' font-semibold text-secondary text-3xl'>Skills</h3>
            <div>
            <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <IconBrandGit />
  </CardContent>
  <CardFooter>
    <IconBrandGithub />
  </CardFooter>
</Card>
            </div>

            <div>
              <div>
                <ul>
                  <li><IconBrandHtml5 className=' text-blue-600 w-8 h-8' /></li>
                  <li> Html 5</li>
                </ul>
              </div>
            
              <div>
                <ul>
                  <li><IconBrandJavascript /></li>
                  <li> Javascript</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li><IconBrandCss3 /></li>
                  <li> CSS</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li><IconBrandReact /></li>
                  <li> React</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li><IconBrandNodejs /></li>
                  <li> Node JS</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li><IconBrandTailwind /></li>
                  <li> Tailwind CSS</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li><IconBrandFigma /></li>
                  <li> Figma</li>
                </ul>
              </div>

            </div>
        </div>
      </section>

      {/* Sessão de Hobbies  */}
      <section>
        <div id='hobbies'>
          <h3 className=' font-semibold text-secondary text-3xl'>Hobbies</h3>
            <div>
              <div>
                <ul>
                  {/* <li><img /></li> */}
                  <li>Ouvir músicas</li>
                </ul>
              </div>

              <div>
                <ul>
                  {/* <li><img /></li> */}
                  <li>Viajar com a família</li>
                </ul>
              </div>

              <div>
                <ul>
                  {/* <li><img /></li> */}
                  <li>Assistir Filmes/Séries</li>
                </ul>
              </div>

              <div>
                <ul>
                  {/* <li><img /></li> */}
                  <li>Programação</li>
                </ul>
              </div>

              <div>
                <ul>
                  {/* <li><img /></li> */}
                  <li>Conhecer Culturas</li>
                </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Sessão de Historico Academico  */}
      <section>
        <div id='formacoes'>
          <h2 className=' font-semibold text-secondary text-3xl'>Formação Acadêmica</h2>
          <div>

            <div>
              <ul>
                <li>{/* logo local de formação  */}</li>
                <li>sistemas Para Internet</li>
                <li>Cursando 4° Período - UNICAP</li>
              </ul>    
            </div>

            <div>
              <ul>
                <li>{/* logo local de formação  */}</li>
                <li>Formação Front-End</li>
                <li>2024 - Alura</li>
              </ul>    
            </div>
          </div>
        </div>
      </section>

      {/* Sessão de Experiência Profissional/Projetos  */}
      <section>
        <div id='experiencia'>
          <h2 className=' font-semibold text-secondary text-3xl'>Experiência Prossional/Projetos</h2>
          <div>
            {/* Imagemm do projeto  */}
            <div>
              <h2>Protege Recife</h2>
              <h3>Projeto Integrador III - Unicap</h3>
              <div>
                {/* <span><a href=""><button>Repositório</button></a></span> */}
                {/* <span><a href=""><button>Ver demo</button></a></span> */}
              </div>
            </div>
          </div>

          <div>
            {/* imagem do projeto  */}
            <div>
              <h2>Jogo criado com HTML, CSS e Javascript</h2>
              <h3>Challenge Oracle</h3>
              <div>
                {/* <span><a href=""><button>Repositório</button></a></span> */}
                {/* <span><a href=""><button>Ver demo</button></a></span> */}
              </div>
            </div>
          </div>
        </div> 
      </section>
       

      {/* Sessão de contato  */}
      <section>
        <div id='contato'>
          <div>
            {/* <img>imagem de contato</img> */}
          </div>
          <div>
            <h2 className=' font-semibold text-secondary text-3xl'>Contato</h2>
            <h3>Quer entrar em contato comigo?</h3>
            <h3>Preencha o formulário abaixo e entrarei em contato o mais rápido possível.</h3>
            <form>
              <input type='text' id='nome' placeholder='Nome'/>
              <input type='email' id='email' placeholder='Email'/>
              <input type='text' id='assunto' placeholder='Assunto'/>
              <textarea rows='5' cols='40' id='mensagem' name='mensagem' placeholder='Sua mensagem'></textarea>
              <button>Enviar mensagem</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p>Desenvolvido por Hugo Nascimento</p>
          <p>2024</p>
        </div>
      </footer>

    </div>
    </Router>
  )
}

export default App
