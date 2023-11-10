import React from "react";
import { Container, Box, Grid } from "../lib/mui";

export default async function Privacy() {
  return (
    <Box mb={4} sx={{ minHeight: "60vh" }}>
      <Container maxWidth="lg">
        <Box mt={6} component="h1" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>Privacy</span> Policy
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          This page informs you of our policies regarding the collection, use
          and disclosure of Personal Information we receive from users of the
          Site. We use your Personal Information only for providing and
          improving the Site. By using the Site, you agree to the collection and
          use of information in accordance with this policy.
        </Box>
        <Box mt={3} component="h3" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>
            Information Collection and Use
          </span>
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          While using our Site, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. Personally identifiable information may include, but is
          not limited to your name ("Personal Information").
        </Box>
        <Box mt={3} component="h3" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>Log Data</span>
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          Like many site operators, we collect information that your browser
          sends whenever you visit our Site ("Log Data"). This Log Data may
          include information such as your computer's Internet Protocol ("IP")
          address, browser type, browser version, the pages of our Site that you
          visit, the time and date of your visit, the time spent on those pages
          and other statistics. In addition, we may use third party services
          such as Google Analytics that collect, monitor and analyze.
        </Box>
        <Box mt={3} component="h3" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>Communications</span>
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          We may use your Personal Information to contact you with newsletters,
          marketing or promotional materials, freebies and contest updates.
        </Box>
        <Box mt={3} component="h3" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>Cookies</span>
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          Cookies are files with small amount of data, which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          web site and stored on your computer's hard drive. Like many sites, we
          use "cookies" to collect information. You can instruct your browser to
          refuse all cookies or to indicate when a cookie is being sent.
          However, if you do not accept cookies, you may not be able to use some
          portions of our Site.
        </Box>
        <Box mt={3} component="h3" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>Security</span>
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          The security of your Personal Information is important to us but
          remember that no method of transmission over the Internet, or method
          of electronic storage, is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </Box>
        <Box mt={3} component="h3" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>
            Changes To This Privacy Policy
          </span>
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          This Privacy Policy is effective and will remain in effect except with
          respect to any changes in its provisions in the future, which will be
          in effect immediately after being posted on this page. We reserve the
          right to update or change our Privacy Policy at any time and you
          should check this Privacy Policy periodically. Your continued use of
          the Service after we post any modifications to the Privacy Policy on
          this page will constitute your acknowledgment of the modifications and
          your consent to abide and be bound by the modified Privacy Policy. If
          we make any material changes to this Privacy Policy, we will notify
          you either through the email address you have provided us, or by
          placing a prominent notice on our website.
        </Box>
        <Box mt={3} component="h3" sx={{ fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>Contact Us</span>
        </Box>
        <Box
          mb={3}
          sx={{
            fontSize: "15px",
            lineHeight: 1.73,
            color: "#666"
          }}
        >
          If you have any questions about this Privacy Policy, please contact
          us.
        </Box>
        <Box
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
