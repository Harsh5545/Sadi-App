"use client"

import { useTheme } from "next-themes"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Generate 30 days of sales data
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Generate random sales between 10 and 50
    const sales = Math.floor(Math.random() * 40) + 10

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      sales,
    })
  }

  return data
}

const data = generateData()

export function SalesChart() {
  const { theme } = useTheme()

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === "dark" ? "#334155" : "#e2e8f0"} />
        <XAxis
          dataKey="date"
          stroke={theme === "dark" ? "#94a3b8" : "#64748b"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => value}
        />
        <YAxis
          stroke={theme === "dark" ? "#94a3b8" : "#64748b"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].payload.date}</span>
                      <span className="font-bold text-muted-foreground">{payload[0].value} orders</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area type="monotone" dataKey="sales" stroke="#e11d48" fill="url(#colorSales)" strokeWidth={2} />
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e11d48" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  )
}
