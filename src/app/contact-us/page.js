import React from "react";
import { Container, Box, Grid } from "../lib/mui";

const formStyles = {
  maxWidth: "400px",
  "& div": {
    color: "red",
    padding: "8px 0"
  },
  "& input[type=text]": {
    backgroundColor: "#f8f8f8",
    padding: "0 20px",
    height: "60px",
    width: "100%",
    fontSize: "15px"
  },
  "& input[type=submit]": {
    width: "188px",
    height: "50px",
    lineHeight: "50px",
    backgroundColor: "#ff4b7a",
    textAlign: "center",
    fontSize: "17px",
    fontWeight: "bold",
    color: "#fff"
  },
  "& textarea": {
    backgroundColor: "#f8f8f8",
    padding: "20px 20px",
    height: "60px",
    width: "100%",
    fontSize: "15px"
  }
};
export default async function ContactUs() {
  return (
    <Box mb={4} sx={{ minHeight: "60vh" }}>
      <Container maxWidth="lg">
        <Box mt={6} component="h1" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>Contact</span> Us
        </Box>
        <Box sx={formStyles}>
          <form>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                required
                name="name"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your email address"
                required
                name="email"
              />
            </div>
            <div>
              <textarea
                placeholder="Enter your comments"
                rows="5"
                required
                name="comments"
              />
            </div>
            <div>
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </Box>
        <Box
          mt={4}
          sx={{
            fontSize: "15px",
            color: "#666"
          }}
        >
          <Box>
            <Box>Searchiko.com</Box>
          </Box>
        </Box>
        <Box>
          <Box>Somo Media LLC</Box>
          <Box>Sharjah Media City (SHAMS), Sharjah</Box>
          <Box>UAE</Box>
        </Box>
      </Container>
    </Box>
  );
}
