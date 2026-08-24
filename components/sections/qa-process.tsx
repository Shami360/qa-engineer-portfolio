'use client';

import { motion } from 'framer-motion';
import { QA_PROCESS } from '@/lib/data';

export function QAProcess() {
  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 h-72 w-72 bg-accent/8 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4">How I work</span>
          <h2 className="heading-lg mt-4 mb-4">
            My QA <span className="gradient-text">Process</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            A structured, repeatable approach to quality — from requirements to
            release.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {QA_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Step number circle */}
                <div className="flex items-center justify-center mb-5 relative z-10">
                  <div className="w-24 h-24 rounded-2xl glass-card flex flex-col items-center justify-center group-hover:border-primary/30 transition-all">
                    <step.icon className="h-7 w-7 text-primary mb-1.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono text-muted-foreground">
                      Step {step.step}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps — desktop */}
                {i < QA_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 text-muted-foreground/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
