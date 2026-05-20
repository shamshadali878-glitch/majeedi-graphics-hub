import { createFileRoute } from "@tanstack/react-router";
import {
  Palette, CreditCard, Flag, Lightbulb, Award, Printer, Heart, Sparkles,
  Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle2,
  Facebook, Instagram, Twitter, Menu, X,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-graphic.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Majeedi Graphics — Printing & Design Services" },
      { name: "description", content: "Majeedi Graphics offers professional logo design, printing, banners, signage, business cards & more. Quality designs at affordable prices." },
      { property: "og:title", content: "Majeedi Graphics — Printing & Design Services" },
      { property: "og:description", content: "Professional design & printing solutions — logos, banners, business cards, signage and more." },
    ],
  }),
  component: Index,
});

const PHONE = "+92 308 8865009";
const WHATSAPP = "923088865009";
const WA_MSG = encodeURIComponent("Hi Majeedi Graphics! I'm interested in your services. Please share more details.");
const WA_URL = `https://wa.me/${WHATSAPP}?text=${WA_MSG}`;

const services = [
  { icon: Palette, title: "Graphic Design & Logo", desc: "Stand out with unique, professional designs that make your brand memorable", items: ["Logo Creation", "Brand Identity", "Social Media Graphics"] },
  { icon: CreditCard, title: "Visiting Cards & Flyers", desc: "High-quality prints that impress your clients and boost your business", items: ["Business Cards", "Brochures & Flyers", "Letterheads"] },
  { icon: Flag, title: "Panaflex & Banners", desc: "Perfect for business promotions, events, and outdoor advertising", items: ["Panaflex Banners", "Standees & Billboards", "Flex Printing"] },
  { icon: Lightbulb, title: "LED & 3D Sign Boards", desc: "Make your shop or office visible day and night with stunning signage", items: ["LED Sign Boards", "3D Letter Boards", "Neon Signs"] },
  { icon: Award, title: "Shields & Awards", desc: "Premium finishing for schools, events, offices, and special occasions", items: ["Trophy Shields", "Award Plaques", "Acrylic Wall Logos"] },
  { icon: Printer, title: "Offset & Digital Printing", desc: "Reliable printing solutions for all your marketing and business needs", items: ["Offset Printing", "Digital Printing", "Large Format Prints"] },
  { icon: Heart, title: "Marriage Invitations", desc: "Beautiful custom wedding cards that make your special day even more memorable", items: ["Custom Wedding Cards", "Elegant Designs", "Premium Paper"] },
  { icon: Sparkles, title: "Neon Sign Boards", desc: "Eye-catching neon signs that make your brand glow and attract customers", items: ["Custom Neon Signs", "LED Neon Flex", "Acrylic Sign Boards"] },
];

