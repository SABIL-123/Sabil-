import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      {/* Header */}
      <section className="bg-brand-ochre text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Hubungi Kami</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Punya pertanyaan seputar produk atau ingin melakukan pemesanan skala besar? Kami siap melayani Anda.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-brand-green/5">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-brand-cream rounded-2xl text-brand-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Alamat Kantor</h4>
                  <p className="text-sm text-brand-brown/60">Kampung Sorgum, Desa Melati</p>
                </div>
              </div>
              <p className="text-sm text-brand-brown/70 leading-relaxed">
                Jl. Kampung Sorgum No. 12, Kelurahan Melati, Kecamatan Alam Sari, Jawa Barat 40123
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-brand-green/5">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-brand-cream rounded-2xl text-brand-green">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Telepon / WhatsApp</h4>
                  <p className="text-sm text-brand-brown/60">Senin - Sabtu (08:00 - 17:00)</p>
                </div>
              </div>
              <p className="text-sm text-brand-brown/70 leading-relaxed font-bold">
                +62 812-3456-7890
              </p>
            </div>

            <div className="bg-brand-green p-8 rounded-[2rem] shadow-xl text-white">
              <h4 className="font-serif text-xl mb-6">Media Sosial</h4>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-white/10 rounded-xl hover:bg-brand-ochre transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-xs text-white/60">
                Ikuti keseharian kami di media sosial untuk promo menarik.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-12 rounded-[2.5rem] shadow-xl border border-brand-green/5">
            <h2 className="text-3xl font-serif mb-8 italic">Kirim Pesan</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-brand-green/10 p-12 rounded-3xl text-center"
              >
                <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-brand-green mb-2">Pesan Berhasil Dikirim!</h3>
                <p className="text-brand-brown/70">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/40 ml-1">Nama Lengkap</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Masukkan nama Anda"
                      className="w-full px-6 py-4 rounded-2xl bg-brand-cream/50 border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/40 ml-1">Alamat Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@contoh.com"
                      className="w-full px-6 py-4 rounded-2xl bg-brand-cream/50 border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/40 ml-1">Subjek</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-brand-cream/50 border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all">
                    <option>Informasi Produk</option>
                    <option>Pemesanan Grosir</option>
                    <option>Kunjungan Kampung Sorgum</option>
                    <option>Kerja Sama / Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-brown/40 ml-1">Pesan Anda</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="Tuliskan pesan Anda di sini..."
                    className="w-full px-6 py-4 rounded-2xl bg-brand-cream/50 border border-brand-green/10 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-brand-green text-white font-bold rounded-2xl hover:bg-brand-green/90 hover:shadow-lg transition-all flex items-center justify-center space-x-3 group"
                >
                  <span>Kirim Pesan Sekarang</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl h-96 relative border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Map View" 
            className="w-full h-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-brand-green/20 text-center animate-bounce">
              <MapPin className="w-10 h-10 text-brand-green mx-auto mb-2" />
              <p className="font-serif text-lg">Temukan Kami di Sini</p>
              <p className="text-xs text-brand-brown/40 uppercase tracking-widest font-bold">Kampung Sorgum</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
