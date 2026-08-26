import { motion } from "motion/react";
import { ArrowRight, ChefHat, Sparkles, Leaf, Wand2, Star, Clock } from "lucide-react";
import { Link } from "react-router";
import { AuthActionButton } from "./AuthActionButton";

export const LandingPage = () => {
  return (
    <div className="w-full text-[#8C4B3A]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-center max-w-5xl"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 border-4 border-[#8C4B3A] rounded-full bg-[#FEFAF0] text-lg font-bold text-[#E07A5F] shadow-[4px_4px_0px_#F2CC8F]"
          >
            <Sparkles size={20} />
            Sua cozinha, reinventada
          </motion.div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-title text-[#8C4B3A] drop-shadow-[4px_4px_0px_#F2CC8F] mb-6 leading-none tracking-tight">
            REINVENTA
            <br />
            <span className="text-[#E07A5F] drop-shadow-[4px_4px_0px_#8C4B3A]">GOURMET</span>
          </h1>
          <p className="mt-6 text-2xl md:text-3xl max-w-3xl text-[#8C4B3A] font-medium leading-relaxed bg-[#FEFAF0]/60 backdrop-blur-md p-6 rounded-3xl border-2 border-dashed border-[#8C4B3A]/30">
            Transforme ingredientes esquecidos na sua geladeira em receitas incríveis com o poder da Inteligência Artificial.
          </p>
          <div className="mt-12 group relative">
            <div className="absolute inset-0 bg-[#F2CC8F] rounded-2xl translate-x-2 translate-y-2 border-4 border-[#8C4B3A] transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <AuthActionButton
              to="/tool"
              className="relative flex items-center gap-4 px-10 py-5 bg-[#E07A5F] text-[#FEFAF0] rounded-2xl font-title text-3xl border-4 border-[#8C4B3A] transition-all"
            >
              <Wand2 size={32} />
              REINVENTE AGORA!
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={32} />
            </AuthActionButton>
          </div>
        </motion.div>

        {/* Decorative Floating Elements */}
        <motion.img
          src="https://images.unsplash.com/photo-1591724386284-9b0da01c379e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwZm9vZCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzY5NTYwNzB8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
          alt="Food Illustration"
          className="absolute top-10 -left-10 w-64 md:w-80 h-64 md:h-80 object-cover rounded-full opacity-40 mix-blend-multiply blur-[2px]"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 40, ease: "linear" }, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1615502732093-495f92575863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzY5NTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
          alt="Vegetables Illustration"
          className="absolute bottom-10 -right-10 w-72 md:w-96 h-72 md:h-96 object-cover rounded-full opacity-40 mix-blend-multiply blur-[2px]"
          animate={{ rotate: -360, y: [0, 20, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 50, ease: "linear" }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
        />
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-[#E07A5F] text-[#FEFAF0] border-y-8 border-[#8C4B3A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-title drop-shadow-[4px_4px_0px_#8C4B3A] mb-6 text-[#FEFAF0]">MAGIA NA COZINHA</h2>
            <p className="text-2xl font-medium max-w-2xl mx-auto opacity-90">
              Nossa Inteligência Artificial é a sua sous-chef pessoal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat size={48} />,
                title: "Receitas Únicas",
                desc: "Cruzamos milhares de possibilidades para criar pratos exclusivos com o que você já tem."
              },
              {
                icon: <Leaf size={48} />,
                title: "Para o seu Perfil",
                desc: "Filtros avançados para dietas veganas, sem glúten, restrições e preferências pessoais."
              },
              {
                icon: <Clock size={48} />,
                title: "Rápido & Fácil",
                desc: "Passo a passo simplificado, dicas de substituição na hora e aproveitamento total."
              }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#FEFAF0] text-[#8C4B3A] p-10 rounded-[2.5rem] border-4 border-[#8C4B3A] shadow-[8px_8px_0px_#8C4B3A] hover:-translate-y-2 transition-transform"
              >
                <div className="w-20 h-20 bg-[#F2CC8F] rounded-2xl flex items-center justify-center mb-8 border-2 border-[#8C4B3A] shadow-[4px_4px_0px_#E07A5F] text-[#E07A5F]">
                  {feat.icon}
                </div>
                <h3 className="font-title text-3xl mb-4">{feat.title}</h3>
                <p className="text-xl font-medium leading-relaxed opacity-80">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-[#F2CC8F] rounded-full blur-[100px] opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1665088127661-83aeff6104c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmdyZWRpZW50cyUyMGZyZXNofGVufDF8fHx8MTc3Njk1NzMzN3ww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral" 
              alt="Ingredientes Frescos" 
              className="relative z-10 w-full rounded-[3rem] border-4 border-[#8C4B3A] -rotate-3 shadow-[12px_12px_0px_#E07A5F] hover:rotate-0 transition-transform duration-500"
            />
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -right-8 top-12 z-20 bg-white border-4 border-[#8C4B3A] rounded-2xl p-4 shadow-[4px_4px_0px_#8C4B3A] flex items-center gap-3"
            >
              <Star className="text-[#F2CC8F] fill-[#F2CC8F]" size={28} />
              <span className="font-title text-xl text-[#8C4B3A] mt-1">Zero Desperdício!</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-6xl font-title mb-8 leading-tight">
              O FIM DA<br/>
              <span className="text-[#E07A5F]">GELADEIRA TRISTE</span>
            </h2>
            <div className="text-2xl space-y-6 font-medium leading-relaxed bg-white p-8 rounded-3xl border-4 border-[#8C4B3A] shadow-[8px_8px_0px_#F2CC8F]">
              <p>
                Sabe quando você tem só meia cebola, um ovo e um pedaço de queijo e pensa: <strong>"não tem nada pra comer"</strong>?
              </p>
              <p>
                O Reinventa Gourmet muda essa história. Adicione o que tem em casa e receba em segundos uma receita deliciosa, viável e que vai te surpreender.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODELO DE USO (HOW IT WORKS) */}
      <section className="py-32 px-6 bg-[#FEFAF0] border-t-4 border-dashed border-[#8C4B3A]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 bg-[#F2CC8F] border-2 border-[#8C4B3A] rounded-full text-[#8C4B3A] font-bold shadow-[2px_2px_0px_#8C4B3A]">
              PASSO A PASSO
            </div>
            <h2 className="text-5xl md:text-6xl font-title drop-shadow-[2px_2px_0px_#E07A5F]">COMO FUNCIONA?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-[#8C4B3A] -translate-y-1/2 opacity-20 border-y border-dashed border-[#8C4B3A]"></div>

            {[
              { step: "01", title: "O QUE TEM AÍ?", desc: "Abra a geladeira e liste os ingredientes no seu inventário virtual." },
              { step: "02", title: "A MÁGICA", desc: "A IA processa as combinações e adapta pro seu gosto e tempo." },
              { step: "03", title: "BOM APETITE", desc: "Siga o passo a passo fácil e compartilhe na nossa comunidade." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-white p-10 rounded-[2.5rem] border-4 border-[#8C4B3A] shadow-[8px_8px_0px_#E07A5F] flex flex-col items-center text-center z-10 group hover:-translate-y-2 transition-transform"
              >
                <div className="absolute -top-8 w-16 h-16 bg-[#8C4B3A] text-[#FEFAF0] rounded-2xl flex items-center justify-center font-title text-3xl shadow-[4px_4px_0px_#F2CC8F] group-hover:rotate-12 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-title text-3xl mb-4 mt-6 text-[#8C4B3A]">{item.title}</h3>
                <p className="text-xl font-medium opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 flex justify-center">
           <div className="group">
            <AuthActionButton
              to="/tool"
              className="relative px-12 py-6 bg-[#E07A5F] text-[#FEFAF0] rounded-2xl font-title text-3xl border-4 border-[#8C4B3A] shadow-[8px_8px_0px_#8C4B3A] hover:bg-[#F2CC8F] hover:text-[#8C4B3A] hover:shadow-[4px_4px_0px_#8C4B3A] hover:translate-y-1 hover:translate-x-1 transition-all flex items-center gap-4"
            >
              VAMOS COZINHAR! <ArrowRight size={32} />
            </AuthActionButton>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-[#8C4B3A] text-[#FEFAF0] py-16 px-6 border-t-8 border-[#E07A5F]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-title text-4xl text-[#F2CC8F] mb-2 drop-shadow-[2px_2px_0px_#E07A5F]">REINVENTA GOURMET</div>
            <p className="text-xl font-medium opacity-80">A cozinha acessível, criativa e sem dúvidas.</p>
          </div>
          <div className="flex gap-6 text-lg font-bold">
            <AuthActionButton
              to="/tool"
              className="hover:text-[#F2CC8F] transition-colors underline decoration-wavy"
            >
              Reinvente
            </AuthActionButton>
            <Link to="/community" className="hover:text-[#F2CC8F] transition-colors underline decoration-wavy">Comunidade</Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t-2 border-dashed border-[#FEFAF0]/20 text-center font-medium opacity-60">
          &copy; 2026 Reinventa Gourmet. Feito com amor e I.A.
        </div>
      </footer>
    </div>
  );
};
