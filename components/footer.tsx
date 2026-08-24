'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Heart, TestTube2 } from 'lucide-react';
import { PROFILE, SOCIALS, NAV_LINKS } from '@/lib/data';

const iconMap = {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-96 bg-primary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                <TestTube2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg">
                {PROFILE.firstName}
                <span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {PROFILE.headline} — breaking software so users never have to.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIALS.map((social) => {
                const Icon =
                  iconMap[social.icon.name as keyof typeof iconMap] ||
                  social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2.5 rounded-xl glass hover:border-primary/30 hover:text-primary transition-all hover:scale-110"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1.5"
          >
            Designed by{' '}
            <span className="font-semibold text-foreground">
              {PROFILE.name}
            </span>{' '}
            with <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />
          </motion.p>
          <p className="text-xs text-muted-foreground/60 font-mono">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
