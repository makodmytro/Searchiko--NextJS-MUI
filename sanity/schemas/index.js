import project from "./project-schema";

const keyword = {
  name: "keyword",
  type: "object",
  title: "Keyworddd",
  fields: [
    {
      name: "keyword",
      type: "string",
      title: "Keyword"
    },
    { name: "url", title: "URL", type: "url" }
  ]
};

const keywordsList = {
  name: "keywordslist",
  title: "Keywords list",
  type: "object",
  fields: [
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "keyword" }]
    }
  ]
};

const schemas = [project, keyword, keywordsList];

export default schemas;
