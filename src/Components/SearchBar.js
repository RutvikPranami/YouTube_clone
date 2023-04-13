import { SearchRounded } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1.5px solid black",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 'auto' },
        ml: { sm: "auto", md: 20, lg: 40 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        title="Search"
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" ,background:"lightGray" }} title="Search">
        <SearchRounded />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
