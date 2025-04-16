import React from "react";
import colors from "../common/color";


const App: React.FC = () => {
  const colorBlocks = Object.entries(colors).map(([key, value]) => {
    if (typeof value === "string") {
      return <ColorCard key={key} name={key} color={value} />;
    }

    return Object.entries(value).map(([nestedKey, nestedValue]) => (
      <ColorCard key={`${key}.${nestedKey}`} name={`${key}.${nestedKey}`} color={nestedValue} />
    ));
  });

  return (
    <div style={{ 
      background: colors.background, 
      minHeight: "100vh", 
      padding: "2rem", 
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <h1 style={{
        color: colors.text.primary,
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: "2rem"
      }}>OJFitness – Premium Color Palette</h1>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", 
        gap: "1.5rem" 
      }}>
        {colorBlocks}
      </div>
    </div>
  );
};

type ColorCardProps = {
  name: string;
  color: string;
};

const ColorCard: React.FC<ColorCardProps> = ({ name, color }) => {
  const isTransparent = color.includes("rgba") || color.includes("linear");
  console.log("reshav",{name,color,isTransparent})

  return (
    <div key={name} style={{
      background: !isTransparent ? color : colors.glassBackground,
      border: `1px solid ${colors.glassBorder}`,
      borderRadius: "16px",
      padding: "1rem",
      height: "120px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: colors.text.primary,
      backdropFilter: isTransparent ? "blur(10px)" : undefined,
      WebkitBackdropFilter: isTransparent ? "blur(10px)" : undefined,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    }}>
      <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>{name}</div>
      <code style={{ fontSize: "0.75rem", opacity: 0.7 }}>{color}</code>
    </div>
  );
};

export default App;
