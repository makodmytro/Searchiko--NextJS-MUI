import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Box, Grid } from "../src/app/lib/mui";
import { getTopBlogs } from "../sanity/schemas/sanity-utils";

const footer = {
  padding: "32px 0",
  "@media (max-width:899px)": {
    padding: "48px 0"
  }
};

const footerLinks = {
  color: "#fff",
  fontSize: "16px",
  marginBottom: "0",
  "@media (max-width:899px)": {
    marginBottom: "32px"
  },
  "& a:hover": {
    textDecoration: "underline"
  }
};

const articleBlock = {
  marginBottom: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 46px 33px -21px rgba(0, 0, 0, 0.08)",
    "& h4": {
      color: "#ff4b7a"
    }
  }
};

const topName = {
  fontWeight: "400",
  fontSize: "16px",
  height: "40px",
  overflow: "hidden",
  margin: 0
};

const Footer = async () => {
  const topBlogs = await getTopBlogs();
  return (
    <Box sx={{ background: "#0c173a", paddingY: "48px" }}>
      <Container maxWidth="lg">
        <Box sx={{ color: "#FFFFFF" }}>
          <Grid container columnSpacing={12} justifyContent="space-between">
            <Grid item xs={12} sm={4}>
              <Box mb={3} sx={{ fontSize: "28px", fontWeight: "bold" }}>
                <Box
                  sx={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "#ffffff"
                  }}
                >
                  Searchiko
                  {/*
                   <Image
                    src="/logo-invert.jpg"
                    alt="Searchiko"
                    width={218}
                    height={50}
                    //fill={true}
                    style={{
                      //maxHeight: "180px",
                      objectFit: "cover"
                    }}
                  />
                   */}
                </Box>
              </Box>
              <Box>
                With a plethora of websites all claiming to be reliable, you
                need to spend extra time and effort to verify deals and info
                available on different platforms. Simply bookmark Searchiko.com
                to find the best discounts, blogs, and much more in one place.
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                mt={1}
                sx={{
                  marginBottom: "38px",
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                Quick Links
              </Box>
              <Box mb={3}>
                <Link href="/contact-us">Contact Us</Link>
              </Box>
              <Box mb={3}>
                <Link href="/about-us">About Us</Link>
              </Box>
              <Box mb={3}>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Box>
            </Grid>
            {/*
             <Grid item xs={12} sm={4}>
              <Box
                mt={1}
                sx={{
                  marginBottom: "38px",
                  fontSize: "28px",
                  fontWeight: "bold"
                }}
              >
                Top Blogs
              </Box>
              <Box>
                {topBlogs.map((item) => (
                  <Box key={item._id}>
                    <Link href={item.slug}>
                      <Box sx={articleBlock}>
                        <Box
                          sx={{
                            width: "30%",
                            height: "60px",
                            position: "relative"
                          }}
                        >
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
                        </Box>
                        <Box width="70%" sx={{ padding: "0 16px" }}>
                          <Box component="h4" sx={topName}>
                            {item.name}
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            */}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
