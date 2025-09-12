import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  FileText, 
  Users, 
  Calculator, 
  HeadphonesIcon, 
  TrendingUp,
  DollarSign,
  GraduationCap,
  Briefcase,
  Copyright
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Abertura e Legalização de Empresas",
      description: "MEI, Simples Nacional, Lucro Presumido - Todo o processo de abertura da sua empresa de forma rápida e digital.",
      features: ["Abertura de MEI", "Simples Nacional", "Lucro Presumido", "Documentação completa"]
    },
    {
      icon: FileText,
      title: "Regularização de CNPJs",
      description: "Regularização de empresas inativas e solução de pendências fiscais com total segurança.",
      features: ["Reativação de CNPJ", "Solução de pendências", "Regularização fiscal", "Consultoria especializada"]
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Gestão completa da folha de pagamento e encargos trabalhistas com precisão e pontualidade.",
      features: ["Cálculo de salários", "Encargos trabalhistas", "eSocial", "Relatórios detalhados"]
    },
    {
      icon: Calculator,
      title: "Imposto de Renda",
      description: "Declaração de Imposto de Renda Pessoa Física e Jurídica com máxima restituição legal.",
      features: ["IRPF completa", "IRPJ empresarial", "Planejamento tributário", "Revisão de malha fina"]
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Contábil Online",
      description: "Atendimento personalizado e suporte contábil e fiscal totalmente online quando você precisar.",
      features: ["Atendimento digital", "Suporte fiscal", "Consultoria online", "Resposta rápida"]
    },
    {
      icon: TrendingUp,
      title: "Consultoria e Apoio ao Negócio",
      description: "Consultoria estratégica para crescimento do seu negócio com análises e orientações personalizadas.",
      features: ["Análise financeira", "Estratégia de crescimento", "Orientação empresarial", "Planejamento"]
    },
    {
      icon: DollarSign,
      title: "Consultoria Financeira",
      description: "Consultoria financeira personalizada para otimizar a gestão financeira do seu negócio.",
      features: ["Planejamento financeiro", "Fluxo de caixa", "Análise de custos", "Projeções"]
    },
    {
      icon: GraduationCap,
      title: "Treinamentos e Aulas",
      description: "Treinamentos e aulas especializadas para MEIs e pequenos negócios dominarem a gestão.",
      features: ["Curso para MEI", "Gestão financeira", "Obrigações fiscais", "Certificado"]
    },
    {
      icon: Briefcase,
      title: "BPO Financeiro",
      description: "Terceirização completa do seu departamento financeiro com profissionais especializados.",
      features: ["Gestão financeira completa", "Controle de contas", "Relatórios gerenciais", "Acompanhamento"]
    },
    {
      icon: Copyright,
      title: "Registro de Marca",
      description: "Proteção da sua marca no INPI com todo o acompanhamento do processo de registro.",
      features: ["Pesquisa de marca", "Registro no INPI", "Acompanhamento processual", "Certificado"]
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Soluções completas em contabilidade digital para impulsionar o seu negócio com 
            segurança, agilidade e excelência no atendimento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-hover border-0 shadow-md h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary font-semibold leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
            Pronto para Transformar seu Negócio?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ser o parceiro ideal 
            para o crescimento da sua empresa.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <a href="https://wa.me/5563991152909?text=Olá! Gostaria de conhecer melhor os serviços da Fattus Contabilidade Digital.">
              Solicitar Orçamento Gratuito
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;