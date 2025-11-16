"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Candidate {
  name: string;
  votes: number;
  percentage: number;
  color: string;
}

export default function Home() {
  const totalVotes = 1451;
  
  const candidates: Candidate[] = [
    { name: "अश्विन डीचोलकर", votes: 751, percentage: 51.76, color: "#FF6B6B" },
    { name: "मयूर शेळके", votes: 425, percentage: 29.29, color: "#FF8C42" },
    { name: "बबन विश्वकर्मा", votes: 136, percentage: 9.37, color: "#FFB84D" },
    { name: "रूपेश ठोंबरे", votes: 79, percentage: 5.45, color: "#4D9FFF" },
    { name: "यतिन देशमुख", votes: 14, percentage: 0.96, color: "#5EEAD4" },
    { name: "समीर ठाकूर", votes: 10, percentage: 0.69, color: "#FF8F42" },
    { name: "ममता प्रितम म्हात्रे", votes: 7, percentage: 0.48, color: "#FF7B7B" },
    { name: "संतोष जी शेट्टी", votes: 5, percentage: 0.34, color: "#6B8EFF" },
    { name: "अलका प्रभाकर कांबळे", votes: 5, percentage: 0.34, color: "#FFB366" },
    { name: "शशिकला सिंग", votes: 4, percentage: 0.28, color: "#8B7FFF" },
    { name: "किशोर चौतमोल", votes: 4, percentage: 0.28, color: "#7F8BFF" },
    { name: "कविता किशोर चौतमोल", votes: 3, percentage: 0.21, color: "#6FC9C9" },
    { name: "राजेश्री वावेकर", votes: 3, percentage: 0.21, color: "#94A3B8" },
    { name: "भास्कर शेट्टी", votes: 2, percentage: 0.14, color: "#64748B" },
  ];

  const pieData = candidates.map((candidate) => ({
    name: candidate.name,
    value: candidate.votes,
    color: candidate.color,
  }));

  return (
    <div className="min-h-screen bg-[#1a1d29] text-white">
      {/* Header */}
      <header className="border-b border-[#2d3348] bg-[#1a1d29]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-lg font-semibold ml-2">StrawPoll</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Create Poll</a>
              <a href="#" className="hover:text-white">Schedule Meeting</a>
              <a href="#" className="hover:text-white">Demo</a>
              <a href="#" className="hover:text-white">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <input 
              type="search" 
              placeholder="Search" 
              className="hidden md:block bg-[#252937] border border-[#3d4659] rounded-md px-4 py-2 text-sm w-48 focus:outline-none focus:border-gray-600"
            />
            <div className="flex items-center gap-2 bg-[#252937] rounded-full px-3 py-1.5 border border-[#3d4659]">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">S</div>
              <span className="text-sm">Shaik Asif</span>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Free</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-[#252937] rounded-lg border border-[#3d4659] p-8">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-xl font-medium mb-2 text-gray-100">
              नविन पनवेल मधे प्रभाग क्रमांक १६ मधे जनतेची पसंदी कोण ?
            </h1>
            <p className="text-sm text-gray-400">
              by Loopdrop Official · 1 day ago
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side - Progress Bars */}
            <div className="space-y-3.5">
              {candidates.map((candidate, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{candidate.name}</span>
                    <span className="text-sm text-gray-400">
                      {candidate.percentage.toFixed(2)}% ({candidate.votes} votes)
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#1a1d29] rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${candidate.percentage}%`,
                        backgroundColor: candidate.color
                      }}
                    />
                  </div>
                </div>
              ))}
              
              {/* Total votes */}
              <div className="pt-4 mt-2">
                <p className="text-sm text-gray-400">Total votes: {totalVotes}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-md transition-colors">
                  <span className="text-base">📊</span>
                  Live results
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#3d4659] hover:bg-[#4a5268] text-gray-300 text-sm rounded-md transition-colors">
                  <span>←</span>
                  Back to poll
                </button>
                <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-[#3d4659] hover:bg-[#4a5268] text-gray-300 text-sm rounded-md transition-colors">
                  <span>↗</span>
                  Share
                </button>
              </div>
            </div>

            {/* Right Side - Pie Chart */}
            <div className="flex items-start justify-center">
              <ResponsiveContainer width="100%" height={450}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
                      if (percent < 0.015) return null;
                      const RADIAN = Math.PI / 180;
                      const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      
                      let displayName = name;
                      if (percent < 0.03) {
                        displayName = name.split(' ')[0];
                      } else if (percent < 0.08) {
                        const words = name.split(' ');
                        displayName = words.length > 1 ? words.slice(0, 2).join(' ') : name;
                      }
                      
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          fill="black" 
                          textAnchor="middle" 
                          dominantBaseline="central"
                          fontSize={percent > 0.3 ? "15" : percent > 0.15 ? "13" : percent > 0.05 ? "11" : "9"}
                          fontWeight="700"
                        >
                          {displayName}
                        </text>
                      );
                    }}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#000000"
                    strokeWidth={2}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

