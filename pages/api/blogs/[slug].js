import fs from "fs/promises";

export default async ({ query }, res) => {
  try {
    let blog = await fs.readFile("./data/" + query.slug + ".json");
    res.status(200).send(JSON.parse(blog));
  } catch (e) {
    res.status(404).send({ message: "Blog not found" });
  }
};
