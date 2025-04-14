import {
  Trophy,
  Crown,
  Gamepad,
  Target,
  Dice5,
  PuzzleIcon as PuzzlePiece,
  Joystick,
  Sword,
  Shield,
  Zap,
  Heart,
} from "lucide-react"

type GamingIconProps = {
  className?: string
  density?: "low" | "medium" | "high"
  theme?: "light" | "dark"
}

export default function GamingIcons({ className = "", density = "medium", theme = "light" }: GamingIconProps) {
  // Determine number of icons based on density
  const iconCount = {
    low: 5,
    medium: 10,
    high: 15,
  }[density]

  // Icon components to randomly select from
  const iconComponents = [Trophy, Crown, Gamepad, Target, Dice5, PuzzlePiece, Joystick, Sword, Shield, Zap, Heart]

  // Generate random positions and icons
  const icons = Array.from({ length: iconCount }).map((_, index) => {
    const IconComponent = iconComponents[Math.floor(Math.random() * iconComponents.length)]
    const size = Math.floor(Math.random() * 24) + 24 // Random size between 24px and 48px
    const top = `${Math.random() * 100}%`
    const left = `${Math.random() * 100}%`
    const opacity = Math.random() * 0.3 + 0.2 // Random opacity between 0.2 and 0.5
    const rotate = Math.floor(Math.random() * 360) // Random rotation
    const animationDelay = `${Math.random() * 10}s` // Random animation delay
    const animationDuration = `${Math.random() * 10 + 10}s` // Random animation duration between 10-20s

    return (
      <div
        key={index}
        className="absolute"
        style={{
          top,
          left,
          opacity,
          transform: `rotate(${rotate}deg)`,
          animation: `float ${animationDuration} ease-in-out infinite`,
          animationDelay,
        }}
      >
        <IconComponent size={size} className={theme === "light" ? "text-white" : "text-indigo-900"} />
      </div>
    )
  })

  return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>{icons}</div>
}
