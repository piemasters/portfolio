import { site } from "#/content/site";

export function absoluteUrl(path: string) {
  const base = site.url.replace(/\/$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function socialImage(image?: string) {
  if (image && /\.(png|jpe?g|webp|gif)$/i.test(image)) return image;
  return site.shareImage;
}

export function shareMeta({
  title,
  description,
  path,
  image = site.shareImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const pageUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: imageUrl },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  };
}
