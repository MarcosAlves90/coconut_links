import { Mail } from 'lucide-react';
import LinksProfissionais from './LinksProfissionais';

export default function PaginaInicial() {
    return (
        <main className="flex items-center justify-center flex-col space-y-7">
            <header className="flex items-center flex-col space-y-3" role="banner">
                <figure>
                    <img
                        src="https://res.cloudinary.com/dgsywmzb2/image/upload/v1758162259/fotoPerfil_e0h0q7.jpg"
                        alt="Foto de perfil de Marcos"
                        className="rounded-full aspect-square w-[100px]"
                        width={100}
                        height={100}
                    />
                </figure>
                <div className="space-y-2 text-center">
                    <h1 className="text-xl font-bold">marcos ✦</h1>
                    <p className="text-secondary">Desenvolvedor Full-Stack!</p>
                </div>
            </header>

            <section className="flex items-center justify-center max-w-[600px] flex-col" aria-labelledby="sobre-mim">
                <LinksProfissionais />
            </section>

            <footer className="perfil-icons-article display-flex-center" role="contentinfo">
                <a
                    href="mailto:MarcosAlves25@proton.me"
                    className="display-flex-center"
                    aria-label="Enviar e-mail para Marcos"
                >
                    <Mail />
                </a>
            </footer>
        </main>
    );
}