
export default function PaginaInicial() {
    return (
        <main>
            <figure>
                <img src={"images/fotoPerfil.jpg"} alt={"Foto de perfil"} className={"perfil-foto"}/>
            </figure>
            <h1 className={"perfil-nome"}>Marcos Lopes</h1>
            <p className={"perfil-descricao"}>Técnico em Informática para Internet! 💻</p>
            <article className={"perfil-links-article display-flex-center"}>
                <a className={"perfil-links-article-a"}
                   href={"https://www.linkedin.com/in/marcosalveslopesjunior"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons display-flex-center-justify-between"}>
                        <img src={"images/linkedin.svg"} alt={"LinkedIn icon"}></img>
                        <p className={"perfil-links-article-a-buttons-p"}>LinkedIn</p>
                        <img src={"images/external-link.svg"} alt={"External link icon"}></img>
                    </div>
                </a>
                <a className={"perfil-links-article-a"}
                   href={"https://github.com/MarcosAlves90"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons display-flex-center-justify-between"}>
                        <img src={"images/github.svg"} alt={"GitHub icon"}></img>
                        <p className={"perfil-links-article-a-buttons-p"}>GitHub</p>
                        <img src={"images/external-link.svg"} alt={"External link icon"}></img>
                    </div>
                </a>
                <a className={"perfil-links-article-a"}
                   href={"https://x.com/yellowpinguim"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons display-flex-center-justify-between"}>
                        <img src={"images/twitter-x.svg"} alt={"Twitter icon"}></img>
                        <p className={"perfil-links-article-a-buttons-p"}>X (Twitter)</p>
                        <img src={"images/external-link.svg"} alt={"External link icon"}></img>
                    </div>
                </a>
                <a className={"perfil-links-article-a"}
                   href={"https://bsky.app/profile/yellowpinguim.bsky.social"} target={"_blank"}>
                    <div className={"perfil-links-article-a-buttons display-flex-center-justify-between"}>
                        <img src={"images/bluesky.svg"} alt={"Bluesky icon"}></img>
                        <p className={"perfil-links-article-a-buttons-p"}>Bluesky</p>
                        <img src={"images/external-link.svg"} alt={"External link icon"}></img>
                    </div>
                </a>
            </article>
            <article className={"perfil-icons-article display-flex-center"}>
                <a href={"mailto:MarcosAlves25@proton.me"} className={"display-flex-center"}>
                    <img src={"images/email.svg"} alt={"Email icon"}></img>
                </a>
            </article>
        </main>
    )
}