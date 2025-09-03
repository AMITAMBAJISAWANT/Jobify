import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import styled from "styled-components";
import { useDashboardContext } from "../pages/DashboardLayout";

const CustomTooltipWrapper = styled.div`
  background: ${({ isDark }) => (isDark ? "#222" : "#ffffffcc")};
  border: 1px solid ${({ isDark }) => (isDark ? "#555" : "#2cb1bc")};
  padding: 10px 14px;
  border-radius: 10px;
  color: ${({ isDark }) => (isDark ? "#ddd" : "#222")};
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
`;

const CustomTooltip = ({ active, payload, label, isDark }) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipWrapper isDark={isDark}>
        <p style={{ margin: 0 }}>{`Month: ${label}`}</p>
        <p style={{ margin: 0 }}>{`Applications: ${payload[0].value}`}</p>
      </CustomTooltipWrapper>
    );
  }
  return null;
};

const AreaChartComponent = ({ data }) => {
  const { isDarkTheme } = useDashboardContext();

  const average =
    Math.round(data.reduce((acc, cur) => acc + cur.count, 0) / data.length) ||
    0;

  const axisColor = isDarkTheme ? "#ccc" : "#2cb1bc";
  const gridColor = isDarkTheme ? "#444" : "#e0e0e0";
  const labelColor = isDarkTheme ? "#ddd" : "#2cb1bc";

  return (
    <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        data={data}
        margin={{ top: 60, right: 40, left: 0, bottom: 20 }}
      >
        <CartesianGrid
          stroke={gridColor}
          strokeDasharray="4 4"
          vertical={false}
        />

        <XAxis
          dataKey="date"
          tick={{ fill: axisColor, fontWeight: 700, fontSize: 14 }}
          axisLine={{ stroke: axisColor, strokeWidth: 2 }}
          tickLine={false}
          interval={0}
          textAnchor="middle"
        />

        <YAxis
          allowDecimals={false}
          tick={{ fill: axisColor, fontWeight: 700, fontSize: 14 }}
          axisLine={{ stroke: axisColor, strokeWidth: 2 }}
          tickLine={false}
        />

        <Tooltip content={<CustomTooltip isDark={isDarkTheme} />} />

        <ReferenceLine
          y={average}
          label={{
            value: `Average (${average})`,
            position: "insideTopRight",
            fill: "#ff6b6b",
            fontWeight: 700,
          }}
          stroke="#ff6b6b"
          strokeDasharray="4 4"
        />

        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2cb1bc" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#2cb1bc" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="count"
          stroke="#2cb1bc"
          strokeWidth={3}
          fill="url(#areaGradient)"
          activeDot={{ r: 6, fill: "#2cb1bc", stroke: "#fff", strokeWidth: 2 }}
          animationDuration={1800}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
