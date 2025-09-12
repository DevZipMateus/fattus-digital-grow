import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo S.",
      role: "Profissional Liberal",
      content: "O atendimento da Fattus é humano e rápido. Quando tenho dúvidas, consigo respostas claras e objetivas. Isso faz toda a diferença para eu tomar decisões sem medo de errar.",
      rating: 5
    },
    {
      name: "Mariana L.",
      role: "Salão de Beleza",
      content: "Eu estava perdida com impostos e burocracias. A Fattus entrou na minha vida e simplificou tudo. Hoje consigo cuidar do meu salão com mais tranquilidade, sabendo que minha contabilidade está em boas mãos.",
      rating: 5
    },
    {
      name: "Fernanda C.",
      role: "Restaurante Familiar",
      content: "Com a orientação da Fattus, consegui organizar melhor minhas finanças e separar as contas do negócio das pessoais. Isso mudou a forma como administro meu restaurante.",
      rating: 5
    },
    {
      name: "André M.",
      role: "Consultor de Marketing",
      content: "O que mais gosto na Fattus é a clareza. Não tem linguagem difícil, não tem enrolação. Eles explicam tudo de um jeito simples e me deixam seguro para crescer como empresário.",
      rating: 5
    }
  ];

  const stats = [
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "500+", label: "Empresas Abertas" },
    { number: "10+", label: "Anos de Experiência" },
    { number: "24h", label: "Resposta Média" }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-gradient-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A confiança dos nossos clientes é o nosso maior patrimônio. Veja o que eles falam sobre 
            nossa parceria e como transformamos a contabilidade em um aliado do crescimento.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-white relative">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-primary text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-accent font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="bg-primary text-primary-foreground border-0 shadow-xl">
            <CardContent className="p-12">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
                Seja o Próximo Caso de Sucesso!
              </h3>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Junte-se a centenas de empreendedores que já transformaram seus negócios 
                com a Fattus Contabilidade Digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5563991152909?text=Olá! Vi os depoimentos e gostaria de ser o próximo caso de sucesso da Fattus!"
                  className="btn-hero inline-flex items-center justify-center"
                >
                  Quero Ser o Próximo!
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;