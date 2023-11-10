"use client";
import React, { useRef } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import Categories from "./categories";
import { useRouter } from "next/navigation";
import { Toolbar, Container, AppBar, Box, Button } from "../src/app/lib/mui";
import { usePathname } from "next/navigation";

const header = {
  backgroundColor: '#0c173a'
}

const menu = {
  flexGrow: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "#fff",
  fontWeight: "600",
  height: "64px",
  background: "#0c173a",
  "@media (max-width: 600px)": {
    background: "none"
  }
};

const barStyles = {
  background: "#0c173a",
  transition: "0.5s",
  boxShadow: "none"
};

const searchBarContainer = {
  display: "flex",
  paddingX: "32px",
  "@media (max-width: 600px)": {
    paddingLeft: "16px",
    paddingRight: 0
  }
};

export default function Header() {
  const inputRef = useRef();
  const router = useRouter();
  const pathname = usePathname();

  const handleKeyDown = (event) => {
    const urlRedirect = pathname.includes("/afs")
      ? `/afs/${inputRef.current.value}`
      : `/search/${inputRef.current.value}`;
    if (event.key === "Enter") {
      router.push(urlRedirect);
    }
  };
  return (
    <Box sx={header}>
      <AppBar position="static" color="transparent" sx={barStyles}>
        <Container maxWidth="lg">
          <Toolbar disableGutters={true} sx={{ height: "64px" }}>
            <Box component="div" sx={{ flexGrow: 1, padding: "12px 0" }}>
              <Link href="/">
                <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>
                  <img
                    src="/logo.png"
                    alt="Searchiko"
                    width={218}
                    height={50}
                    style={{
                      objectFit: "cover"
                    }}
                  />
                  
                </Box>
              </Link>
            </Box>
            <Box sx={menu}>
              <Box sx={{
                marginRight: '30px',
                cursor: 'pointer',
                '@media (max-width: 1100px)': {
                  display: 'none'
                }
              }}>About Us</Box>
              <Box sx={{
                marginRight: '30px',
                cursor: 'pointer',
                '@media (max-width: 1100px)': {
                  display: 'none'
                }
              }}>Contact Us</Box>
              <Box sx={{
                marginRight: '30px',
                cursor: 'pointer',
                '@media (max-width: 1100px)': {
                  display: 'none'
                }
              }}>Privacy Policy</Box>
              <Categories />
              <Box sx={searchBarContainer}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    background: "#fff",
                    border: "1px solid #dfe1e5",
                    boxShadow: "none",
                    borderRadius: "24px",
                    maxWidth: "300px",
                    padding: "6px 8px 6px"
                  }}
                >
                  <Box sx={{ color: "#777", marginRight: "4px" }}>
                    <SearchIcon />
                  </Box>
                  <Box display="flex" sx={{ flex: 1 }} width="100%">
                    <input
                      ref={inputRef}
                      onKeyDown={handleKeyDown}
                      type="text"
                      placeholder="Search..."
                      style={{
                        fontSize: "14px",
                        border: "none",
                        flex: "100%",
                        outline: "none",
                        width: "100%",
                        resize: "none",
                        backgroundColor: "transparent"
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
