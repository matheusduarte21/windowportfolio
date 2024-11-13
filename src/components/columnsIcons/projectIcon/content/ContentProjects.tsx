import imgEsteira from '../../../../assets/esteira.png'
import imgTopMovies from '../../../../assets/topMovies.png'
import imgFreelancer from '../../../../assets/freelancer.png'
import imgCrudAngularfrom from '../../../../assets/CrudAngular.png'
export const ContentProjects = () =>{
    return(
        <div>
            <h2>Meus Projetos</h2>
            
            <p>
                Nesta seção, apresento projetos que representam minha paixão e experiência na área de tecnologia.
            </p>

            <h3>Esteira CI/CD</h3>

             <img width='100%' alt='user' height='300px' src={imgEsteira}/>

            <p>
                Recentemente, desenvolvi um projeto para intensificar meus estudos em Kubernetes, criando uma esteira CI/CD completa. 

                Neste projeto, utilizei Docker para containerização, React para o front-end, e Nginx para servir a aplicação. Configurei o cluster na DigitalOcean, enquanto o gerenciamento do cluster é realizado com Kubernetes. 

                Essa configuração permite uma implantação automatizada e mais ágil, ideal para testar e expandir meus conhecimentos práticos.

               <div className="container-links-contents">
                  <p>link para o repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/matheusduarte21/testeCi">Repositório CI/CD</a></p>
               </div>

            </p>

            <h3>TopMovies</h3>

             <img width='100%'  alt='user' height='300px' src={imgTopMovies}/>

            <p>
                Recentemente, desenvolvi um projeto para me aprofundar em React, TypeScript e Vite. 

                A aplicação consome dados de uma API de filmes, e utilizei React para gerenciar toda a interface e o fluxo de dados. Foi uma ótima oportunidade para fortalecer meus conhecimentos e habilidades em desenvolvimento front-end!
                <div className="container-links-contents">
                    <p>
                        link para repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/matheusduarte21/topMovies-react">Repositório TopMovies </a>
                    </p>
                    <p>
                        Deploy: <a  target='_blank' rel="noreferrer" href="https://react-tmdb.netlify.app/">Clique para ver o Site</a> 
                    </p>
                </div>

            </p>

            <h3>Projeto Freelancer</h3>

             <img width='100%'  alt='user' height='300px' src={imgFreelancer}/>

            <p>
            Para a realização deste projeto, optei pelo uso do framework Angular, integrado ao BootStrap, CSS e TypeScript. Essa combinação de tecnologias foi escolhida cuidadosamente para desenvolver um front-end que não apenas atendesse às necessidades específicas do meu cliente, mas que também proporcionasse uma experiência de usuário fluida e agradável.

                 <div className='container-links-contents'>
                 <p>
                        link para repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/matheusduarte21/freelancer">Repositório Freelancer </a>
                  </p>
                  <p>
                        Deploy: <a  target='_blank' rel="noreferrer" href="https://guedesink.vercel.app/">Clique para ver o Site</a> 
                  </p>
                 </div>

            </p>

            <h3>Projeto Angular/Java</h3>

             <img width='100%'  alt='user' height='300px' src={imgCrudAngularfrom}/>

            <p>
                projeto que desenvolvi, utilizando as tecnologias Angular e Java. No backend, implementei operações CRUD (Create, Update e Delete) para permitir a integração com o sistema frontend. No lado do Java, contei com o framework Spring e utilizei o banco de dados MySQL.

                No frontend, explorei o Angular, TypeScript, CSS e BOOTSTRAP para criar uma interface amigável. Fiz requisições HTTP utilizando os métodos GET, PUT, POST e DELETE para interagir com o backend, permitindo a manipulação de dados.

                 <div className='container-links-contents'>
                    <p>
                        link para repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/matheusduarte21/Angular-Java-Project">Repositório Crud/Angular </a>
                    </p>
                 </div>

            </p>

            
        </div>
    )
}