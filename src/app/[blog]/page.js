import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  getProject,
  getTopArticles,
  getRelatedArticles
} from "../../../sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Container, Box, Grid } from "../../../src/app/lib/mui";
import RelatedSearchesAfs from "../../../components/related-search";

const keywordStyle = {
  color: "#1a0dab",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  wordBreak: "break-word",
  padding: "15px 90px 15px 40px",
  height: "100%",
  fontSize: "18px",
  lineHeight: "27px",
  fontWeight: "600",
  textTransform: "capitalize",
  position: "relative",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 10
};

const ulStyle = {
  margin: "4px 0 16px 0",
  listStyleType: "none",
  borderTop: "1px solid #ddd",
  padding: 0
};

const list = {
  lineHeight: "normal",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  transition: " opacity .65s",
  borderBottom: "1px solid #ddd",
  "&: hover": {
    textDecoration: "underline"
  }
};

const articleBlock = {
  marginBottom: "32px",
  display: "flex",
  backgroundColor: "#f8f8f8",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    transition: "all 0.3s ease-in-out",
    backgroundColor: "#fff",
    boxShadow: "0 46px 33px -21px rgba(0, 0, 0, 0.08)",
    "& h4": {
      color: "#ff4b7a",
      textDecoration: "underline"
    }
  }
};

const main = {
  display: "flex",
  flexDirection: "row",
  "@media (max-width:780px)": {
    flexDirection: "column"
  }
};

const leftColumn = {
  marginBottom: "32px",
  width: "65%",
  "@media (max-width:780px)": {
    width: "100%"
  },
  "& h1": {
    margin: "10px 0 24px 0"
  }
};

const rightColumn = {
  marginBottom: "32px",
  width: "32%",
  paddingLeft: "3%",
  "@media (max-width:780px)": {
    width: "100%",
    paddingLeft: 0
  }
};
const shortText = {
  fontSize: "15px",
  lineHeight: "1.67",
  color: "#666",
  maxHeight: "55px",
  overflow: "hidden"
};

const topName = {
  fontSize: "20px",
  height: "52px",
  overflow: "hidden",
  margin: 0
};

const topCategory = {
  color: "#ff4b7a",
  fontWeight: "600"
};

export default async function Blog({ params }) {
  const slug = params.blog;
  const project = await getProject(slug);
  const topArticles = await getTopArticles();
  const relatedArticles = await getRelatedArticles();

  const components = {
    types: {
      keywordslist: ({ value }) => {
        return (
          <Box>
            <Box my={5}>
              <Box
                sx={{ fontSize: "14px", fontWeight: "600", color: "#242e54" }}
              >
                Related Topics (Ads)
              </Box>
              <Box component="ul" sx={ulStyle}>
                {value.keywords.map((item) => (
                  <Box component="li" key={item.keyword}>
                    <Box sx={list}>
                      <Box
                        component="a"
                        sx={keywordStyle}
                        href={`${
                          project.is_afs_campaign
                            ? `/afs/${item.keyword}?cn=${project.channel}`
                            : item.url
                        }`}
                      >
                        {item.keyword}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        );
      }
    }
  };

  return (
    <>
      <Box mt={4}>
        <Container maxWidth="lg">
          <Box sx={main}>
            <Box sx={leftColumn}>
              {project.category && (
                <Box sx={topCategory}>{project.category}</Box>
              )}
              <Box component="h1">{project.name}</Box>
              <Box>
                <PortableText
                  value={project.content}
                  // components={components}
                />
              </Box>
            </Box>
            {project.related ? (
              <Box sx={rightColumn}>
                <Box mb={4} sx={{ fontSize: "32px" }}>
                  <span style={{ fontWeight: "bold" }}>Top</span> Articles
                </Box>
                <Box>
                  {topArticles.map((item) => (
                    <Box key={item._id}>
                      <Link href={item.slug}>
                        <Box sx={articleBlock}>
                          <Box
                            sx={{
                              width: "40%",
                              height: "128px",
                              position: "relative"
                            }}
                          >
                            {item.image && (
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill={true}
                                style={{
                                  // width: "100%",
                                  //maxHeight: "180px",
                                  objectFit: "cover"
                                }}
                              />
                            )}
                          </Box>
                          <Box width="60%" sx={{ padding: "0 30px" }}>
                            {item.category && (
                              <Box sx={topCategory}>{item.category}</Box>
                            )}
                            <Box component="h4" sx={topName}>
                              {item.name}
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : null}
          </Box>
          {project.related ? (
            <Box mb={4}>
              <Box mb={4} sx={{ fontSize: "32px" }}>
                <span style={{ fontWeight: "bold" }}>Related</span> Articles
              </Box>
              <Box>
                <Grid container spacing={4}>
                  {relatedArticles.map((item) => (
                    <Grid key={item._id} item xs={12} md={4}>
                      <Link href={item.slug}>
                        <Box sx={articleBlock}>
                          <Box
                            sx={{
                              width: "40%",
                              height: "128px",
                              position: "relative"
                            }}
                          >
                            {item.image && (
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill={true}
                                style={{
                                  // width: "100%",
                                  //maxHeight: "180px",
                                  objectFit: "cover"
                                }}
                              />
                            )}
                          </Box>
                          <Box width="60%" sx={{ padding: "0 30px" }}>
                            {item.category && (
                              <Box sx={topCategory}>{item.category}</Box>
                            )}
                            <Box component="h4" sx={topName}>
                              {item.name}
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          ) : null}
          {/*<Image src={project.image} alt={project.name} width={640} height={427} />*/}
        </Container>
      </Box>
      <Script src="https://trk.tckingdminrdtrk.com/uniclick.js?attribution=lastpaid&cookiedomain=&cookieduration=90&defaultcampaignid=&regviewonce=false" />
      <Script src="/trk.js" />
    </>
  );
}
