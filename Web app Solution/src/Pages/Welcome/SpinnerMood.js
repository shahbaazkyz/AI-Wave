import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(80);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <SentimentVeryDissatisfiedIcon />
        <Slider
          aria-label="Temperature"
          value={value}
          onChange={handleChange}
          
        />
        <EmojiEmotionsIcon />
      </Stack>
    </Box>
  );
}
