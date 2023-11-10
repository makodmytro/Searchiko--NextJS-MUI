const project = {
  name: "project",
  title: "Articles",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    { name: "category", title: "Category", type: "string" },
    {
      title: "Is AFS campaign",
      name: "is_afs_campaign",
      type: "boolean",
      description: "Enable if it's an AFS campaign"
    },
    {
      name: "feed",
      type: "string",
      title: "Feed",
      //initialValue: "RoiterMedia",
      options: {
        list: [
          { title: "Roiter Media", value: "RoiterMedia" },
          { title: "Unibots (-8)", value: "Unibots" }
        ]
      }
    },
    { name: "channel", title: "Channel / Vertical ID", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }
      /*
       fields: [
        {
          name: "alt",
          title: "Image description",
          type: "string"
        }
      ]
       */
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block"
        },
        { type: "keywordslist" }
      ]
    },
    {
      title: "Show related articles",
      name: "related",
      type: "boolean",
      description: "Enable to show related articles in the article page"
    }
  ]
};

export default project;
