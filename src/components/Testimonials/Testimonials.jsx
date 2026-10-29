import { Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  advogado,
  empresaria,
  coach,
  barbeiro,
  personal_trainer,
  nutricionista,
} from "../../assets/images";

/*
  Testimonials Component

  Responsável pela seção de prova social.

  Funções:
  - Apresenta avaliações de clientes.
  - Exibe nome, profissão e comentário.
  - Aumenta a confiança do visitante.
*/

const Testimonials = () => {
  const testimonials = [
    {
      name: "André Duarte",
      role: "Advogado",
      image: advogado,
      text: "A solução trouxe muito mais praticidade para minha rotina profissional. A interface é intuitiva, rápida e me permite organizar melhor minhas atividades sem perder tempo.",
    },
    {
      name: "Gabriel Soares",
      role: "Personal Trainer",
      image: personal_trainer,
      text: "A experiência tem sido excelente. A solução me ajuda a organizar melhor meu trabalho e ainda proporciona uma experiência muito mais profissional para meus alunos",
    },
    {
      name: "Fernanda Coutinho",
      role: "Nutricionista",
      image: nutricionista,
      text: "A plataforma facilitou bastante minha rotina. Consigo trabalhar de forma mais organizada e ter tudo o que preciso em um só lugar. Sem dúvida, uma ótima solução.",
    },
    {
      name: "Thiago Gusmão",
      role: "Barbeiro",
      image: barbeiro,
      text: "Gostei muito da praticidade. É fácil de usar, funciona muito bem no celular e me ajuda a manter tudo mais organizado durante o dia. Recomendo demais!",
    },
    {
      name: "Pedro Passos",
      role: "Coach",
      image: coach,
      text: "O que mais gostei foi a facilidade de uso. Tudo é muito simples e organizado, o que me permite focar no meu trabalho e oferecer uma experiência ainda melhor aos meus clientes.",
    },
    {
      name: "Luiza Barbosa",
      role: "Empresária",
      image: empresaria,
      text: "Desde que comecei a utilizar a solução, minha rotina ficou muito mais prática. O sistema é moderno, rápido e transmite a confiança que eu procurava para o meu negócio.",
    },
  ];
  return (
    <section id="testimonials" className="bg-slate-950 px-6 py-24 text-while">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-16 max-w 2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4x-l">
            Quem usou, aprovou !
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 ">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/50
              p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/50"
            >
              {/* Estrelas */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Depoimento */}
              <blockquote className="text-slate-300">
                {testimonial.text}
              </blockquote>

              {/* Cliente */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
