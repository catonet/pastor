/**
 * Reusable photo-block with duotone overlay and bottom shade.
 * @param {string} duotone – one of 'terra', 'olive', 'amber', 'ink'
 */
export default function PhotoBlock({ src, alt, duotone = 'terra', loading = 'lazy', className = '', children }) {
  const duoClass = `duo-${duotone}`;
  return (
    <div className={`photo-block ${duoClass} ${className}`}>
      <img src={src} alt={alt} loading={loading} />
      <div className="duo-layer" />
      <div className="shade" />
      {children}
    </div>
  );
}
