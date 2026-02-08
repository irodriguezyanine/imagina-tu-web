/**
 * Server Component: hero background image.
 * Rendered in the initial HTML so the image starts loading immediately.
 */
export function HeroBg({ src }: { src: string }) {
  return (
    <div className="absolute inset-0">
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
