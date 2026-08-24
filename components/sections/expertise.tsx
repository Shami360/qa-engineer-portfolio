'use client';

import { motion } from 'framer-motion';
import { EXPERTISE } from '@/lib/data';

export function Expertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 h-72 w-72 bg-primary/8 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="section-label mb-4">What I do</span>
          <h2 className="heading-lg mt-4 mb-4">
            Areas of <span className="gradient-text">Expertise</span>
          </h2>
          <p className="body-lg">
            I don&apos;t just find bugs — I build quality into the entire development
            lifecycle. Here&apos;s where I focus my energy.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group glass-card rounded-2xl p-6 relative overflow-hidden ${item.border}`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-5xl font-display font-bold text-muted-foreground/10 group-hover:text-primary/15 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
