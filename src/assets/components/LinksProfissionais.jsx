import { Linkedin, Github, Instagram, Unlink2, BriefcaseBusiness, Eye, Bookmark } from 'lucide-react';
import PropTypes from 'prop-types';

// Dados de links mantidos fora do componente para evitar recriação em cada render
// Para descrições ricas (negrito, ênfase), usamos nodes React seguros em vez de HTML injetado
const LINKS = [
    {
        href: 'https://marcospilgrim.com.br',
        label: 'Meu portfólio',
        Icon: BriefcaseBusiness,
        description: (
            <>
                <strong>Design criativo</strong> e <strong>Desenvolvimento Full Stack</strong>. Crio artes visuais impactantes e desenvolvo sites, sistemas e apps sob medida.
            </>
        ),
        DescriptionIcon: Bookmark,
        srOnly: 'Sobre mim'
    },
    { href: 'https://www.linkedin.com/in/marcosalveslopesjunior', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://github.com/MarcosAlves90', label: 'GitHub', Icon: Github },
    { href: 'https://www.instagram.com/marcos.pilgrim', label: '@marcos.pilgrim', Icon: Instagram },
    { href: 'https://www.instagram.com/visaoakashica', label: '@visaoakashica', Icon: Eye },
];

/**
 * Item de link reutilizável
 * @param {{href: string, label: string, Icon: React.ComponentType, description?: import('react').ReactNode, DescriptionIcon?: React.ComponentType, srOnly?: string}} props
 */
function LinkItem({ href, label, Icon, description, DescriptionIcon, srOnly }) {
    return (
        <li role="listitem">
            {description && (
                <section aria-labelledby={`desc-${label.replace(/\s+/g, '-').toLowerCase()}`}>
                    <h3 id={`desc-${label.replace(/\s+/g, '-').toLowerCase()}`} className="sr-only">{srOnly}</h3>
                    <div
                        className="border-2 border-primary p-5 rounded-t-xl bg-primary/6 backdrop-blur-sm relative"
                        style={{ borderBottom: 'dashed 2px var(--color-primary)' }}
                    >
                        <p>{description}</p>
                        {DescriptionIcon && <DescriptionIcon className="absolute -top-1 right-5 fill-primary" aria-hidden="true" />}
                    </div>
                </section>
            )}

            <a className="perfil-links-article-a" href={href} target="_blank" rel="noopener noreferrer">
                <div className={`perfil-links-article-a-buttons ${description ? 'special' : ''}`}>
                    <Icon aria-hidden="true" />
                    <p className="perfil-links-article-a-buttons-p">{label}</p>
                    <Unlink2 aria-hidden="true" />
                </div>
            </a>
        </li>
    );
}

LinkItem.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
    description: PropTypes.node,
    DescriptionIcon: PropTypes.elementType,
    srOnly: PropTypes.string,
};

export default function LinksProfissionais() {
    return (
        <nav aria-label="Links profissionais" className="w-full">
            <ul role="list" className="flex flex-col w-full space-y-4 list-none p-0 m-0">
                {LINKS.map((link) => (
                    <LinkItem key={link.href} {...link} />
                ))}
            </ul>
        </nav>
    );
}
