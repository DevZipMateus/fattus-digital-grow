import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import fattusLogo from '@/assets/fattus-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Abertura de Empresas',
    'Regularização de CNPJ',
    'Folha de Pagamento',
    'Imposto de Renda',
    'Consultoria Fiscal',
    'BPO Financeiro'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding border-b border-primary-foreground/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="inline-block bg-white p-4 rounded-2xl mb-4 shadow-md">
                  <img src={fattusLogo} alt="Fattus Contabilidade Digital" className="h-16 w-auto" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">
                  Fattus Contabilidade Digital
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Transformando a contabilidade em um aliado estratégico para pequenos negócios, 
                  autônomos e microempreendedores. Da abertura ao crescimento: sua jornada, nossa prioridade.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  <a href="https://wa.me/5563991152909" className="hover:text-accent transition-colors">
                    (63) 99115-2909
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  <a href="mailto:fattuscontabilidadedigital@gmail.com" className="hover:text-accent transition-colors">
                    fattuscontabilidadedigital@gmail.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-accent mt-1" />
                  <div>
                    <div>Rua Sabiá</div>
                    <div className="text-primary-foreground/70 text-sm">Atendimento 100% Digital</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-accent mt-1" />
                  <div>
                    <div>Segunda a Sexta</div>
                    <div className="text-primary-foreground/70 text-sm">09:00-11:00 / 15:00-17:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-accent">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-accent">
                Nossos Serviços
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-primary-foreground/80">
                    {service}
                  </li>
                ))}
              </ul>
              
              {/* Social Media */}
              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-accent">
                  Redes Sociais
                </h5>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/fattuscontdigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                    aria-label="Instagram Fattus"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/contadorajoanercerocha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                    aria-label="Instagram Contadora"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 px-4 md:px-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <div className="mb-4 md:mb-0">
              <p>
                © {currentYear} Fattus Contabilidade Digital LTDA. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                CNPJ: 58.136.634/0001-56
              </p>
            </div>
            <div className="text-center md:text-right">
              <p>
                Desenvolvido com ❤️ para empreendedores que fazem a diferença
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;