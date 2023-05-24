import { Box, Typography } from "@mui/material";

interface LeftCardProps {
  date: string;
  responsibleMember: string;
}

export function LeftCard({ date, responsibleMember }: LeftCardProps) {
  return (
    <Box>
      <Typography variant="subtitle2" fontFamily="Bungee" color="#E6E6E6">
        {date}
      </Typography>
      <Typography variant="subtitle2" fontFamily="Roboto" color="#E6E6E6">
        {responsibleMember}
      </Typography>
    </Box>
  );
}
