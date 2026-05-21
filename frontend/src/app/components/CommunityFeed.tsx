import { motion } from "motion/react";
import { MessageCircle, Heart, Share2, MoreHorizontal, User, Wand2, ImagePlus } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const posts = [
  {
    id: 1,
    user: "Maria Silva",
    handle: "@mariacozinha",
    avatar: "bg-[#E07A5F]",
    time: "2h",
    content: "Fiz o Omelete Rústico sugerido pela IA usando só o que tinha no fundo da gaveta! A dica de colocar o queijo minas ralado nos últimos 2 minutos salvou meu jantar. 🧀🍳",
    recipeRef: "Omelete Rústico de Abobrinha",
    likes: 124,
    comments: 12,
    image: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzY5NTczMDN8MA&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral",
    imageHeight: "h-64"
  },
  {
    id: 2,
    user: "João Pedro",
    handle: "@joaonacozinha",
    avatar: "bg-[#F2CC8F]",
    time: "5h",
    content: "Nunca pensei que aquele resto de feijão poderia virar um bolinho tão bom. A IA sugeriu empanar com farinha de mandioca.",
    recipeRef: "Bolinho de Feijão Mágico",
    likes: 89,
    comments: 34,
    image: "https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlZCUyMGJlYW5zfGVufDF8fHx8MTc3Njk1NzMwM3ww&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral",
    imageHeight: "h-96"
  },
  {
    id: 3,
    user: "Ana Costa",
    handle: "@anavegana",
    avatar: "bg-[#8C4B3A]",
    time: "1d",
    content: "O filtro vegano é perfeito! Consegui aproveitar umas cenouras murchas e transformei num patê delicioso usando a dica do liquidificador. Compartilhem suas variações!",
    recipeRef: "Patê de Cenoura Assada",
    likes: 256,
    comments: 45,
    image: "https://images.unsplash.com/photo-1615502732093-495f92575863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzY5NTYwNzR8MA&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral",
    imageHeight: "h-72"
  },
  {
    id: 4,
    user: "Carlos Oliveira",
    handle: "@carlos.chef",
    avatar: "bg-[#E07A5F]",
    time: "2d",
    content: "Sobrou arroz e não sabia o que fazer. A IA reinventou e fiz essa sobremesa divina! Incrível como pequenos detalhes mudam tudo.",
    recipeRef: "Arroz Doce com Especiarias",
    likes: 412,
    comments: 88,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0fGVufDF8fHx8MTc3Njk1NzMwM3ww&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral",
    imageHeight: "h-80"
  },
  {
    id: 5,
    user: "Luciana Martins",
    handle: "@lu_martins",
    avatar: "bg-[#F2CC8F]",
    time: "3d",
    content: "Alguém já tentou substituir a manteiga por azeite naquela receita de massa? O sabor ficou super diferente, mas eu adorei! A IA ajudou demais na proporção.",
    recipeRef: "Massa Cremosa 'De Ontem'",
    likes: 156,
    comments: 23,
    image: null
  }
];

export const CommunityFeed = () => {
  return (
    <div className="w-full min-h-screen bg-[#FEFAF0] text-[#8C4B3A] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-[#F2CC8F] px-6 py-2 rounded-full border-2 border-[#8C4B3A] shadow-[4px_4px_0px_#8C4B3A] mb-6"
          >
            <span className="font-title text-xl tracking-wider text-[#8C4B3A]">MURAL DE RECEITAS</span>
          </motion.div>
          <h1 className="font-title text-6xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#8C4B3A] to-[#E07A5F] drop-shadow-sm">
            COMUNIDADE GOURMET
          </h1>
          <p className="text-2xl opacity-80 max-w-2xl mx-auto font-medium">
            Inspire-se com pratos reais feitos por pessoas reais. Descubra como um ingrediente esquecido pode virar a estrela da noite.
          </p>
        </header>

        {/* Create Post Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white border-4 border-[#8C4B3A] rounded-3xl p-6 shadow-[8px_8px_0px_#E07A5F] mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2CC8F] rounded-full blur-[60px] opacity-40"></div>
          <div className="flex flex-col md:flex-row gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#E07A5F] flex items-center justify-center text-white shrink-0 border-4 border-[#8C4B3A] shadow-inner">
              <User size={32} />
            </div>
            <div className="flex-1">
              <textarea 
                placeholder="Qual obra-prima você inventou hoje?"
                className="w-full bg-[#FEFAF0]/80 border-2 border-dashed border-[#8C4B3A]/40 rounded-2xl p-5 text-xl resize-none focus:outline-none focus:border-[#8C4B3A] focus:bg-[#FEFAF0] transition-colors h-32"
              />
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                <button className="flex items-center gap-2 text-[#E07A5F] font-bold hover:text-[#8C4B3A] transition-colors px-4 py-2 rounded-xl hover:bg-[#E07A5F]/10">
                  <ImagePlus size={20} />
                  Adicionar Foto
                </button>
                <button className="w-full sm:w-auto px-8 py-3 bg-[#8C4B3A] text-white rounded-xl font-title text-xl hover:bg-[#E07A5F] transition-all shadow-[4px_4px_0px_#F2CC8F] hover:shadow-[2px_2px_0px_#F2CC8F] hover:translate-y-[2px] hover:translate-x-[2px]">
                  COMPARTILHAR
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feed Posts - Masonry Layout */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
          <Masonry gutter="24px">
            {posts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-4 border-[#8C4B3A] rounded-[2rem] p-5 shadow-[6px_6px_0px_#F2CC8F] hover:shadow-[8px_8px_0px_#E07A5F] hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="flex gap-3 items-center">
                    <div className={`w-12 h-12 rounded-full ${post.avatar} flex items-center justify-center text-white font-title text-xl border-2 border-[#8C4B3A]`}>
                      {post.user[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{post.user}</h3>
                      <span className="text-sm opacity-70 font-medium">{post.time}</span>
                    </div>
                  </div>
                  <button className="text-[#8C4B3A]/40 hover:text-[#8C4B3A] transition-colors p-2 hover:bg-[#F2CC8F]/20 rounded-full">
                    <MoreHorizontal />
                  </button>
                </div>

                {post.image && (
                  <div className={`mb-5 rounded-2xl overflow-hidden border-2 border-[#8C4B3A] ${post.imageHeight}`}>
                    <img src={post.image} alt="Post content" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}

                <div className="mb-5 text-lg leading-relaxed font-medium">
                  {post.content}
                </div>

                <div className="inline-flex items-center gap-2 bg-[#F2CC8F]/30 text-[#8C4B3A] px-4 py-2 rounded-xl text-sm font-bold border-2 border-[#8C4B3A]/20 mb-6 w-fit">
                  <Wand2 size={16} className="text-[#E07A5F]" /> 
                  <span className="truncate max-w-[200px]">{post.recipeRef}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t-2 border-dashed border-[#8C4B3A]/20 text-[#8C4B3A]/70 font-bold">
                  <button className="flex items-center gap-2 hover:text-[#E07A5F] transition-colors group px-3 py-2 rounded-lg hover:bg-[#E07A5F]/10">
                    <Heart size={20} className="group-hover:fill-[#E07A5F]" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#8C4B3A] transition-colors px-3 py-2 rounded-lg hover:bg-[#8C4B3A]/10">
                    <MessageCircle size={20} /> {post.comments}
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#8C4B3A] transition-colors px-3 py-2 rounded-lg hover:bg-[#8C4B3A]/10">
                    <Share2 size={20} />
                  </button>
                </div>
              </motion.article>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};
