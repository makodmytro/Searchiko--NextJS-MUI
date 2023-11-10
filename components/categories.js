import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, MenuItem, Popper } from "@mui/material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = {
  color: "#fff",
  fontWeight: '800',
  top: "12px",
  position: "relative",
  background: "#0b1d66",
  borderRadius: "8px",
  boxShadow: "0px 0px 6px #e2e2e2",
  padding: "8px 0",
  "& span:first-child": {
    top: "2px",
    position: "relative"
  },
  "& span:nth-child(2)": {
    marginLeft: "8px",
    fontSize: "0.875rem",
    fontFamily: "Montserrat"
  }
};

export default function Categories() {
  const matches = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  function Arrows() {
    if (open) {
      return <KeyboardArrowUpIcon />;
    } else {
      return <KeyboardArrowDownIcon />;
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <Box
          sx={{
            marginRight: "4px"
          }}
        >
          {matches ? null : "Categories"}
        </Box>
        <Box sx={{ marginTop: "4px", color: matches ? "#333" : "#fff" }}>
          {matches ? <MenuIcon /> : <Arrows />}
        </Box>
      </Box>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        disablePortal={true}
        sx={{ zIndex: 2 }}
      >
        <Box sx={menuItems}>
          <MenuItem onClick={handleClose}>
            <Link href="/search/health" style={{fontWeight: '800'}}>Health</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/search/finance" style={{fontWeight: '800'}}>Finance</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/search/food" style={{fontWeight: '800'}}>Food</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/search/cars" style={{fontWeight: '800'}}>Cars</Link>
          </MenuItem>
        </Box>
      </Popper>
    </Box>
  );
}
