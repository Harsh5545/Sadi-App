"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 1200000 },
  { name: "Feb", total: 1800000 },
  { name: "Mar", total: 2200000 },
  { name: "Apr", total: 2800000 },
  { name: "May", total: 3900000 },
  { name: "Jun", total: 3500000 },
  { name: "Jul", total: 4200000 },
  { name: "Aug", total: 4800000 },
  { name: "Sep", total: 5100000 },
  { name: "Oct", total: 4700000 },
  { name: "Nov", total: 5500000 },
  { name: "Dec", total: 6800000 },
]

export function RevenueChart() {
  const { theme } = useTheme()

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === "dark" ? "#334155" : "#e2e8f0"} />
        <XAxis
          dataKey="name"
          stroke={theme === "dark" ? "#94a3b8" : "#64748b"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke={theme === "dark" ? "#94a3b8" : "#64748b"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value / 100000}L`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].payload.name}</span>
                      <span className="font-bold text-muted-foreground">
                        ₹{(payload[0].value as number).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="total" fill="#e11d48" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
