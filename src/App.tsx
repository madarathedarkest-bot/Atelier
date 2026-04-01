/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Inbox, 
  PenTool, 
  Users, 
  PlusCircle, 
  Search, 
  Lock, 
  Key, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  Verified,
  History,
  Globe,
  Share2,
  Mail,
  Heart,
  MoreHorizontal,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from './lib/utils';
import { Screen, WATCHES, ACQUISITIONS, Watch } from './types';

// --- Components ---

const GlassCard = ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <div className={cn("glass-card rounded-[32px] p-8 shadow-2xl relative overflow-hidden", className)} {...props}>
    {children}
  </div>
);

const Sidebar = ({ currentScreen, setScreen }: { currentScreen: Screen; setScreen: (s: Screen) => void }) => (
  <nav className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col p-6 z-40 bg-neutral-900/60 backdrop-blur-[40px] h-[90vh] w-72 rounded-[32px] ml-4 my-auto shadow-[40px_0_80px_rgba(0,0,0,0.5)] transition-all duration-300">
    <div className="mb-12 px-4">
      <h1 className="text-lg font-black text-primary-container tracking-[0.1em] uppercase">L'ATELIER</h1>
      <div className="mt-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/30">
          <img 
            alt="The Curator" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCinq6gJThzOxDACoVQqe_VvqMrCKQ8OPdZKStLEOwgZbCwd01KsTXlddKqGHK-m34_1H72ayMU0YGMGpMc0dUMuWoZ6t62ZIFurXxdkRFzFBYd583VvNGhu7Wu6tAyCYT8gyPVToc2Mk-tf8bOiNBskNoEVOWa-VCHVHZSgoqGrmnuoVvYyfI9xvWyqD7warvmzruJclHowBQDmO--TUTYa5O7WgGKI_ur-lFfusuG82yuyx7BI_rsp5PTdZ3dNiciKYD9AjeCYZJ-" 
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary">The Curator</p>
          <p className="text-xs text-neutral-500 uppercase tracking-tighter">Lead Horologist</p>
        </div>
      </div>
    </div>
    
    <div className="flex-1 space-y-2">
      {[
        { id: 'dashboard', label: 'Analytics', icon: LayoutDashboard },
        { id: 'inventory', label: 'Vault Inventory', icon: Inbox },
        { id: 'bespoke', label: 'Bespoke Projects', icon: PenTool },
        { id: 'clients', label: 'Clients', icon: Users },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setScreen(item.id as Screen)}
          className={cn(
            "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold tracking-wide",
            currentScreen === item.id 
              ? "bg-primary-container/10 text-primary" 
              : "text-neutral-500 hover:bg-neutral-800/40 hover:text-primary"
          )}
        >
          <item.icon size={20} />
          {item.label}
        </button>
      ))}
    </div>

    <button className="mt-auto gold-gradient text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-sm tracking-wide">
      <PlusCircle size={18} />
      New Entry
    </button>
  </nav>
);

