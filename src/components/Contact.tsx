import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: "(63) 99115-2909",
      link: "https://wa.me/5563991152909",
      description: "Atendimento via WhatsApp"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "fattuscontabilidadedigital@gmail.com",
      link: "mailto:fattuscontabilidadedigital@gmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta",
      description: "09:00-11:00 / 15:00-17:00"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Sabiá",
      description: "Atendimento 100% digital"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram Fattus",
      url: "https://www.instagram.com/fattuscontdigital/",
      handle: "@fattuscontdigital"
    },
    {
      icon: Instagram,
      name: "Instagram Contadora",
      url: "https://www.instagram.com/contadorajoanercerocha",
      handle: "@contadorajoanercerocha"
    }
  ];

  const services = [
    "Abertura de Empresa (MEI, Simples Nacional, Lucro Presumido)",
    "Regularização de CNPJs e empresas inativas",
    "Folha de pagamento e encargos trabalhistas",
    "Declaração de Imposto de Renda (PF e PJ)",
    "Suporte contábil e fiscal online",
    "Consultoria e apoio ao negócio",
    "Consultoria financeira personalizada",
    "Treinamentos para MEIs e pequenos negócios",
    "BPO Financeiro",
    "Registro de Marca"
  ];

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Estamos prontos para ser o parceiro ideal na jornada do seu negócio. 
            Entre em contato conosco e descubra como podemos ajudar você a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="card-hover border-0 shadow-md">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-primary">
                            {info.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-lg font-semibold text-primary hover:text-accent transition-colors block mb-2"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-primary mb-2">
                          {info.content}
                        </div>
                      )}
                      <p className="text-muted-foreground">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-primary rounded-lg text-white hover:scale-105 transition-transform"
                    >
                      <Icon className="w-6 h-6" />
                      <div>
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-sm text-white/80">{social.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services Quick List */}
          <div>
            <Card className="bg-gradient-section border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary">
                  Principais Serviços
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="btn-hero w-full mt-6">
                  <a href="https://wa.me/5563991152909?text=Olá! Gostaria de saber mais sobre os serviços da Fattus Contabilidade Digital.">
                    Solicitar Atendimento
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <Card className="bg-gradient-hero text-white border-0 shadow-xl">
            <CardContent className="p-12">
              <h3 className="font-playfair text-2xl md:text-4xl font-bold mb-6">
                Pronto para Começar?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Da abertura ao crescimento, estamos aqui para ser o parceiro ideal na jornada do seu negócio. 
                Entre em contato agora mesmo e descubra como podemos transformar a contabilidade no seu aliado estratégico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
                  <a href="https://wa.me/5563991152909?text=Olá! Quero começar minha jornada empresarial com a Fattus!">
                    Iniciar Minha Jornada
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-hero-outline text-lg px-8 py-4">
                  <a href="mailto:fattuscontabilidadedigital@gmail.com">
                    Enviar E-mail
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;