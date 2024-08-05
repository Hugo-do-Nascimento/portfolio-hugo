import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { 
  IconBrandGit, 
  IconBrandGithub, 
  IconSparkles, 
  IconArrowUpRight, 
  IconBrandHtml5, 
  IconBrandJavascript, 
  IconBrandCss3, 
  IconBrandReact, 
  IconBrandTailwind, 
  IconBrandFigma, 
  IconBrandNodejs,
  IconHeadphonesFilled,
  IconBeach,
  IconDeviceTv,
  IconCode,
  IconMapSearch 
} from '@tabler/icons-react'
import './App.css'
import { 
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter
} from './components/ui/card';
import { useNavigate } from 'react-router-dom'
import DesejoItens from "@/assets/Macbook_gray.png"  
import Foto from "@/assets/huguinho1.png";
import LogoCat from "@/assets/logoUnicap.png"
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'
import video1 from './assets/video_desejo_item.mp4'

function App() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("https://desejo-itens.vercel.app/");
  // }

  return (

    <Router>
      <div className=''>
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
        <div className='flex items-center my-8 gap-4'>
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
          <img className=' rounded-full w-[350px] h-[350px]' src={Foto} />
        </div>
      </section>

      {/* Sessão sobre mim  */}
      <section className=' flex p-16 flex-col items-center gap-[10px] self-stretch bg-[#EAF2FD] w-full my-8'>
        <div className='flex flex-col items-start gap-4 text-start'>
          <h3 className=' font-semibold text-secondary text-3xl'>Sobre mim</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia. Aenean sit amet felis venenatis, egestas metus vitae, aliquet metus.</p>
          {/* assinatura aqui */}
        </div>
      </section>

      {/* Sessão Skills/Habilidades  */}
      <section>
        <div id='skills' className='gap-6'>
          <h3 className=' font-semibold text-secondary text-3xl mb-8'>Skills</h3>
            <div className='flex flex-wrap grid-cols-4 gap-6 justify-center'>
              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandHtml5 className=' text-[#E34F26] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>HTML 5</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandCss3 className=' text-[#1572B6] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>CSS</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandJavascript className=' text-[#F7DF1E] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>JavaScript</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandReact className=' text-[#61DAFB] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>React</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandTailwind className=' text-[#06B6D4] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>Tailwind</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandNodejs className=' text-[#339933] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>Node.js</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandGit className=' text-[#F05032] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>Git</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandGithub className=' text-[#181717] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>GitHub</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBrandFigma className=' text-[#A259FF] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>Figma</p>
                </CardFooter>
              </Card>
            </div>
        </div>
      </section>

      {/* Sessão de Hobbies  */}
      <section>
        <div id='hobbies'>
          <h3 className=' font-semibold text-secondary text-3xl my-8'>Hobbies</h3>
          <div className='flex grid-cols-4 gap-6 justify-center '>
              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconHeadphonesFilled className=' text-[] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>Ouvir Músicas</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconBeach className=' text-[] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary text-start'>Viajar com a Família</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconDeviceTv className=' text-[] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary text-start'>Assitir Filmes/Séries</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconCode className=' text-[] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary'>Programação</p>
                </CardFooter>
              </Card>

              <Card className='w-44'>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <IconMapSearch className=' text-[] w-10 h-10' />
                </CardContent>
                <CardFooter>
                  <p className=' text-base font-bold text-secondary text-start'>Conhecer Novos Lugares</p>
                </CardFooter>
              </Card>
          </div>
        </div>
      </section>

      {/* Sessão de Historico Academico  */}
      <section>
        <div id='formacoes'>
          <h2 className=' font-semibold text-secondary text-3xl my-8'>Formação Acadêmica</h2>
          <div>
            <div className='flex flex-col items-start gap-4'>
              <Card className='p-4'>
                <CardContent>
                  <img src={LogoCat} alt="Logo Unicap" />
                </CardContent>
              </Card>
              <div  className=' text-start'>
                <h2 className=' font-bold text-xl'>Sistemas Para Internet</h2>
                <CardDescription className=' font-medium text-base'>Em andamento - Unicap</CardDescription>
              </div>
            </div>
          </div>
        </div>  
      </section>

      {/* Sessão de Experiência Profissional/Projetos  */}
      <section>
        <div id='experiencia'>
          <h2 className=' font-semibold text-secondary text-3xl my-8'>Experiência Profissional/Projetos</h2>
          {/* <div>
            Imagemm do projeto
            <div>
              <h2>Protege Recife</h2>
              <h3>Projeto Integrador III - Unicap</h3>
              <div>
                <span><a href=""><button>Repositório</button></a></span>
                <span><a href=""><button>Ver demo</button></a></span>
              </div>
            </div>
          </div> */}

          <div className=' flex gap-8'>
            <video width={"50%"} height={"100%"} src={video1} autoPlay loop />
            <div className='flex flex-col justify-center text-start'>
              <h1 className=' font-semibold text-secondary text-2xl'>Desejo Itens</h1>
              <h3 className=''>Uma ferramenta para gerenciar pordutos que você deseja comprar. Adicione e remova itens facilmente. Desenvolvido com HTML, CSS, Javascript, Node.js e Baserow.</h3>
              <div className='flex flex-row gap-4'>
                <Button variant="outline" className="w-[50%]">Repositório</Button>
                <Button className="w-[50%]">Ver Demo</Button>
              </div>
            </div>
          </div>
        </div> 
      </section>
       

      {/* Sessão de contato  */}
      <section className='mt-8 bg-[#EAF2FD] p-16'>
        <div id='contato'>
          <div>
            <Card className="w-1/2 mt-8">
              <CardHeader className="text-start">
                <CardTitle className="mb-4">Contato</CardTitle>
                <CardDescription>Quer entrar em contato comigo?</CardDescription>
                <CardDescription>Preencha o formulário abaixo, e entrarei em contato o mais rápido possível.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5 text-start">
                      <Label htmlFor="name">Nome</Label>
                      <Input type="text" id="name" placeholder="Nome" />
                    </div>
                    <div className="flex flex-col space-y-1.5 text-start">
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col space-y-1.5 text-start">
                      <Label htmlFor="assunto">Assunto</Label>
                      <Input type="text" id="assunto" placeholder="Assunto" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Textarea id="mensagem" placeholder="Sua mensagem" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Enviar Mensagem</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <footer className='p-8 flex justify-center items-center gap-[10px] text-base font-medium'>
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