const TopNav = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <nav className="flex justify-between items-center px-6 md:px-8 py-3 md:py-4 z-50 bg-neutral-950/60 backdrop-blur-xl rounded-2xl md:rounded-[32px] mt-4 md:mt-6 mx-auto w-[92%] md:w-[95%] max-w-7xl sticky top-4 md:top-6 shadow-2xl border border-white/5">
    <button onClick={() => setScreen('landing')} className="text-xl md:text-2xl font-bold tracking-[0.1em] text-primary cursor-pointer">L'ATELIER</button>
    <div className="hidden md:flex items-center gap-8 tracking-[0.05em] text-sm uppercase font-medium">
      <button onClick={() => setScreen('inventory')} className="text-primary border-b border-primary/30 pb-1 hover:text-primary transition-colors cursor-pointer">Collections</button>
      <button onClick={() => setScreen('bespoke')} className="text-neutral-400 hover:text-primary transition-colors cursor-pointer">Bespoke</button>
      <button onClick={() => setScreen('heritage')} className="text-neutral-400 hover:text-primary transition-colors cursor-pointer">Heritage</button>
      <button onClick={() => setScreen('journal')} className="text-neutral-400 hover:text-primary transition-colors cursor-pointer">Journal</button>
    </div>
    <div className="flex items-center gap-6">
      <Search className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" size={20} />
      <button 
        onClick={() => setScreen('auth')}
        className="px-6 py-2 rounded-full border border-outline-variant/30 text-xs tracking-widest uppercase font-semibold hover:bg-surface-container transition-all cursor-pointer"
      >
        Login
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-[#0e0e0e] w-full pt-24 pb-12 flex flex-col items-center justify-center gap-12 px-20 border-t border-neutral-900">
    <div className="text-3xl font-light tracking-[0.2em] text-primary">L'ATELIER</div>
    <div className="flex flex-wrap justify-center gap-12 text-xs tracking-widest uppercase">
      <a className="text-neutral-600 hover:text-primary opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy</a>
      <a className="text-neutral-600 hover:text-primary opacity-80 hover:opacity-100 transition-opacity" href="#">Terms</a>
      <a className="text-neutral-600 hover:text-primary opacity-80 hover:opacity-100 transition-opacity" href="#">Boutiques</a>
      <a className="text-neutral-600 hover:text-primary opacity-80 hover:opacity-100 transition-opacity" href="#">Contact</a>
    </div>
    <div className="flex gap-6">
      <Share2 className="text-neutral-600 hover:text-primary cursor-pointer transition-colors" size={20} />
      <Globe className="text-neutral-600 hover:text-primary cursor-pointer transition-colors" size={20} />
      <Mail className="text-neutral-600 hover:text-primary cursor-pointer transition-colors" size={20} />
    </div>
    <div className="pt-12 border-t border-outline-variant/10 w-full max-w-4xl text-center">
      <p className="text-[10px] tracking-widest text-neutral-700 uppercase">© 2024 L'ATELIER HORLOGERIE. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

// --- Screens ---

const LandingScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <div className="min-h-screen">
    <TopNav setScreen={setScreen} />
    <section className="relative h-[110vh] -mt-20 md:-mt-32 flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYpDlb4VF9Lmgo3wrMNcdOTEm81ofJLbevzVfrPsS9EtRny86KTCXKGSLDpvu20DCrGXTQA_et5t48sXMxGXcDnHObUZ-Aj42GhQ1XQ8VumJGsTYyGtGZgB45fid5MFAQyAHy43Ll3_I3J4B1N5Pf9QTzjQ0hAoHf1TSViqIo0aC4K6PE8hLUw5-BHHW1-46MuiufHYCx-Wzd1zuLYQAN0-TF-yeukqhR1gBDbhWa2GCVW-c9OXb0s_rCEJKCUkNIUwePDqMpS0i6s" 
          alt="Luxury Watch Movement"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl bg-neutral-900/60 backdrop-blur-xl p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-[0_32px_64px_rgba(0,0,0,0.6)] border border-white/5"
        >
          <span className="inline-block text-primary tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 font-bold">The Digital Vault</span>
          <h1 className="text-4xl md:text-8xl font-extrabold leading-[1.1] mb-6 md:mb-8 tracking-tight">
            The Art of <span className="text-primary text-glow">Precision.</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-xl mb-8 md:mb-12 max-w-xl leading-relaxed">
            Crafting the intersection of mechanical excellence and timeless aesthetic. Welcome to the exclusive archive of horological masterpieces.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <button 
              onClick={() => setScreen('inventory')}
              className="w-full sm:w-auto bg-neutral-900/80 border border-primary/50 text-primary font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl text-xs md:text-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all shadow-lg shadow-primary/20 cursor-pointer text-glow"
            >
              Explore Vault
            </button>
            <button className="w-full sm:w-auto bg-surface-container-highest/40 backdrop-blur-xl text-on-surface font-bold px-8 md:px-10 py-4 md:py-5 rounded-xl text-xs md:text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all cursor-pointer">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

const AuthScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <div className="min-h-screen flex flex-col md:flex-row">
    <section className="hidden md:flex md:w-1/2 relative overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms] ease-out" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBxy4LUz2XFEchyxjWlxGaH8aizxW3PCKaJzMFh7XeKuBH-NOU1rMrLjGbByux56K2GpyfryFZsrfQQ5jYClFFQ2qWFOeeGaHMSCymOKbLXM4BhYnzvNfYsn8IiZI9a7-OXZTCdJOw-MOaFQsoHV6ysXXTMlw0LhlxibAb83EKppPo0wz5ieAgt9ZkbfDf5yHpymzUB9wgA4EY5inO0Ja3l18LUaqsbPW6YJgpBWhxrN9G4_4g9xNv8LyiUJlzCi92q8XDpr3Q0h0E" 
          alt="Macro Watch"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-surface/40 backdrop-blur-[40px] border-r border-white/5 flex flex-col justify-end p-20">
        <div className="max-w-md">
          <h2 className="text-5xl font-light tracking-[0.15em] text-primary mb-6 leading-tight uppercase">
            The Soul of Precision
          </h2>
          <p className="text-on-surface-variant font-light tracking-wide leading-relaxed text-lg">
            Welcome to L'ATELIER. Our vault houses the world's most intricate mechanical wonders. Authenticate your identity to manage your collection.
          </p>
        </div>
      </div>
    </section>
    <section className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-24 bg-surface-container-lowest">
      <div className="w-full max-w-md space-y-12">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-black tracking-[0.2em] text-primary">L'ATELIER</h1>
          <div className="flex items-center space-y-2 flex-col">
            <Lock className="text-primary" size={40} />
            <span className="text-xs tracking-[0.3em] uppercase text-on-surface-variant opacity-60">Secure Connection</span>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-[0.1em] text-on-surface text-center uppercase">Vault Identification</h2>
          <div className="bg-surface-container/40 backdrop-blur-[40px] p-8 rounded-lg shadow-2xl space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-4">Email Address</label>
                <input 
                  className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-neutral-600 focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="curator@latelier.com" 
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-4">Security Key</label>
                <input 
                  className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-neutral-600 focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="••••••••••••" 
                  type="password"
                />
              </div>
            </div>
            <button 
              onClick={() => setScreen('dashboard')}
              className="w-full bg-gold-gradient text-on-primary font-bold py-5 rounded-full tracking-widest uppercase text-sm hover:opacity-90 active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(242,202,80,0.5)]"
            >
              Member Access
            </button>
          </div>
          <div className="flex items-center gap-4 px-4">
            <div className="h-[1px] flex-grow bg-outline-variant opacity-20"></div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-on-surface-variant/40">OR</span>
            <div className="h-[1px] flex-grow bg-outline-variant opacity-20"></div>
          </div>
          <button className="w-full flex items-center justify-center gap-4 bg-surface-container-highest/20 hover:bg-surface-container-highest/40 text-on-surface py-5 rounded-full border border-primary/20 transition-all active:scale-95">
            <Key className="text-primary" size={20} />
            <span className="text-sm tracking-widest uppercase font-semibold">Guest Access</span>
          </button>
        </div>
        <div className="text-center pt-8">
          <button className="text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-1">
            Create Account
          </button>
        </div>
      </div>
    </section>
  </div>
);

const DashboardScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const chartData = [
    { name: 'JAN', rolex: 180, patek: 140 },
    { name: 'FEB', rolex: 170, patek: 150 },
    { name: 'MAR', rolex: 120, patek: 160 },
    { name: 'APR', rolex: 80, patek: 140 },
    { name: 'MAY', rolex: 100, patek: 130 },
    { name: 'JUN', rolex: 40, patek: 120 },
  ];

  return (
    <div className="flex-1 ml-80 p-10 overflow-y-auto h-screen relative">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Horology Control Centre</h2>
          <p className="text-on-surface-variant/70 tracking-widest uppercase text-xs">Administrative Overview • March 2024</p>
        </div>
        <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide uppercase">Vault System: SECURE</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Revenue Growth', value: '+24.8%', sub: 'VS PREVIOUS QUARTER', icon: TrendingUp, color: 'text-primary' },
          { label: 'Collector Retention', value: '92.4%', sub: 'Elite Tier Stability', icon: Users },
          { label: 'Bespoke Projects', value: '14', sub: '3 Near Completion', icon: PenTool, color: 'text-primary' },
          { label: 'Vault Security', value: 'L3-ALPHA', sub: 'Biometric Active', icon: ShieldCheck },
        ].map((stat, i) => (
          <GlassCard key={i} className="group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon size={48} />
            </div>
            <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-2 font-semibold">{stat.label}</p>
            <h3 className={cn("text-3xl font-bold", stat.color || "text-on-surface")}>{stat.value}</h3>
            <p className="text-[10px] text-on-surface-variant/40 mt-4 uppercase tracking-widest font-bold">{stat.sub}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
        <GlassCard className="lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xl font-bold tracking-tight">Market Valuation Trends</h4>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] bg-primary/10 text-primary border border-primary/20">ROLEX</span>
              <span className="px-3 py-1 rounded-full text-[10px] bg-on-surface-variant/10 text-on-surface-variant border border-on-surface-variant/20">PATEK</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f2ca50" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f2ca50" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#353535" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#99907c" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  dy={10}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f1f1f', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                  itemStyle={{ color: '#f2ca50' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="rolex" 
                  stroke="#f2ca50" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorGold)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h4 className="text-xl font-bold tracking-tight mb-8">High-Value Acquisitions</h4>
          <div className="space-y-6 overflow-y-auto pr-2 max-h-[350px]">
            {ACQUISITIONS.map((acq, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <img 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                  src={acq.image} 
                  alt={acq.name} 
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold">{acq.name}</p>
                  <p className="text-[10px] text-on-surface-variant tracking-wider uppercase">{acq.model}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{acq.value}</p>
                  <p className="text-[9px] text-on-surface-variant uppercase">{acq.time}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <section className="glass-card mb-24">
        <div className="flex justify-between items-center mb-10">
          <h4 className="text-xl font-bold tracking-tight">Vault Inventory Status</h4>
          <div className="flex gap-4">
            <button className="bg-surface-container-highest/50 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-surface-container-highest transition-colors">Filters</button>
            <button className="bg-surface-container-highest/50 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-surface-container-highest transition-colors">Export Report</button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/10">
                <th className="pb-6 text-xs uppercase tracking-[0.2em] font-semibold text-on-surface-variant">Timepiece</th>
                <th className="pb-6 text-xs uppercase tracking-[0.2em] font-semibold text-on-surface-variant">Reference</th>
                <th className="pb-6 text-xs uppercase tracking-[0.2em] font-semibold text-on-surface-variant text-center">Status</th>
                <th className="pb-6 text-xs uppercase tracking-[0.2em] font-semibold text-on-surface-variant text-right">Investment Value</th>
                <th className="pb-6 text-xs uppercase tracking-[0.2em] font-semibold text-on-surface-variant text-right">Market Δ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {WATCHES.map((watch) => (
                <tr 
                  key={watch.id} 
                  className="group hover:bg-on-surface-variant/[0.03] transition-colors cursor-pointer"
                  onClick={() => setScreen('detail')}
                >
                  <td className="py-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-neutral-800 rounded-lg overflow-hidden border border-outline-variant/20">
                      <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={watch.image} alt={watch.model} loading="lazy" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{watch.brand} {watch.model}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Masterpiece Edition</p>
                    </div>
                  </td>
                  <td className="py-6 text-sm font-medium font-mono text-on-surface-variant">{watch.reference}</td>
                  <td className="py-6 text-center">
                    <span className={cn(
                      "px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                      watch.status === 'In Stock' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                      watch.status === 'Reserved' ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                      "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    )}>
                      {watch.status}
                    </span>
                  </td>
                  <td className="py-6 text-right text-sm font-bold">{watch.value}</td>
                  <td className={cn(
                    "py-6 text-right text-sm font-medium font-mono",
                    watch.marketDelta.startsWith('+') ? "text-emerald-400" : "text-red-400"
                  )}>
                    {watch.marketDelta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <button className="fixed bottom-10 right-10 w-16 h-16 gold-gradient rounded-full shadow-2xl flex items-center justify-center text-on-primary hover:scale-110 active:scale-95 transition-all z-50 group">
        <PlusCircle size={32} />
        <span className="absolute right-20 bg-primary-container text-on-primary px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">New Collection</span>
      </button>
    </div>
  );
};

const InventoryScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMovements, setSelectedMovements] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleMovement = (movement: string) => {
    setSelectedMovements(prev => 
      prev.includes(movement) ? prev.filter(m => m !== movement) : [...prev, movement]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  const filteredWatches = WATCHES.filter(watch => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(watch.brand);
    const movementMatch = selectedMovements.length === 0 || selectedMovements.includes(watch.movement);
    const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(watch.material);
    return brandMatch && movementMatch && materialMatch;
  });

  return (
    <div className="min-h-screen">
      <TopNav setScreen={setScreen} />
      <main className="max-w-[1440px] mx-auto px-6 mt-12 flex gap-8">
        <aside className="w-72 hidden xl:flex flex-col gap-10 sticky top-32 h-[calc(100vh-160px)]">
          <section>
            <h3 className="text-primary-container text-sm font-semibold tracking-widest uppercase mb-6">Brand</h3>
            <div className="space-y-4">
              {['Rolex', 'Patek Philippe', 'Audemars Piguet'].map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="form-checkbox bg-surface-container-high border-none rounded focus:ring-primary text-primary cursor-pointer" 
                    type="checkbox"
                  />
                  <span className={cn(
                    "text-sm font-medium transition-colors",
                    selectedBrands.includes(brand) ? "text-primary" : "text-on-surface-variant group-hover:text-primary"
                  )}>
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-primary-container text-sm font-semibold tracking-widest uppercase mb-6">Movement</h3>
            <div className="flex flex-wrap gap-2">
              {['Automatic', 'Manual'].map((m) => (
                <button 
                  key={m}
                  onClick={() => toggleMovement(m)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                    selectedMovements.includes(m) 
                      ? "border-primary/50 bg-primary/10 text-primary" 
                      : "border-outline-variant/10 text-on-surface-variant hover:border-primary/40"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-primary-container text-sm font-semibold tracking-widest uppercase mb-6">Material</h3>
            <div className="space-y-3">
              {['Oystersteel', '18ct Yellow Gold', 'Platinum'].map((mat) => (
                <div 
                  key={mat} 
                  onClick={() => toggleMaterial(mat)}
                  className={cn(
                    "p-3 glass-card rounded-xl flex items-center justify-between transition-colors cursor-pointer group",
                    selectedMaterials.includes(mat) ? "border-primary/30 bg-primary/5" : "hover:bg-surface-container-highest"
                  )}
                >
                  <span className={cn("text-sm", selectedMaterials.includes(mat) ? "text-primary" : "text-on-surface")}>{mat}</span>
                  {selectedMaterials.includes(mat) ? <Verified size={18} className="text-primary" /> : <div className="w-[18px] h-[18px] rounded-full border border-outline" />}
                </div>
              ))}
            </div>
          </section>
          
          {(selectedBrands.length > 0 || selectedMovements.length > 0 || selectedMaterials.length > 0) && (
            <button 
              onClick={() => {
                setSelectedBrands([]);
                setSelectedMovements([]);
                setSelectedMaterials([]);
              }}
              className="text-xs text-primary hover:underline cursor-pointer uppercase tracking-widest font-bold"
            >
              Clear All Filters
            </button>
          )}
        </aside>

        <div className="flex-1 pb-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-outline mb-2 block">Curated Selection</span>
              <h1 className="text-4xl font-light tracking-[0.1em] text-on-surface">THE <span className="font-extrabold text-primary">VAULT</span> INVENTORY</h1>
            </div>
            <div className="text-right">
              <span className="text-xs text-outline block mb-1 uppercase tracking-widest">{filteredWatches.length} Timepieces Found</span>
              <button className="flex items-center gap-2 text-sm font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">
                New Arrivals <ArrowRight size={14} className="rotate-90" />
              </button>
            </div>
          </div>

          {filteredWatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWatches.map((watch) => (
                <motion.div 
                  key={watch.id}
                  whileHover={{ y: -8 }}
                  onClick={() => setScreen('detail')}
                  className="glass-card rounded-[24px] p-6 relative group cursor-pointer"
                >
                  <button className="absolute top-8 right-8 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md text-outline hover:text-primary transition-colors cursor-pointer">
                    <Heart size={20} />
                  </button>
                  <div className="aspect-square rounded-[16px] overflow-hidden mb-8 bg-surface-container-low">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={watch.image} alt={watch.model} loading="lazy" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-outline font-bold">{watch.brand}</p>
                        <h3 className="text-xl font-bold tracking-[0.05em] text-on-surface uppercase">{watch.model}</h3>
                      </div>
                      <Verified className="text-primary" size={20} />
                    </div>
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">
                      <span className="px-2 py-1 bg-surface-container-highest rounded">40mm</span>
                      <span className="px-2 py-1 bg-surface-container-highest rounded">{watch.material}</span>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-outline-variant/10">
                      <p className="text-2xl font-bold text-primary">{watch.value}</p>
                      <button className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface group-hover:text-primary flex items-center gap-2 cursor-pointer">
                        Reserve <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="h-[50vh] flex flex-col items-center justify-center text-center glass-card rounded-[32px]">
              <Search size={48} className="text-primary/20 mb-6" />
              <h3 className="text-2xl font-bold mb-2">No Timepieces Found</h3>
              <p className="text-on-surface-variant max-w-md">We couldn't find any watches matching your current filter selection. Try adjusting your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedMovements([]);
                  setSelectedMaterials([]);
                }}
                className="mt-8 px-8 py-3 bg-primary text-on-primary rounded-xl font-bold uppercase tracking-widest text-xs cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-xl gold-gradient text-on-primary font-black text-sm cursor-pointer">1</button>
              <button className="w-12 h-12 rounded-xl glass-card text-on-surface font-bold text-sm hover:border-primary/40 transition-colors cursor-pointer">2</button>
              <button className="w-12 h-12 rounded-xl glass-card text-on-surface font-bold text-sm hover:border-primary/40 transition-colors cursor-pointer">3</button>
              <span className="w-12 h-12 flex items-center justify-center text-outline">...</span>
              <button className="w-12 h-12 rounded-xl glass-card text-on-surface font-bold text-sm hover:border-primary/40 transition-colors cursor-pointer">12</button>
            </div>
            <button className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-outline hover:text-primary transition-colors cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DetailScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const [dialColor, setDialColor] = useState('Obsidian');
  const [material, setMaterial] = useState('Oystersteel');

  return (
    <div className="min-h-screen">
      <TopNav setScreen={setScreen} />
      <main className="max-w-[1600px] mx-auto px-4 md:px-12 mt-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="h-[80vh] overflow-hidden rounded-lg shadow-2xl bg-surface-container-lowest">
              <img 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbgbkzK2UJ2MuEVWfUjcx0g8lV-HnzKaa2PJ7coQh0kOwodHOWpyqNeIEScVEJqLKr4mYqV8zx3FKkHZSpfDKtb8aSTiI9Kf2aGfBg1w-1eltl_1nQ1jRKc8VmPQxBSL5X-y5bMrYAIImYi414ytjdl1arJUvcnSr4qL847dPYXQ_ZQ1uTuyIlHJXLgFrqAmAshln_qCVqojgvIrDxKKFzEeVVGgizGXJZjdu0_n_8njLAqeF7Ik6RC2ocyY7cw5qlxm1fLQJbK4mR" 
                alt="Nocturne Chronograph"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDwZcY4Ssv9Av0-WwtVi3MfVe3ZnA5YHcwscfDO6d9T5QM2LPUCq8QRkR58_IbhwXqdYnY57bNhjM-iOo6zcX40TshnCHt9TRUw7xyM97X5rTWt744xZaLDfq48mkI7u8xTRYSkCFNWkTBDl-GRP1rK4uW9MHo_cP2h9uzGEjnJ1ZBPAXGNe3UTP1Sb64FLfLOSiLpYYsDqN4zkykX7Sc0_E3mrBXb2vJo5mzhbOVTHdamutRApssk1nqnJ0_0D3sJ-bE_2GBH36EQv',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuC_WlUHtjZ21zHqElZYD6qrCBfTUov91E4NaeainjszMIwmiAkbX4cUYBlFGVM87kT91yNACBnKcUMijoxeDi4EvHZL-og7RbjSicmPyhha-yZTbdHkfcqJJRAbdS1CJg6vm0Gjcj7Y2_NCg6HKPoEVdWSxU3Cf1P9i6ghc9WGLUC0hoa0G9JPbkc84Hq2yl5pVgDL1fMIkCxznIVhuUBTpb2t_4ealPg84VZFnNNN6Lqsc30kpeRFQPtki9ImIoJ8Jk4cejYE3NuVo',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDtUjXQU4q6O9FN2Hznb5vC57UXgJiDcgJDzWZPmvc_Wnor5glzE8BBYcZ5_gX-wpdLL5B8D6DpT38yjcJP-Xf1j3OwLCnPgh7Jn1tHg3Tz00bDHBcJFW7M-cniudDz115RMcG-OgwQrumZ5GYn8Ve0YU77Z3I9icmlBplaprdkplwho44JukYFWU9B1Rd0UEDQH3PxvjFXAqTzaG6q8NUyFuZq8ZXuj92trEfyONtWB9bZzx7jdbY2YNv_ur5U3nhputbW7-2XfsXB'
              ].map((src, i) => (
                <div key={i} className="h-64 rounded-lg overflow-hidden bg-surface-container-lowest group">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={src} alt="Detail" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 glass-card p-10 rounded-xl border border-outline-variant/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Limited Edition</span>
                  <div className="h-[1px] w-12 bg-primary/30"></div>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-primary leading-tight mb-2">The Nocturne Chronograph</h1>
                <p className="text-on-surface-variant font-light tracking-wide text-lg">Masterpiece Ref. 2024-N-01</p>
              </div>
              <div className="mb-10">
                <p className="text-4xl font-bold text-primary tracking-tighter">CHF 145,000</p>
                <p className="text-on-surface-variant text-sm mt-1">Excl. VAT & Customs Duties</p>
              </div>
              <div className="space-y-8 mb-12">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline mb-4 block">Dial Color: <span className="text-primary">{dialColor}</span></label>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setDialColor('Obsidian')}
                      className={cn("w-10 h-10 rounded-full bg-neutral-900 border-2 transition-all", dialColor === 'Obsidian' ? "border-primary ring-offset-4 ring-offset-surface ring-1 ring-primary/20" : "border-outline/20")}
                    ></button>
                    <button 
                      onClick={() => setDialColor('Slate')}
                      className={cn("w-10 h-10 rounded-full bg-neutral-700 border-2 transition-all", dialColor === 'Slate' ? "border-primary ring-offset-4 ring-offset-surface ring-1 ring-primary/20" : "border-outline/20")}
                    ></button>
                    <button 
                      onClick={() => setDialColor('Champagne')}
                      className={cn("w-10 h-10 rounded-full bg-primary-container/20 border-2 transition-all", dialColor === 'Champagne' ? "border-primary ring-offset-4 ring-offset-surface ring-1 ring-primary/20" : "border-outline/20")}
                    ></button>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline mb-4 block">Bracelet Material: <span className="text-primary">{material}</span></label>
                  <div className="flex flex-wrap gap-3">
                    {['Oystersteel', 'Obsidian Leather', '18ct Rose Gold'].map((mat) => (
                      <button 
                        key={mat}
                        onClick={() => setMaterial(mat)}
                        className={cn(
                          "px-6 py-3 rounded-full text-sm font-medium border transition-all",
                          material === mat ? "bg-primary/10 border-primary text-primary" : "bg-surface-container-low border-outline/10 text-on-surface-variant hover:border-primary/40"
                        )}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-gold-gradient text-on-primary py-5 rounded-xl font-bold text-lg tracking-wide shadow-[0_0_30px_rgba(242,202,80,0.2)] hover:shadow-[0_0_50px_rgba(242,202,80,0.4)] transition-all active:scale-[0.98]">
                  Reserve Masterpiece
                </button>
                <button className="w-full bg-surface-container-high/40 backdrop-blur-xl border border-outline-variant/20 text-on-surface py-5 rounded-xl font-semibold tracking-wide hover:bg-surface-container-high transition-colors">
                  Enquire with a Specialist
                </button>
              </div>
              <div className="mt-8 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <Verified className="text-primary" size={16} />
                  <span className="text-xs text-on-surface-variant">Authenticated</span>
                </div>
                <div className="flex items-center gap-2">
                  <History className="text-primary" size={16} />
                  <span className="text-xs text-on-surface-variant">Lifetime Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-primary" size={16} />
                  <span className="text-xs text-on-surface-variant">Global Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {screen === 'landing' && <LandingScreen setScreen={setScreen} />}
          {screen === 'auth' && <AuthScreen setScreen={setScreen} />}
          {screen === 'dashboard' && (
            <div className="flex min-h-screen">
              <Sidebar currentScreen={screen} setScreen={setScreen} />
              <DashboardScreen setScreen={setScreen} />
            </div>
          )}
          {screen === 'inventory' && <InventoryScreen setScreen={setScreen} />}
          {screen === 'detail' && <DetailScreen setScreen={setScreen} />}
          {(screen === 'bespoke' || screen === 'heritage' || screen === 'journal' || screen === 'clients') && (
            <div className="flex min-h-screen">
              <Sidebar currentScreen={screen} setScreen={setScreen} />
              <div className="flex-1 ml-80 p-10 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4 uppercase tracking-widest text-primary">Coming Soon</h2>
                  <p className="text-on-surface-variant">This section of the vault is currently under curation.</p>
                  <button 
                    onClick={() => setScreen('landing')}
                    className="mt-8 px-8 py-3 bg-primary text-on-primary rounded-xl font-bold uppercase tracking-widest text-xs cursor-pointer"
                  >
                    Return to Atelier
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
