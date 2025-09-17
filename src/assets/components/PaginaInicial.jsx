import { Linkedin, Github, Unlink2, Mail, Bookmark, BriefcaseBusiness } from 'lucide-react';
import styled from 'styled-components';

const Description = styled.div`
    position: relative;
    .lucide {
        position: absolute;
        top: -4px;
        right: 20px;
    }
`;

export default function PaginaInicial() {
    return (
        <main>
            <figure>
                <img src={"images/fotoPerfil.jpg"} alt={"Foto de perfil"} className={"perfil-foto"} />
            </figure>
            <h1 className={"perfil-nome"}>Marcos Lopes</h1>
            <p className={"perfil-descricao"}>Desenvolvedor Full-Stack! 💻</p>
            <article className={"perfil-links-article display-flex-center"}>
                <Description className="perfil-links-description">
                    <p>Ofereço serviços de design profissional, criando banners, posters, capas e
                        outros materiais visuais personalizados. Além disso, atuo como desenvolvedor
                        full stack, trabalhando no desenvolvimento e manutenção de sites, programas,
                        softwares e sistemas. Também tenho experiência com bancos de dados e
                        configuração de servidores.</p>
                    <Bookmark fill='white' />
                </Description>
                <a className={"perfil-links-article-a"}
                    href={"https://marcos-lopes-portfolio.vercel.app/"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons primary display-flex-center-justify-between"}>
                        <BriefcaseBusiness />
                        <p className={"perfil-links-article-a-buttons-p"}>Meu portfólio</p>
                        <Unlink2 />
                    </div>
                </a>
                <a className={"perfil-links-article-a"}
                    href={"https://www.linkedin.com/in/marcosalveslopesjunior"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons display-flex-center-justify-between"}>
                        <Linkedin/>
                        <p className={"perfil-links-article-a-buttons-p"}>LinkedIn</p>
                        <Unlink2 />
                    </div>
                </a>
                <a className={"perfil-links-article-a"}
                    href={"https://github.com/MarcosAlves90"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons display-flex-center-justify-between"}>
                        <Github/>
                        <p className={"perfil-links-article-a-buttons-p"}>GitHub</p>
                        <Unlink2 />
                    </div>
                </a>
                <a className={"perfil-links-article-a"}
                    href={"https://x.com/yellowpinguim"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons display-flex-center-justify-between"}>
                        <Twitter/>
                        <p className={"perfil-links-article-a-buttons-p"}>X (Twitter)</p>
                        <Unlink2 />
                    </div>
                </a>
            </article>
            <article className={"perfil-icons-article display-flex-center"}>
                <a href={"mailto:MarcosAlves25@proton.me"} className={"display-flex-center"}>
                    <Mail />
                </a>
            </article>
        </main>
    )
}