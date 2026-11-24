/* Images are served by the API (a different origin), so a plain <img> is used instead of next/image. */
/* eslint-disable @next/next/no-img-element */
export default function AdminImage({ src, alt, className }: { src: string | null | undefined; alt: string; className?: string }) {
  if (!src) return null;
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}
