function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-label="Mostefai Mohamed"
      role="img"
    >
      <path
        d="M2 10V2H10"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        className="text-primary/60"
      />
      <path
        d="M30 22V30H22"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        className="text-primary/60"
      />
      <text
        x="16"
        y="23"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontStyle="italic"
        fontWeight="300"
        fontSize="20"
        className="fill-foreground"
      >
        M
      </text>
    </svg>
  );
}

export default Logo;