const products = [
  { title: "Visiting Cards", tag: "Premium quality cards", img: "https://images.pexels.com/photos/269843/pexels-photo-269843.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Panaflex Banners", tag: "Outdoor advertising", img: "https://images.pexels.com/photos/3592657/pexels-photo-3592657.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "LED Sign Boards", tag: "Bright & visible signage", img: "https://images.pexels.com/photos/2482119/pexels-photo-2482119.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Brochures & Flyers", tag: "Professional marketing", img: "https://images.pexels.com/photos/7648305/pexels-photo-7648305.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Shields & Trophies", tag: "Premium awards", img: "https://images.pexels.com/photos/262481/pexels-photo-262481.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "3D Letter Boards", tag: "Stylish shop signage", img: "https://images.pexels.com/photos/9832393/pexels-photo-9832393.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const testimonials = [
  { name: "Ahmed Khan", role: "CEO, TechVentures", initials: "AK", quote: "Exceptional quality and service! Majeedi Graphics delivered our corporate branding materials on time with outstanding print quality. Highly recommended!" },
  { name: "Sara Malik", role: "Happy Customer", initials: "SM", quote: "We ordered wedding cards and the design team exceeded our expectations. Beautiful work, premium quality, and great attention to detail!" },
  { name: "Usman Iqbal", role: "Marketing Director", initials: "UI", quote: "Our go-to printing partner for all business needs. From visiting cards to banners, they always deliver excellence. Professional team!" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Majeedi Graphics" className="h-9 w-auto" />
            <span className="font-bold tracking-tight hidden sm:inline">Majeedi <span className="text-brand">Graphics</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-brand transition">{l.label}</a>
            ))}
          </nav>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-gradient-brand text-brand-foreground px-4 py-2 rounded-full text-sm font-semibold hover:shadow-glow transition">
            <MessageCircle className="w-4 h-4" /> Get Quote
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col gap-3">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-brand">{l.label}</a>
              ))}
              <a href={WA_URL} target="_blank" rel="noreferrer" className="bg-gradient-brand text-brand-foreground px-4 py-2 rounded-full text-sm font-semibold text-center">Get Quote</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.19_145/0.15),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 text-brand px-3 py-1 rounded-full text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Creative Design & Premium Printing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] mb-6">
              Designs That Speak<br />for <span className="text-gradient-brand">Your Brand</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Combining creativity, technology, and experience to deliver design and printing that truly makes an impact.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#services" className="inline-flex items-center gap-2 bg-gradient-brand text-brand-foreground px-6 py-3 rounded-full font-semibold hover:shadow-glow transition">
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#gallery" className="inline-flex items-center gap-2 border border-border bg-card/50 px-6 py-3 rounded-full font-semibold hover:border-brand transition">
                View Portfolio
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[["768+","Happy Clients"],["3840+","Projects Done"],["7+","Years Experience"]].map(([n,l]) => (
                <div key={l}>
                  <div className="text-2xl md:text-3xl font-bold text-brand">{n}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
            <img src={hero} alt="Majeedi Graphics — Graphic Design Services" width={1080} height={1080} className="relative w-full max-w-lg h-auto rounded-2xl shadow-card border border-border object-contain bg-white" />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand grid place-items-center text-brand-foreground"><Award className="w-5 h-5"/></div>
                <div>
                  <div className="text-sm font-semibold">Premium Quality</div>
                  <div className="text-xs text-muted-foreground">Trusted by 700+ brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Creative Design & Print Solutions Under One Roof</h2>
            <p className="text-muted-foreground mb-4">
              At <strong className="text-foreground">Majeedi Graphics</strong>, we combine creativity, technology, and experience to deliver design and printing that truly makes an impact. We make it easy for our customers to get quick, high-quality work at affordable prices.
            </p>
            <p className="text-muted-foreground mb-8">
              Our goal is simple — to help your brand look its best through creative, eye-catching designs and superior print quality.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Fast & Reliable","Quick service without compromising quality"],
                ["Professional Team","Years of experience in design & printing"],
                ["Affordable Prices","Best quality at competitive rates"],
                ["Free Consultation","Custom designs tailored to your needs"],
              ].map(([t,d]) => (
                <div key={t} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5"/>
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600" alt="Design" loading="lazy" className="rounded-2xl border border-border w-full h-64 object-cover"/>
              <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600" alt="Printing" loading="lazy" className="rounded-2xl border border-border w-full h-64 object-cover mt-8"/>
            </div>
            <div className="absolute -bottom-4 left-4 bg-gradient-brand text-brand-foreground rounded-xl px-5 py-3 shadow-glow">
              <div className="text-2xl font-bold">7+</div>
              <div className="text-xs">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground">Comprehensive printing and design solutions tailored to your needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group bg-card border border-border rounded-2xl p-6 hover:border-brand transition hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 grid place-items-center text-brand mb-4 group-hover:bg-gradient-brand group-hover:text-brand-foreground transition">
                    <Icon className="w-6 h-6"/>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.items.map(i => (
                      <li key={i} className="text-sm flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand"/>{i}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_URL} target="_blank" rel="noreferrer" className="text-brand text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Get Quote <ArrowRight className="w-4 h-4"/>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 3-Step Process</h2>
            <p className="text-muted-foreground">Getting your perfect print is easier than ever</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["01","Share Your Vision","Tell us about your project, share your ideas, and let us understand your requirements"],
              ["02","We Create Magic","Our expert designers craft your vision with precision and creativity"],
              ["03","Fast Delivery","Receive your premium quality products right at your doorstep"],
            ].map(([n,t,d]) => (
              <div key={n} className="relative bg-card border border-border rounded-2xl p-8">
                <div className="text-6xl font-extrabold text-gradient-brand mb-4 leading-none">{n}</div>
                <h3 className="text-xl font-bold mb-2">{t}</h3>
                <p className="text-muted-foreground text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Featured Products</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Products</h2>
            <p className="text-muted-foreground">Browse our most requested printing solutions</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90"/>
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.tag}</p>
                  </div>
                  <a href="#contact" className="bg-gradient-brand text-brand-foreground text-xs font-semibold px-3 py-2 rounded-full">Order</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
            <p className="text-muted-foreground">Explore our recent creative projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ["Corporate Identity","Branding","https://images.pexels.com/photos/4140923/pexels-photo-4140923.jpeg?auto=compress&cs=tinysrgb&w=600","md:row-span-2 md:col-span-2 aspect-square md:aspect-auto"],
              ["Business Stationery","Print","https://images.pexels.com/photos/269843/pexels-photo-269843.jpeg?auto=compress&cs=tinysrgb&w=600","aspect-square"],
              ["Team Uniforms","Apparel","https://images.pexels.com/photos/701771/pexels-photo-701771.jpeg?auto=compress&cs=tinysrgb&w=600","aspect-square"],
              ["Product Boxes","Packaging","https://images.pexels.com/photos/9594415/pexels-photo-9594415.jpeg?auto=compress&cs=tinysrgb&w=600","aspect-square"],
              ["Printing Excellence","Production","https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=600","md:col-span-2 aspect-square md:aspect-[2/1]"],
            ].map(([t,c,img,cls]) => (
              <div key={t} className={`group relative overflow-hidden rounded-2xl border border-border ${cls}`}>
                <img src={img} alt={t} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"/>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-brand/20 border border-brand/40 text-brand text-xs px-2 py-0.5 rounded-full mb-1">{c}</span>
                  <h3 className="font-bold">{t}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Real feedback from satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-1 text-brand mb-4">{"★★★★★"}</div>
                <p className="text-muted-foreground mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-brand text-brand-foreground grid place-items-center font-bold">{t.initials}</div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-card to-surface p-10 md:p-16 text-center">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/30 rounded-full blur-3xl"/>
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's create something amazing together. Get a free quote today!</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#contact" className="bg-gradient-brand text-brand-foreground px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-glow transition">Get Free Quote <ArrowRight className="w-4 h-4"/></a>
                <a href={WA_URL} target="_blank" rel="noreferrer" className="border border-border bg-card/50 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:border-brand transition"><MessageCircle className="w-4 h-4"/> WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Visit Us", text: "Pakistan" },
                { icon: Phone, title: "Call / WhatsApp", text: PHONE },
                { icon: Mail, title: "Email Us", text: "majeedigraphics@gmail.com" },
                { icon: Clock, title: "Working Hours", text: "Mon - Sat: 9:00 AM - 9:00 PM" },
              ].map(({icon:Icon, title, text}) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 grid place-items-center text-brand flex-shrink-0"><Icon className="w-5 h-5"/></div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-muted-foreground text-sm">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); window.open(WA_URL, "_blank"); }} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your Name" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-brand outline-none"/>
              <input required type="email" placeholder="Your Email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-brand outline-none"/>
            </div>
            <input required placeholder="Phone Number" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-brand outline-none"/>
            <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-brand outline-none">
              <option>Select Service</option>
              {services.map(s => <option key={s.title}>{s.title}</option>)}
              <option>Other</option>
            </select>
            <textarea required rows={5} placeholder="Your Message" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-brand outline-none resize-none"/>
            <button type="submit" className="w-full bg-gradient-brand text-brand-foreground font-semibold py-3 rounded-lg hover:shadow-glow transition inline-flex items-center justify-center gap-2">
              Send Message <ArrowRight className="w-4 h-4"/>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Majeedi Graphics" className="h-10 w-auto"/>
              <span className="font-bold text-lg">Majeedi <span className="text-brand">Graphics</span></span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">Creative design & premium printing solutions to help your brand look its best.</p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:text-brand-foreground hover:border-transparent transition"><I className="w-4 h-4"/></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navLinks.map(l => <li key={l.href}><a href={l.href} className="hover:text-brand">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Phone className="w-4 h-4 text-brand"/>{PHONE}</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 text-brand"/>majeedigraphics@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Majeedi Graphics. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WA_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-brand grid place-items-center shadow-glow hover:scale-110 transition">
        <MessageCircle className="w-6 h-6 text-brand-foreground"/>
      </a>
    </div>
  );
}
