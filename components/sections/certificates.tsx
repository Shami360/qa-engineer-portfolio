'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, BadgeCheck } from 'lucide-react';
import { CERTIFICATES } from '@/lib/data';

export function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 h-72 w-96 bg-primary/8 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="section-label mb-4">Continuous learning</span>
          <h2 className="heading-lg mt-4 mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="body-lg">
            I invest in learning every week — these are the certifications
            I&apos;ve earned to back up my practice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card rounded-2xl p-6 flex gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />

              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 relative z-10">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold leading-tight">{cert.title}</h3>
                  <BadgeCheck className="h-5 w-5 text-accent shrink-0" />
                </div>
                <p className="text-sm text-primary font-medium mb-1.5">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Calendar className="h-3.5 w-3.5" />
                  {cert.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
