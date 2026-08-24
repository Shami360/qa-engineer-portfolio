'use client';

import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  ArrowDown,
  Bug,
  CheckCircle2,
  TestTube2,
  Zap,
  Terminal,
  Activity,
} from 'lucide-react';
import { PROFILE, SOCIALS, STATS_BAR } from '@/lib/data';
import { TypingEffect } from '@/components/typing-effect';

const terminalLines = [
  { text: '$ pytest tests/ --html=report.html', type: 'cmd' },
  { text: '========================= test session starts =========================', type: 'info' },
  { text: 'collected 50 items', type: 'info' },
  { text: 'tests/test_login.py::test_valid_login PASSED          [ 12%]', type: 'pass' },
  { text: 'tests/test_api.py::test_get_endpoint PASSED          [ 28%]', type: 'pass' },
  { text: 'tests/test_api.py::test_auth_flow PASSED             [ 44%]', type: 'pass' },
  { text: 'tests/test_ui.py::test_checkout_flow PASSED         [ 64%]', type: 'pass' },
  { text: 'tests/test_regression.py::test_suite PASSED          [ 84%]', type: 'pass' },
  { text: '======================== 50 passed in 12.34s ========================', type: 'success' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] mask-fade-b" />
      <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border border-primary/5 animate-spin-slow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {PROFILE.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display heading-xl mb-5"
            >
              <span className="block text-muted-foreground text-lg font-normal tracking-normal mb-2">
                Hi, I&apos;m
              </span>
              {PROFILE.name}
            </motion.h1>

            {/* Typing headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-display font-semibold mb-4 h-10 flex items-center"
            >
              <TypingEffect text={PROFILE.headline} className="gradient-text-bright" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl font-medium text-foreground/80 mb-2"
            >
              {PROFILE.tagline}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="body-lg mb-8 max-w-xl"
            >
              {PROFILE.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href={PROFILE.resumeUrl}
                download
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25"
              >
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-medium hover:border-primary/30 transition-all hover:scale-[1.03]"
              >
                <Mail className="h-5 w-5 text-primary" />
                Contact Me
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm text-muted-foreground mr-1">Find me on</span>
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl glass hover:border-primary/30 hover:text-primary transition-all hover:scale-110"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-10 pt-8 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {STATS_BAR.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-display font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Terminal Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Glow behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-3xl opacity-60" />

              {/* Terminal */}
              <div className="relative glass-card rounded-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground font-mono flex items-center justify-center gap-1.5">
                      <Terminal className="h-3 w-3" />
                      qa-test-runner — zsh
                    </span>
                  </div>
                </div>

                {/* Terminal body */}
                <div className="p-4 font-mono text-xs sm:text-sm space-y-1 min-h-[280px]">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.15, duration: 0.3 }}
                      className={
                        line.type === 'cmd'
                          ? 'text-foreground font-semibold'
                          : line.type === 'pass'
                            ? 'text-green-400'
                            : line.type === 'success'
                              ? 'text-green-400 font-semibold'
                              : 'text-muted-foreground'
                      }
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 2.5, duration: 1, repeat: Infinity }}
                    className="text-foreground"
                  >
                    $ <span className="typing-cursor" />
                  </motion.div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -right-4 -top-4 glass-card rounded-xl p-3 flex items-center gap-2 animate-float"
              >
                <div className="w-8 h-8 rounded-lg bg-green-400/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4.5 w-4.5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-bold">50/50</p>
                  <p className="text-[10px] text-muted-foreground">Tests Passed</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -left-4 top-1/3 glass-card rounded-xl p-3 flex items-center gap-2 animate-float-slow"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Bug className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold">0</p>
                  <p className="text-[10px] text-muted-foreground">Open Bugs</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute -right-2 -bottom-4 glass-card rounded-xl p-3 flex items-center gap-2 animate-float"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Activity className="h-4.5 w-4.5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold">98%</p>
                  <p className="text-[10px] text-muted-foreground">Coverage</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
