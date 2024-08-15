"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Cards from "@/components/Cards";

export default function DisplayCard({ tittle }) {
  // sample data
  const [data, setData] = useState([
    { front: "front1", back: "back1" },
    // { front: "front2", back: "back2" },
  ]);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        width="90vw"
        height="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Stack
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Box width="100%" height="10%">
            <Typography variant="h2">{tittle}</Typography>
          </Box>
          <Box
            width="100%"
            height="90%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            {data.map((item, index) => (
              <Box
                key={index}
                width="60%"
                height="60%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Cards front={item.front} back={item.back} />
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
