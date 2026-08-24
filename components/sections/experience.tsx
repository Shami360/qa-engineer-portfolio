'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-72 w-96 bg-primary/8 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="section-label mb-4">My journey</span>
          <h2 className="heading-lg mt-4 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-14 pb-8"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent glow-primary" />
              </div>

              <div className="glass-card rounded-2xl p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 font-mono">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5 shrink-0">▹</span>
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
