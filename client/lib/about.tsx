import fs from "fs";
import path from "path";
import matter from "gray-matter";

const aboutPath: string = path.join(process.cwd(), "static/about/about.md");

export function getAboutInfo() {
  // Get file names under /posts
  if (fs.existsSync(aboutPath)) {
    const fileContents = fs.readFileSync(aboutPath, "utf8");
    const { data } = matter(fileContents);
    return {
      title: data.title,
      body: data.body,
    };
  }
  return null;
}
