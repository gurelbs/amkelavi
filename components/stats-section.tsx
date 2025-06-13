"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface StatProps {
  value: string
  label: string
  className?: string
}

function Stat({ value, label, className }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Card className={cn("text-center", className)}>
      <CardContent className="pt-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
          <div className="text-muted-foreground">{label}</div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">סיכום המבצע</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat value="24" label="ימים מתחילת המבצע" />
          <Stat value="150+" label="מטרות שהותקפו" />
          <Stat value="95%" label="אחוז יירוט מוצלח" />
          <Stat value="24/7" label="כיסוי חדשותי" />
        </div>
      </div>
    </section>
  )
}
