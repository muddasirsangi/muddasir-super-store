interface ProductImageProps {
  name: string;
  category?: string;
  size?: number;
}

export default function ProductImage({ name, category = "product", size = 400 }: ProductImageProps) {
  // Generate a consistent color based on product name
  const getColor = (str: string) => {
    const colors = [
      { bg: "#8b5cf6", text: "#ffffff" }, // purple
      { bg: "#3b82f6", text: "#ffffff" }, // blue
      { bg: "#ec4899", text: "#ffffff" }, // pink
      { bg: "#10b981", text: "#ffffff" }, // green
      { bg: "#f59e0b", text: "#ffffff" }, // orange
      { bg: "#ef4444", text: "#ffffff" }, // red
    ];
    const index = str.length % colors.length;
    return colors[index];
  };

  const color = getColor(name);
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id={`grad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color.bg, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color.bg, stopOpacity: 0.7 }} />
        </linearGradient>
        
        {/* Pattern for texture */}
        <pattern id={`pattern-${name}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)" />
        </pattern>
      </defs>
      
      {/* Background */}
      <rect width="400" height="400" fill={`url(#grad-${name})`} />
      <rect width="400" height="400" fill={`url(#pattern-${name})`} />
      
      {/* Product icon based on category */}
      {category === "Electronics" && (
        <g transform="translate(100, 100)">
          <rect x="20" y="40" width="160" height="120" rx="10" fill="white" opacity="0.9" />
          <rect x="40" y="60" width="120" height="80" rx="5" fill={color.bg} />
          <circle cx="100" cy="180" r="8" fill="white" opacity="0.9" />
        </g>
      )}
      
      {category === "Fashion" && (
        <g transform="translate(100, 80)">
          <path d="M 100 40 L 120 80 L 180 80 L 180 200 L 20 200 L 20 80 L 80 80 Z" fill="white" opacity="0.9" />
          <circle cx="70" cy="50" r="15" fill="white" opacity="0.9" />
          <circle cx="130" cy="50" r="15" fill="white" opacity="0.9" />
        </g>
      )}
      
      {category === "Home" && (
        <g transform="translate(80, 80)">
          <path d="M 120 40 L 220 120 L 200 120 L 200 220 L 40 220 L 40 120 L 20 120 Z" fill="white" opacity="0.9" />
          <rect x="90" y="150" width="60" height="70" fill={color.bg} />
        </g>
      )}
      
      {category === "Sports" && (
        <g transform="translate(100, 100)">
          <circle cx="100" cy="100" r="80" fill="white" opacity="0.9" />
          <path d="M 100 20 Q 140 60 100 100 Q 60 140 100 180 Q 140 140 100 100 Q 60 60 100 20" fill={color.bg} />
        </g>
      )}
      
      {/* Default icon */}
      {!["Electronics", "Fashion", "Home", "Sports"].includes(category) && (
        <g transform="translate(100, 100)">
          <rect x="30" y="30" width="140" height="140" rx="20" fill="white" opacity="0.9" />
          <circle cx="100" cy="100" r="40" fill={color.bg} />
        </g>
      )}
      
      {/* Product name */}
      <text
        x="200"
        y="350"
        textAnchor="middle"
        fill="white"
        fontSize="24"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        {name.length > 20 ? name.substring(0, 20) + "..." : name}
      </text>
    </svg>
  );
}
