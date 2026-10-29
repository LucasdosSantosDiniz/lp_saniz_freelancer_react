import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";
/*
  Hero Component

  Responsável pela primeira seção da página.

  Funções:
  - Apresenta a proposta principal da empresa.
  - Exibe título, descrição e chamadas para ação.
  - Aplica animações de entrada.
  - Apresenta o destaque visual principal da landing page.
*/
const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Conteúdo principal */}
          <div>
            <motion.h1
              className="text-5xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Acelere sua presença online com uma landing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
                {" "}
                simples e eficaz
              </span>
            </motion.h1>
            <motion.p
              className="mt-4 text-slate-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tenha uma landing page moderna, rápida, responsiva e criada para
              destacar seu negócio, conquistar a atenção dos visitantes e
              transformar acessos em clientes. Design profissional, experiência
              otimizada e foco total em resultados.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#"
                className="inline-flex items-center 
              justify-center gap-2 rounded-2xl 
              bg-fuchsia-600 px-6 py-3 
              font-medium hover:bg-fuchsia-700 transition"
              >
                Comece Agora <ArrowRight className="size-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center 
              justify-center gap-2 rounded-2xl 
              px-6 py-3 font-medium 
              border border-white/10
              hover:bg-white/5 transition"
              >
                Ver Recursos
              </a>
            </motion.div>
            <motion.div
              className="mt-12 grid gap-4 sm:grid-cols-3 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {["Velocidade", "Segurança", "Conversão"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-3">
                    {i == 0 && <Zap className="size-5 text-emerald-400" />}
                    {i == 1 && <Shield className="size-5 text-sky-400" />}
                    {i == 2 && <Star className="size-5 text-amber-400" />}
                    <div className="font-semibold">{label}</div>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    {i === 0 &&
                      "Carregamento rápido para uma experiência fluida em qualquer dispositivo."}
                    {i === 1 &&
                      "Estrutura confiável para proteger seus dados e transmitir credibilidade."}
                    {i === 2 &&
                      "Design pensado para destacar sua oferta e transformar visitantes em clientes."}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Área visual */}
          <motion.div
            className="hidden items-center justify-center lg:flex"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="
              w-full max-w-lg overflow-hidden 
              rounded-2xl border border-white/10 
              bg-slate-900 shadow-2xl"
            >
              {/* Barra do navegador */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="size-3 rounded-full bg-red-400/70"></div>
                <div className="size-3 rounded-full bg-yellow-400/70"></div>
                <div className="size-3 rounded-full bg-green-400/70"></div>
                <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500">
                  www.saniz.com
                </div>
              </div>

              {/* Conteúdo do mockup */}
              <div className="p-6">
                {/* Pequeno destaque */}
                <div className="mb-6 h-3 w-24 rounded-full bg-fuchsia-500/30" />

                {/* Título */}
                <div className="space-y-2">
                  <div className="h-5 w-4/5 rounded bg-white/10"></div>
                  <div className="h-5 w-3/5 rounded bg-fuchsia-400/10"></div>
                </div>

                {/* Texto */}
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded bg-white/5"></div>
                  <div className="h-2 w-5/6 rounded bg-white/5"></div>
                  <div className="h-2 w-2/3 rounded bg-white/5"></div>
                </div>

                {/* Botão */}
                <div className="mt-6 h-9 w-28 rounded-lg bg-fuchsia-600/80" />

                {/* Cards */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]"></div>
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]"></div>
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.03]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
