import { motion } from 'motion/react';
import { Target, Users, BookOpen, MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      {/* Header */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Profil KWT Melati
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto italic"
          >
            "Berdaya di Tanah Sendiri, Mandiri untuk Negeri."
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 text-brand-ochre mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-sm">Sejarah Kami</span>
            </div>
            <h2 className="text-4xl font-serif mb-8 leading-tight">Berawal dari Tekad untuk Memajukan Desa</h2>
            <div className="space-y-6 text-brand-brown/80 leading-relaxed text-lg">
              <p>
                KWT Melati berdiri pada tahun 2015 di Kampung Sorgum, sebuah desa yang awalnya kesulitan dalam hal ketersediaan air untuk pertanian padi konvensional. 
                Sorgum hadir sebagai jawaban atas tantangan geografis desa kami.
              </p>
              <p>
                Dimulai oleh sekelompok ibu rumah tangga yang ingin menambah penghasilan keluarga, kami mulai bereksperimen dengan olahan sorgum yang kala itu belum populer. 
                Kini, KWT Melati telah menjadi pionir dalam produksi pangan berbasis sorgum di Indonesia.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
              alt="Sejarah 1"
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c3023?auto=format&fit=crop&q=80&w=800"
              alt="Sejarah 2"
              className="rounded-2xl h-64 w-full object-cover shadow-lg translate-y-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-4">Visi & Misi</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-brand-green/5 relative group hover:shadow-xl transition-shadow duration-500">
              <div className="absolute top-0 right-0 p-8">
                <Target className="w-16 h-16 text-brand-green/10 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-serif mb-6 text-brand-green">Visi</h3>
              <p className="text-xl font-serif italic leading-relaxed text-brand-brown">
                "Menjadi pusat unggulan pengolahan sorgum terpadu yang memberdayakan perempuan desa untuk mewujudkan kedaulatan pangan nasional."
              </p>
            </div>

            <div className="bg-brand-green p-12 rounded-[2rem] shadow-sm text-white relative">
              <h3 className="text-2xl font-serif mb-6 text-brand-ochre">Misi</h3>
              <ul className="space-y-4 text-white/80">
                {[
                  'Meningkatkan keterampilan ibu-ibu petani dalam teknologi pengolahan pangan modern.',
                  'Menjamin kualitas produk sorgum yang sehat, organik, dan berkelanjutan.',
                  'Memperluas akses pasar produk lokal ke skala nasional dan internasional.',
                  'Mengedukasi masyarakat tentang manfaat gizi dan ekonomi tanaman sorgum.'
                ].map((misi, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-20">Struktur Pengurus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { name: 'Ibu Siti Melati', role: 'Ketua KWT', img: 'https://images.unsplash.com/photo-1544005313-94ff95ec98f0?auto=format&fit=crop&q=80&w=400' },
            { name: 'Ibu Aminah', role: 'Sekretaris', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400' },
            { name: 'Ibu Fatimah', role: 'Bendahara', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
            { name: 'Ibu Rohani', role: 'Koordinator Produksi', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-square relative overflow-hidden rounded-full mb-6 max-w-[200px] mx-auto border-4 border-brand-cream group-hover:border-brand-green transition-colors duration-500">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-serif mb-1">{member.name}</h4>
              <p className="text-brand-green text-sm font-bold uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
