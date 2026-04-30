import { motion } from 'motion/react';
import { Calendar, User, ChevronRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const posts = [
    {
      id: 1,
      title: 'KWT Melati Raih Penghargaan Kelompok Tani Inovatif 2024',
      excerpt: 'KWT Melati mendapatkan apresiasi tinggi atas keberhasilannya mengolah limbah batang sorgum menjadi nira berkualitas tinggi.',
      date: '15 April 2024',
      author: 'Admin Melati',
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Peluncuran Produk Baru: Mie Kering Sorgum Non-MSG',
      excerpt: 'Menjawab permintaan pasar akan hidup sehat, kami meluncurkan varian mie kering berbahan dasar tepung sorgum alami.',
      date: '28 Maret 2024',
      author: 'Tim Produksi',
      img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Kunjungan Studi Banding dari Dinas Pertanian Provinsi',
      excerpt: 'Kampung Sorgum terpilih sebagai destinasi studi banding untuk mempelajari sistem pertanian berkelanjutan berbasis kearifan lokal.',
      date: '10 Februari 2024',
      author: 'Humas KWT',
      img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      title: 'Tips Memasak: Diversifikasi Pangan dengan Sorgum',
      excerpt: 'Cara mudah mengolah biji sorgum menjadi nasi yang pulen dan lezat untuk konsumsi harian keluarga Anda.',
      date: '02 Januari 2024',
      author: 'Dapur Melati',
      img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e835?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <div className="inline-flex items-center space-x-2 text-brand-ochre mb-4">
            <Newspaper className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-sm">Update Terbaru</span>
          </div>
          <h1 className="text-5xl font-serif leading-tight">Berita & Artikel</h1>
        </div>
        <p className="text-brand-brown/60 max-w-sm">
          Ikuti perkembangan terbaru dari Kampung Sorgum dan tips-tips bermanfaat seputar gaya hidup sehat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-video mb-8">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm">
                <Calendar className="w-3 h-3 text-brand-green" />
                <span className="text-[10px] font-bold text-brand-brown/70 tracking-widest uppercase">{post.date}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-green">
                <User className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">{post.author}</span>
            </div>

            <h2 className="text-3xl font-serif text-brand-brown mb-4 group-hover:text-brand-green transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="text-brand-brown/60 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <Link 
              to={`/berita`} 
              className="mt-auto flex items-center text-sm font-bold text-brand-brown group-hover:text-brand-ochre transition-colors"
            >
              Baca Selengkapnya
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-24 pt-12 border-t border-brand-green/10 flex justify-center space-x-2">
        {[1, 2, 3].map(n => (
          <button 
            key={n}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              n === 1 ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'text-brand-brown border border-brand-green/10 hover:bg-brand-cream'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
