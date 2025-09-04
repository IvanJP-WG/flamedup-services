import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";

interface PageProps {
  params: { slug: string };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = params;

  // Dev-safe: check if file exists
  const filePath = path.join(process.cwd(), "content/resources", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return <p>Resource not found</p>;
  }

  const source = fs.readFileSync(filePath, "utf8");
  // Normally process MDX with next-mdx-remote
  return <div>{source}</div>;
}
