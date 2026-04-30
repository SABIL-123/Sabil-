import { motion } from 'motion/react';
import { Leaf, ArrowRight, Star, ShoppingBag, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2000"
            alt="Sorghum Field"
            className="w-full h-full object-cover filter brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-ochre/20 text-brand-ochre text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-ochre/30"
            >
              <Leaf className="w-3 h-3" />
              <span>Warisan Pangan Berkelanjutan</span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.1]"
            >
              Kembali ke Akar, <br />
              Kuati <span className="text-brand-ochre italic">Masa Depan.</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 mb-10 leading-relaxed font-sans max-w-lg"
            >
              KWT Melati melestarikan potensi sorgum sebagai sumber pangan alternatif bergizi dan penggerak ekonomi Desa Kampung Sorgum.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/profil"
                className="px-8 py-4 bg-brand-green text-white font-medium rounded-full hover:bg-brand-green/90 transition-all flex items-center group"
              >
                Tentang Kami
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/galeri"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-all"
              >
                Lihat Galeri
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Luas Lahan', value: '50+ Ha', icon: <Leaf className="text-brand-green" /> },
              { label: 'Anggota KWT', value: '120+', icon: <Users className="text-brand-green" /> },
              { label: 'Produk Olahan', value: '15+', icon: <ShoppingBag className="text-brand-green" /> },
              { label: 'Tahun Berdiri', value: '2015', icon: <Star className="text-brand-green" /> },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl hover:bg-brand-cream transition-colors">
                <div className="inline-block p-3 bg-brand-cream rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-serif text-brand-brown mb-1">{stat.value}</div>
                <div className="text-sm text-brand-brown/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sorgum */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1000"
                alt="Sorghum Grain"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-ochre rounded-full z-0 flex items-center justify-center text-white font-serif text-xl p-4 text-center leading-tight rotate-12">
                Emas dari Desa
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif text-brand-brown mb-8 leading-tight">
                Mengapa <span className="text-brand-green italic">Sorgum?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Tahan Kekeringan',
                    desc: 'Sorgum adalah tanaman yang tangguh, mampu tumbuh subur di lahan kering dengan kebutuhan air yang minim.'
                  },
                  {
                    title: 'Bebas Gluten',
                    desc: 'Pilihan sehat bagi mereka yang sensitif terhadap gluten, kaya akan serat dan nutrisi esensial.'
                  },
                  {
                    title: 'Zero Waste',
                    desc: 'Seluruh bagian tanaman dapat dimanfaatkan—dari biji untuk pangan, batang untuk nira, hingga daun untuk pakan ternak.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-ochre/20 flex items-center justify-center text-brand-ochre font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-brand-brown/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-16">Produk Unggulan KWT Melati</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Tepung Sorgum', 
                img: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?auto=format&fit=crop&q=80&w=600',
                price: 'Rp 25.000'
              },
              { 
                name: 'Cookies Sorgum', 
                img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600',
                price: 'Rp 35.000'
              },
              { 
                name: 'Sorgum Pops (Rengginang)', 
                img: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600',
                price: 'Rp 20.000'
              }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-brand-green shadow-sm">
                    {product.price}
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                <p className="text-brand-brown/60 text-sm">Olahan higienis tanpa bahan pengawet.</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              to="/galeri"
              className="inline-flex items-center text-brand-green font-bold border-b-2 border-brand-green/30 pb-1 hover:border-brand-green transition-all"
            >
              Lihat koleksi lengkap
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
