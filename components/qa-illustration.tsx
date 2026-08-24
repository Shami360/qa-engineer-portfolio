'use client';

import { motion } from 'framer-motion';
import { Bug, CheckCircle2, TestTube2, Zap } from 'lucide-react';

export function QAIllustration() {
  const orbitItems = [
    { icon: Bug, label: 'Bug', color: 'text-red-400', delay: 0 },
    { icon: CheckCircle2, label: 'Pass', color: 'text-green-400', delay: 1 },
    { icon: TestTube2, label: 'Test', color: 'text-blue-400', delay: 2 },
    { icon: Zap, label: 'Auto', color: 'text-cyan-400', delay: 3 },
  ];

  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-glow-pulse" />

      {/* Orbit rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-8 rounded-full border-2 border-dashed border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-16 rounded-full border-2 border-dashed border-accent/20"
      />

      {/* Center card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="glass-card rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center gap-3 animate-float">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
            <TestTube2 className="h-8 w-8 text-white" />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold">QA</p>
            <p className="text-xs text-muted-foreground">Engineer</p>
          </div>
          {/* Mini progress bars */}
          <div className="w-full space-y-1.5">
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-full bg-primary"
              />
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, delay: 1 }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Orbiting icons */}
      {orbitItems.map((item, i) => {
        const angle = (i / orbitItems.length) * Math.PI * 2;
        const radius = 160;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="absolute top-1/2 left-1/2"
            style={{ x, y }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
              className="glass-card rounded-xl p-3 -ml-6 -mt-6"
            >
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
