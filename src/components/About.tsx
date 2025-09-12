import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Lightbulb, Shield, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia e Suporte",
      description: "Entendemos as dores e os desafios de quem empreende e criamos soluções que atendem às suas necessidades."
    },
    {
      icon: Lightbulb,
      title: "Simplicidade e Clareza",
      description: "Tornamos a contabilidade acessível, descomplicando processos e linguagens."
    },
    {
      icon: Shield,
      title: "Transparência e Honestidade",
      description: "Mantemos uma comunicação aberta e ética em todas as interações."
    },
    {
      icon: Zap,
      title: "Inovação e Agilidade",
      description: "Investimos em tecnologia para oferecer serviços rápidos e eficientes."
    },
    {
      icon: Target,
      title: "Responsabilidade e Segurança",
      description: "Garantimos conformidade fiscal e tranquilidade para nossos clientes."
    },
    {
      icon: Users,
      title: "Compromisso com o Sucesso",
      description: "Celebramos cada conquista dos nossos clientes como se fosse nossa."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            Nossa História & Valores
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Uma jornada de dedicação desde 2013, transformando a contabilidade em aliado estratégico 
            para pequenos negócios, autônomos e microempreendedores.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A história da Fattus Contabilidade Digital é marcada por dedicação e um propósito claro: 
              transformar a contabilidade em um aliado estratégico para pequenos negócios, autônomos e 
              microempreendedores.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Desde nossos primeiros atendimentos, em agosto de 2013, até a fundação oficial do escritório 
              em fevereiro de 2023, enfrentamos desafios com resiliência e compromisso, sempre focados em 
              oferecer serviços contábeis que realmente fazem a diferença na vida dos nossos clientes.
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-6">
              Nossa Visão
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nossa missão é clara: facilitar a jornada empreendedora, oferecendo soluções digitalizadas 
              e personalizadas que simplificam a abertura e a gestão de CNPJs. Acreditamos que a 
              contabilidade deve ser uma ponte para o crescimento, e não um obstáculo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Guiados por nossa visão de ser a referência em contabilidade digital no Brasil, combinamos 
              expertise e inovação para transformar a forma como empreendedores lidam com suas finanças 
              e obrigações fiscais.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-hover border-0 shadow-md bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg text-primary mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-md">
          <blockquote className="font-playfair text-xl md:text-2xl text-primary italic">
            "A Fattus não é apenas um escritório contábil, mas um parceiro comprometido com o 
            sucesso de quem confia em nosso trabalho. Seguimos lado a lado com nossos clientes, 
            prontos para enfrentar desafios e celebrar vitórias."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;