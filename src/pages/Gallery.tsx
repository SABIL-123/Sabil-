import { motion } from 'motion/react';
import { Camera, ZoomIn } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800', category: 'Lahan', title: 'Hamparan Lahan Sorgum' },
    { src: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?auto=format&fit=crop&q=80&w=800', category: 'Tanaman', title: 'Bulir Sorgum Matang' },
    { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800', category: 'Kegiatan', title: 'Ibu-ibu KWT Bermusyawarah' },
    { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800', category: 'Pasar', title: 'Pameran Produk Lokal' },
    { src: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?auto=format&fit=crop&q=80&w=800', category: 'Produk', title: 'Tepung Sorgum Organik' },
    { src: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800', category: 'Produk', title: 'Snack Sorgum Oven' },
    { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800', category: 'Lahan', title: 'Panen Raya 2023' },
    { src: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c3023?auto=format&fit=crop&q=80&w=800', category: 'Kegiatan', title: 'Pelatihan Inovasi Olahan' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-2 text-brand-green mb-4">
          <Camera className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-sm">Visual Story</span>
        </div>
        <h1 className="text-5xl font-serif mb-6">Galeri Kegiatan</h1>
        <p className="text-brand-brown/60 max-w-xl mx-auto">
          Momen keberlanjutan dan kebersamaan di Kampung Sorgum. Dari lahan hingga menjadi hidangan di meja Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative cursor-pointer overflow-hidden rounded-3xl aspect-square shadow-sm hover:shadow-2xl transition-all duration-500"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="text-brand-ochre text-[10px] font-bold uppercase tracking-widest">{img.category}</span>
                  <h3 className="text-white font-serif text-lg leading-tight mt-1">{img.title}</h3>
                </div>
                <div className="bg-brand-green p-3 rounded-full text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-brown/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl w-full"
          >
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full h-auto rounded-3xl object-contain max-h-[85vh]" 
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute -top-4 -right-4 bg-white text-brand-brown w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-ochre hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
