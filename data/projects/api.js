import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";

const PROJECT_PATH = path.join(process.cwd(), "data/projects/published");

export const getSlugs = () => {
  const paths = sync(`${PROJECT_PATH}/*.mdx`);
  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _extention] = fileName.split(".");
    return slug;
  });
};

export const getProjectBySlug = (slug) => {
  const projectPath = path.join(PROJECT_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(projectPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      description: data.description ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      isPublic: data.isPublic ?? false,
      coverImage: data.coverImage ?? "",
      mainImage: data.mainImage ?? "",
    },
  };
};

export const getAllProjects = () => {
  const projects = getSlugs()
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => {
      const t1 = new Date(a.meta.date).getTime();
      const t2 = new Date(b.meta.date).getTime();
      console.log("a.meta.date", a.meta.date);
      if (t1 > t2) return 1;
      if (t1 < t2) return -1;
      return 0;
    })
    .reverse();
  return projects;
};
