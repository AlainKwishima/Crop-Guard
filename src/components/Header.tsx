
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Guide', href: '/guide' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="cyber-glass border-b border-primary/30 sticky top-0 z-50 data-stream">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-all duration-300 group">
            <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-sm shadow-lg animate-pulse-cyber group-hover:animate-glow">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-black gradient-text text-cyber tracking-wider">
                CROPGUARD
              </h1>
              <p className="text-xs text-primary font-bold text-cyber">NEURAL INTELLIGENCE SYSTEM</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navigation.map((item) => (
                 <Link
                   key={item.name}
                   to={item.href}
                   className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 text-cyber hover:text-primary group ${
                     isActive(item.href)
                       ? 'text-primary'
                       : 'text-foreground hover:text-primary'
                   }`}
                 >
                   {item.name}
                   {isActive(item.href) && (
                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full animate-glow" />
                   )}
                   <div className="absolute inset-0 bg-primary/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-accent text-primary'
                      : 'text-foreground hover:bg-accent hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
