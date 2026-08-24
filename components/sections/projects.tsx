'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 h-72 w-96 bg-accent/8 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="section-label mb-4">Real-world work</span>
          <h2 className="heading-lg mt-4 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="body-lg">
            Each project represents a complete QA lifecycle — from test planning
            to execution, automation, and bug triage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Screenshot placeholder — browser mockup */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                <div className="absolute inset-0 bg-grid opacity-20" />

                {/* Project logo image */}
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
                />

                {/* Browser bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center gap-1.5 px-3 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <div className="ml-2 h-4 flex-1 rounded bg-white/10" />
                </div>

                {/* Logo badge */}
                <div className="absolute top-12 right-3 z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                    <project.icon className="h-6 w-6 text-slate-800" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Metrics badge */}
                <div className="absolute bottom-3 left-3 flex gap-2 z-10">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="px-2 py-1 rounded-lg bg-black/30 backdrop-blur-sm text-[10px] font-mono text-white/90"
                    >
                      {key}: {value}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-muted/40 text-muted-foreground border border-border/40"
                    >
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      {tag}
                    </span>
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
