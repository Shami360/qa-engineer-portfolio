'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Target, MapPin, Clock } from 'lucide-react';
import { PROFILE } from '@/lib/data';

const highlights = [
  { icon: Target, label: 'Manual & Automation Testing' },
  { icon: Briefcase, label: '~1 Year Experience' },
  { icon: Award, label: 'Selenium & API Testing' },
  { icon: GraduationCap, label: 'Continuous Learner' },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 h-72 w-96 bg-primary/8 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="glass-card rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <div className="absolute -top-20 -right-20 h-40 w-40 bg-primary/15 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent mb-5 glow-primary">
                  <img
                    src="/Linkdin_Profile_image.png"
                    alt={`${PROFILE.name} profile photo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-1">{PROFILE.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {PROFILE.headline}
                </p>

                <div className="flex flex-col gap-2 mb-5 text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary/60" />
                    {PROFILE.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary/60" />
                    {PROFILE.availability}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {['Manual Testing', 'Automation', 'API Testing'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — About text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="section-label mb-4">Get to know me</span>
            <h2 className="heading-lg mt-4 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="glass-card rounded-2xl p-8 mb-6">
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                {PROFILE.aboutLong}
              </p>
              <p className="body-lg">{PROFILE.about}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
