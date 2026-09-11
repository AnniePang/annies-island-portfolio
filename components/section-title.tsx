"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animation"
import { Leaf } from "@/components/acnh/decor"

interface SectionTitleProps {
  title: string
  subtitle: string
  className?: string
}

/**
 * Section heading rendered as a wooden signpost plaque -- the island equivalent
 * of a signboard at the edge of each area. Plaque styling lives in the
 * .acnh-signpost component class (app/globals.css).
 */
export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mb-10 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="acnh-signpost text-2xl md:text-3xl font-bold">
          <h2 className="inline">{title}</h2>
        </span>
        <Leaf className="w-6 h-6 text-leaf-500 shrink-0" />
      </div>
      <p className="text-slate-600 dark:text-slate-300 font-medium">{subtitle}</p>
    </motion.div>
  )
}
