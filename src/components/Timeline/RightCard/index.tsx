import { Typography, Box } from "@mui/material";

interface RightCardProps {
  title: string;
  description: string;
}

export function RightCard({ title, description }: RightCardProps) {
  return (
    <Box
      sx={{
        height: "fit-content",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        margin: 0,
        paddingTop: "1em",
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
        paddingBottom: "1.5em",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h5"
        fontSize="md"
        sx={{ marginBottom: "3px", textShadow: "0 0 6px rgba(0, 0, 0, 0.1)" }}
        fontFamily="Bungee"
        textAlign="left"
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        lineHeight="1.5"
        fontFamily="Roboto"
        textAlign="left"
      >
        {description}
      </Typography>
    </Box>
  );
}
