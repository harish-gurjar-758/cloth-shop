import React from "react";
import { Card, CardContent, Skeleton } from "@mui/material";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

export default function StatCard({
  title = "Total Revenue",
  value = "0",
  icon: Icon,
  change = 0,
  isIncrease = true,
  loading = false,
  onClick,
}) {
  return (
    <Card
      onClick={onClick}
      className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
    >
      <CardContent className="flex items-center justify-between p-6">
        
        {/* LEFT CONTENT */}
        <div>
          {loading ? (
            <>
              <Skeleton width={100} height={20} />
              <Skeleton width={80} height={35} />
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500 font-medium">
                {title}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {value}
              </h2>

              {/* Change Section */}
              <div className="flex items-center gap-2 mt-2">
                {isIncrease ? (
                  <FiTrendingUp className="text-green-500" />
                ) : (
                  <FiTrendingDown className="text-red-500" />
                )}

                <span
                  className={`text-sm font-medium ${
                    isIncrease ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {change}%
                </span>

                <span className="text-xs text-gray-400">
                  vs last month
                </span>
              </div>
            </>
          )}
        </div>

        {/* RIGHT ICON */}
        <div className="bg-gray-100 p-4 rounded-xl">
          {loading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            Icon && <Icon size={28} className="text-gray-700" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
