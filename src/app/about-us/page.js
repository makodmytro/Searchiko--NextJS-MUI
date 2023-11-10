import React from "react";
import { Container, Box, Grid } from "../lib/mui";
//import map from "../../../public/map.jpg";
import albert from "../../../public/albert.jpeg";
import saurabh from "../../../public/saurabh.jpeg";
import Image from "next/image";

export default async function AboutUs() {
  return (
    <Box mb={4} sx={{ minHeight: "60vh" }}>
      <Container maxWidth="lg">
        <Box mt={6} component="h1" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>About</span> Us
        </Box>
        <Box
          mb={4}
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          The Internet offers you the luxury of buying products, choosing
          services, and exploring top classifieds from the comfort of your home.
          But with a plethora of websites all claiming to be reliable, you need
          to spend extra time and effort to verify deals and info available on
          different platforms. Or you can simply bookmark searchiko.com to find
          the best discounts, blogs, and much more in one place. Our extensive
          range of shopping and lifestyle categories feature only the top
          products, services, and classifieds. From health and fitness to
          fashion and travel, you can look up the best offers across popular
          products here. We also feature interesting reads in our dedicated blog
          section. Discover what's new in healthcare, explore the latest fitness
          trends, get expert nutrition advice, and explore smart travel hacks
          and top destinations for your next vacation.
        </Box>

        <Box>
          <Box>Searchiko.com</Box>
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            color: "#666"
          }}
        >
          <Box>Somo Media LLC</Box>
          <Box>Sharjah Media City (SHAMS), Sharjah</Box>
          <Box>UAE</Box>
          {/*
           <Box mt={2}>
            <Image src={map} alt="Map" />
          </Box>
          
          */}
        </Box>
        <Box mt={6} component="h2" sx={{ fontWeight: "bold" }}>
          Team
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3}>
            <Box my={2}>
              <Image
                src={saurabh}
                alt="Saurabh"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover"
                }}
              />
            </Box>
            <Box sx={{ textAlign: "center", fontWeight: "bold" }}>
              Saurabh Goel
            </Box>
            <Box sx={{ textAlign: "center", color: "#777" }}>Founder</Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box my={2}>
              <Image
                src={albert}
                alt="Albert"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover"
                }}
              />
            </Box>
            <Box sx={{ textAlign: "center", fontWeight: "bold" }}>
              Albert Roiterstein
            </Box>
            <Box sx={{ textAlign: "center", color: "#777" }}>
              Lead Media Buyer
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
