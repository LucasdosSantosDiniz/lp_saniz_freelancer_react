import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Cta = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl 
          border border-fuchsia-500/30 bg-fuchsia-500/10
          px-6 py-16 text-center sm:px-12"
        >
          {/* Ícone */}
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-fuchsia-500/10">
            <Sparkles className="size-7 text-fuchsia-400" />
          </div>

          {/* Título */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto pra começar ?
          </h2>

          {/* Descrição */}
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Tenha acesso a uma solução moderna, rápida e profissional para
            transformar sua experiência.
          </p>

          {/* Botão */}
          <button
            className="mt-8 inline-flex cursor-pointer items-center
           gap-2 rounded-2xl bg-fuchsia-600 px-6 py-4 
           font-semibold text-while transition hover:bg-fuchsia-700"
          >
            Começar Agora
            <ArrowRight className="size-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
