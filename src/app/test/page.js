import React from "react";
import Link from "next/link";
import Script from "next/script";
import { getAllArticles } from "../../../sanity/schemas/sanity-utils";
import Image from "next/image";
import { Container, Box, Grid } from "../../../src/app/lib/mui";

const keywordStyle = {
  color: "#1a1dab",
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
  fontSize: "18px",
  height: "52px",
  overflow: "hidden",
  margin: 0
};

const topCategory = {
  color: "#ff4b7a",
  fontWeight: "600"
};

export default async function Blog() {
  const results = await getAllArticles();
  console.log(results.length);

  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Box sx={main}>
          <Box sx={leftColumn}>
            <Box mb={2} sx={{ fontSize: "18px" }}>
              Results
            </Box>
            <Box>
              {results.map((item) => (
                <Box key={item._id}>
                  <Box sx={articleBlock}>
                    <Box width="100%" sx={{ padding: "0 30px" }}>
                      {item.category && (
                        <Box mt={2} sx={topCategory}>
                          {item.category}
                        </Box>
                      )}
                      <Box component="h4" sx={topName}>
                        {item.name}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/*<Image src={project.image} alt={project.name} width={640} height={427} />*/}
      </Container>
      <Script src="https://trk.tckingdminrdtrk.com/uniclick.js?attribution=lastpaid&cookiedomain=&cookieduration=90&defaultcampaignid=&regviewonce=false" />
      <Script src="/trk.js" />
    </Box>
  );
}
