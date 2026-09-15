export default function BrandMark({ className = 'w-[30px] h-[30px] flex-none' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 24L11 9L16 17L21 6L30 24"
        stroke="#8B4513"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M2 24H30" stroke="#556B2F" strokeWidth="2.2" />
    </svg>
  );
}
