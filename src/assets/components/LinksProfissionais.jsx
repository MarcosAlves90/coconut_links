import { Linkedin, Github, Instagram, Unlink2, BriefcaseBusiness, Eye } from 'lucide-react';

export default function LinksProfissionais() {
    const links = [
        {
            href: 'https://marcos-lopes-portfolio.vercel.app/',
            label: 'Meu portfólio',
            Icon: BriefcaseBusiness,
            extraClass: 'first',
        },
        {
            href: 'https://www.linkedin.com/in/marcosalveslopesjunior',
            label: 'LinkedIn',
            Icon: Linkedin,
        },
        {
            href: 'https://github.com/MarcosAlves90',
            label: 'GitHub',
            Icon: Github,
        },
    ];

    return (
        <nav aria-label="Links profissionais" className="w-full">
            <ul className="flex flex-col w-full space-y-4 list-none p-0 m-0">
                {links.map(({ href, label, Icon, extraClass }) => (
                    <li key={href}>
                        <a
                            className="perfil-links-article-a"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={`perfil-links-article-a-buttons ${extraClass ?? ''}`}>
                                <Icon aria-hidden="true" />
                                <p className="perfil-links-article-a-buttons-p">{label}</p>
                                <Unlink2 aria-hidden="true" />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
