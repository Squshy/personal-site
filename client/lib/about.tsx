import fs from "fs";
import path from "path";
import matter from "gray-matter";

const aboutPath: string = path.join(process.cwd(), "static/about/about.md");

const getAge = (birthDate: Date) => {
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const months = currentDate.getMonth() - birthDate.getMonth();
  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDate.getDate())
  )
    return age - 1;
  return age;
};

export function getAboutInfo() {
  // Get file names under /posts
  if (fs.existsSync(aboutPath)) {
    const fileContents = fs.readFileSync(aboutPath, "utf8");
    const { data } = matter(fileContents);
    const birthDate: Date = new Date(data.birthDate);
    return {
      title: data.title,
      body: data.body,
      age: getAge(birthDate)
    };
  }
  return null;
}
