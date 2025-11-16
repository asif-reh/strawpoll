"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Candidate {
  name: string;
  votes: number;
  percentage: number;
  color: string;
}

export default function Home() {
  const totalVotes = 1451;
  
  const candidates: Candidate[] = [
    { name: "मयूर शेळके", votes: 425, percentage: 29.29, color: "hsl(var(--chart-1))" },
    { name: "अश्विन डीचोलकर", votes: 751, percentage: 51.76, color: "hsl(var(--chart-2))" },
    { name: "बबन विश्वकर्मा", votes: 136, percentage: 9.37, color: "hsl(var(--chart-3))" },
    { name: "रूपेश ठोंबरे", votes: 79, percentage: 5.45, color: "hsl(var(--chart-4))" },
    { name: "यतिन देशमुख", votes: 14, percentage: 0.96, color: "hsl(var(--chart-5))" },
    { name: "समीर ठाकूर", votes: 10, percentage: 0.69, color: "hsl(var(--chart-6))" },
    { name: "ममता प्रितम म्हात्रे", votes: 7, percentage: 0.48, color: "hsl(var(--chart-7))" },
    { name: "संतोष जी शेट्टी", votes: 5, percentage: 0.34, color: "hsl(var(--chart-8))" },
    { name: "अलका प्रभाकर कांबळे", votes: 5, percentage: 0.34, color: "hsl(var(--chart-9))" },
    { name: "शशिकला सिंग", votes: 4, percentage: 0.28, color: "hsl(var(--chart-10))" },
    { name: "किशोर चौतमोल", votes: 4, percentage: 0.28, color: "hsl(var(--chart-1))" },
    { name: "किशोर चौतमोल", votes: 3, percentage: 0.21, color: "hsl(var(--chart-2))" },
    { name: "कविता किशोर चौतमोल", votes: 3, percentage: 0.21, color: "hsl(var(--chart-3))" },
    { name: "राजेश्री वावेकर", votes: 3, percentage: 0.21, color: "hsl(var(--chart-4))" },
    { name: "भास्कर शेट्टी", votes: 2, percentage: 0.14, color: "hsl(var(--chart-5))" },
  ];

  const pieData = candidates.map((candidate) => ({
    name: candidate.name,
    value: candidate.votes,
    color: candidate.color,
  }));

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            नविन पनवेल मधे प्रभाग क्रमांक ९६ मधे जनतेची पसंदी कोण ?
          </h1>
          <p className="text-sm text-muted-foreground">
            by LoopDrop Official · 23 hours ago
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Candidates List */}
          <Card className="p-6 bg-card border-border">
            <div className="space-y-4">
              {candidates.map((candidate, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-foreground font-medium">{candidate.name}</h3>
                    <span className="text-muted-foreground text-sm">
                      {candidate.percentage.toFixed(2)}% ({candidate.votes} votes)
                    </span>
                  </div>
                  <Progress 
                    value={candidate.percentage} 
                    className="h-3"
                    style={{
                      // @ts-ignore
                      '--progress-background': candidate.color,
                    } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-muted-foreground text-sm">Total votes: {totalVotes}</p>
            </div>
          </Card>

          {/* Pie Chart */}
          <Card className="p-6 bg-card border-border">
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
                    if (percent < 0.03) return null;
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    
                    // Determine label text based on slice size
                    let displayName = name;
                    if (percent < 0.08) {
                      // For very small slices, show first word only
                      displayName = name.split(' ')[0];
                    } else if (percent < 0.15) {
                      // For medium slices, show abbreviated
                      const words = name.split(' ');
                      displayName = words.length > 2 ? `${words[0]} ${words[1]}...` : name;
                    }
                    
                    return (
                      <text 
                        x={x} 
                        y={y} 
                        fill="black" 
                        textAnchor="middle" 
                        dominantBaseline="central"
                        fontSize={percent > 0.2 ? "16" : "13"}
                        fontWeight="700"
                      >
                        {displayName}
                      </text>
                    );
                  }}
                  outerRadius={180}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem',
                    color: 'hsl(var(--foreground))',
                  }}
                  formatter={(value: number) => [`${value} votes`, 'Votes']}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}

