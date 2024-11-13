import imagetechNews from '../../../../assets/techNews.png'
export const ContentStudent = () => {
    return (
        <div>
            <h2>Minhas Graduações</h2>
                <p>Atualmente, estou no penúltimo período do curso de Análise e Desenvolvimento de Sistemas (ADS) e me dedico ao estudo contínuo de programação com foco em desenvolvimento front-end usando React e outras linguagens.

                Sou apaixonado por tecnologia e tenho me dedicado intensamente a me aprimorar para conquistar meu espaço na área de tecnologia.</p>

                <h3 style={{marginBottom:'5px'}}>Projeto Desenvolvido na faculdade</h3>
                <div className="content-img-modal">
                    <img width='100%' height='300px' src={imagetechNews}/>
                </div>
                <p>
                projeto que eu fiz em conjunto com o meu grupo da faculdade, para a disciplina de desenvolvimento Web. A base do trabalho ela montar uma estrutura que aplicasse no front-end o JAVASCRIPT, HTML, CSS e o BOOTSTRAP, e no back-end usamos o PHP aliado ao MySQL para forma nosso banco de dados.
                </p>
        </div>
    )
}