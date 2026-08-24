'use client';

import { motion } from 'framer-motion';
import { SKILLS, SKILL_CATEGORIES, TECH_STACK } from '@/lib/data';
import { useState } from 'react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...SKILL_CATEGORIES];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 h-72 w-96 bg-accent/8 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="section-label mb-4">Technical proficiency</span>
          <h2 className="heading-lg mt-4 mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="body-lg">
            A toolkit built for finding, reporting, and preventing defects —
            from manual exploration to automated regression.
          </p>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:border-primary/30 transition-all hover:scale-105 cursor-default"
            >
              <tech.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'glass hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills bars */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-xs text-muted-foreground tabular-nums font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
                >
                  <div className="absolute inset-0 animate-shimmer rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
