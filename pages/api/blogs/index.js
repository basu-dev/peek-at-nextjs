import fs from "fs/promises";
export function getBlogs() {
  return new Promise(async (resolve, reject) => {
    try {
      let fileNames = await fs.readdir("./data");
      let blogs = await Promise.all(
        fileNames.map((name) => fs.readFile("./data/" + name, "utf-8"))
      );
      resolve(
        blogs.map((blog, index) => ({
          ...JSON.parse(blog),
          slug: fileNames[index].split(".json")[0],
        }))
      );
    } catch (e) {
      reject([]);
    }
  });
}
export default async (req, res) => {
  try {
    let blogs = await getBlogs();
    res.status(200).send(blogs);
  } catch (e) {
    res.status(500).send([]);
  }
};
