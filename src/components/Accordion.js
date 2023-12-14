import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Why is travelling important?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Travelling is important as it teaches us a lot of things. You can
            learn new skills, new languages, new cultures. Moreover, you get to
            make new friends and try out new foods when you travel to a new
            place. It can be a real learning experience for all.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            How is travelling different now?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Travelling has changed drastically thanks to technology. Earlier,
            people had to take animals to travel to a new place and it would be
            time-consuming. Now, there are many transport options available that
            help you reach within no time. Further, the internet has made
            travelling easier by offering maps, translation apps, food services,
            cab services, etc. available at our fingertips.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
