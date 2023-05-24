import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";
import contentList from "./contentList.ts";
import { RightCard } from "./RightCard";

import logoUnBall from "../../assets/logo-unball.png";
import { LeftCard } from "./LeftCard/index.tsx";

interface ItemList {
  title: string;
  description: string;
  responsibleMember: string;
  date: string;
}

export function TimelineComponent() {
  return (
    <Timeline position="alternate">
      {contentList.map((item: ItemList) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent variant="body2">
              <LeftCard
                date={item.date}
                responsibleMember={item.responsibleMember}
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#ffffff" }} />
              <TimelineConnector sx={{ backgroundColor: "#ffffff" }} />
            </TimelineSeparator>
            <TimelineContent>
              <RightCard title={item.title} description={item.description} />
            </TimelineContent>
          </TimelineItem>
        );
      })}
      <TimelineItem>
        <TimelineSeparator></TimelineSeparator>
        <TimelineDot sx={{ backgroundColor: "#ffffff" }}>
          <img alt="logo" src={logoUnBall} loading="lazy" width="50px"></img>
        </TimelineDot>
        <TimelineContent sx={{ m: "auto 0" }}>
          <Typography variant="h6" fontFamily="Bungee">
            Membro UnBall
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
