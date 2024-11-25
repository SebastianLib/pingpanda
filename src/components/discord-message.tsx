interface DiscordMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

export default function DiscordMessage({
  avatarAlt,
  avatarSrc,
  content,
  timestamp,
  title,
  badgeText,
  badgeColor = "#43b581",
}: DiscordMessageProps) {
  return (
    <div className="w-full flex items-start justify-start">DiscordMessage</div>
  )
}
