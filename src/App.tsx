/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf, Phone, Home as HomeIcon, Info, Image as ImageIcon, Newspaper } from 'lucide-react';
import { useState, useEffect } from 'react';

// Pages
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import GalleryPage from './pages/Gallery';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'Profil', path: '/profil', icon: <Info className="w-4 h-4" /> },
    { name: 'Galeri', path: '/galeri', icon: <ImageIcon className="w-4 h-4" /> },
    { name: 'Berita', path: '/berita', icon: <Newspaper className="w-4 h-4" /> },
    { name: 'Hubungi Kami', path: '/kontak', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-brand-green" />
            <div className="flex flex-col">
              <span className="font-serif text-xl leading-none text-brand-green uppercase tracking-wider">KWT Melati</span>
              <span className="text-[10px] font-medium text-brand-ochre tracking-[0.2em] uppercase">Kampung Sorgum</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${
                  location.pathname === link.path ? 'text-brand-green' : 'text-brand-brown/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-green focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-green/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                    location.pathname === link.path ? 'bg-brand-green/10 text-brand-green' : 'text-brand-brown'
                  }`}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-brand-ochre" />
              <div className="flex flex-col">
                <span className="font-serif text-xl leading-none text-white uppercase tracking-wider">KWT Melati</span>
                <span className="text-[10px] font-medium text-brand-ochre tracking-[0.2em] uppercase">Kampung Sorgum</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Membangun kemandirian pangan dan ekonomi lokal melalui budidaya dan pengolahan kreatif tanaman sorgum yang berkelanjutan.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Navigasi</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-brand-ochre transition-colors">Beranda</Link></li>
              <li><Link to="/profil" className="hover:text-brand-ochre transition-colors">Profil</Link></li>
              <li><Link to="/galeri" className="hover:text-brand-ochre transition-colors">Galeri</Link></li>
              <li><Link to="/berita" className="hover:text-brand-ochre transition-colors">Berita</Link></li>
              <li><Link to="/kontak" className="hover:text-brand-ochre transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Kontak</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <span className="font-medium text-brand-ochre">Alamat:</span>
                <span>Jl. Kampung Sorgum No. 12, Kelurahan Melati, Jawa Barat</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="font-medium text-brand-ochre">WA:</span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="font-medium text-brand-ochre">Email:</span>
                <span>kwt.melati@sorgum.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} KWT Melati Sorgum & Kampung Sorgum. Tersemat dengan penuh keberlanjutan.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profil" element={<ProfilePage />} />
              <Route path="/galeri" element={<GalleryPage />} />
              <Route path="/berita" element={<NewsPage />} />
              <Route path="/kontak" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
