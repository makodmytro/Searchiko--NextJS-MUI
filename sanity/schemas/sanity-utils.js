import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getAllArticles() {
  return createClient(config).fetch(
    groq`*[_type == "project" && _createdAt < "2023-07-15"] | order(_createdAt asc){
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      related,
      is_afs_campaign
    }`
  );
}

export async function getResults(slug) {
  return createClient(config).fetch(
    groq`*[_type == "project" && content[].children[].text match $slug] | order(_createdAt asc){
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      related,
      is_afs_campaign
    }`,
    { slug }
  );
}

export async function getSlugs() {
  return createClient(config).fetch(
    groq`*[_type == "project"]| order(_createdAt asc) {
      "slug": slug.current,
    }`
  );
}

export async function getProjects() {
  return createClient(config).fetch(
    //groq`*[_type == "project" && slug.current == "best-selling-window-blinds-and-shades" || slug.current == "barbecue-sauce-recipe" || slug.current == "10-early-signs-of-lung-cancer" || slug.current == "electrolyte-drinks-for-hydration"] | order(_createdAt asc) {
    groq`*[_type == "project"][1...16] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  );
}

export async function getTopArticles() {
  return createClient(config).fetch(
    groq`*[_type == "project" && category == "Health"][10...15] | order(_createdAt asc){
      _id,
      _createdAt,
      category,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  );
}

export async function getRelatedArticles() {
  return createClient(config).fetch(
    groq`*[_type == "project" && category == "Health"][1...4] | order(_createdAt asc){
      _id,
      _createdAt,
      category,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  );
}

export async function getTopBlogs() {
  return createClient(config).fetch(
    groq`*[_type == "project"][80...83] {
      _id,
      _createdAt,
      name,
      category,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  );
}

export async function getProject(slug) {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          category,
          channel,
          "slug": slug.current,
          "image": image.asset->url,
          url,
          content,
          related,
          is_afs_campaign
        }`,
    { slug },
    { next: { revalidate: 1 } }
  );
}
