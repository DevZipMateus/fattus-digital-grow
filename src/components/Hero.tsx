import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat bg-center bg-[length:60px_60px]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 text-center section-padding">
        <div className="container-custom">

          {/* Main Heading - Company Name */}
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Fattus Contabilidade Digital
          </h1>
          
          {/* Main Slogan */}
          <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gradient-accent">
              Sua jornada, nossa prioridade
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
            Contabilidade digital para pequenos negócios e microempreendedores.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
              <a href="https://wa.me/5563991152909?text=Olá! Quero abrir minha empresa com a Fattus Contabilidade Digital.">
                Abrir Minha Empresa
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-hero-outline text-lg px-8 py-4">
              <a href="#servicos">
                Conhecer Serviços
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/80">Digital e Seguro</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;