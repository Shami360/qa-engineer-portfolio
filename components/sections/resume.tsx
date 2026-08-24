'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { PROFILE } from '@/lib/data';

export function Resume() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative glass-card rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary animate-gradient" />
            <div className="absolute -top-20 -right-20 h-40 w-40 bg-primary/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 bg-accent/15 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow-primary">
                <FileText className="h-8 w-8 text-white" />
              </div>

              <h2 className="heading-lg mb-4">
                Download My <span className="gradient-text">Resume</span>
              </h2>
              <p className="body-lg mb-8 max-w-md mx-auto">
                Get a complete overview of my experience, skills, and
                qualifications — formatted for recruiters and hiring managers.
              </p>

              <a
                href={PROFILE.resumeUrl}
                download
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
