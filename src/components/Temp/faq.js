import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "Fragen und Antworten",
  rows: [
    {
      title: "Welche Vorteile bringt mir eine Zahnzusatz­versicherung?",
      content: `Die gesetzliche Kranken­versicherung leistet im Bereich der Zahnvorsorge noch eingeschränkt. 
            Sie erhalten meist nur einfache Zahnleistungen, die nicht langfristig sind. Mit einer Zahnzusatz­versicherung erhalten Sie alle Premium-Leistungen für perfekte Zähne - ein Leben lang.`,
    },
    {
      title: "Welche Kosten entstehen für eine Zahnzusatz­versicherung?",
      content:
        "Die Kosten richten sich nach Ihrem Alter und dem Leistungswunsch - nutzen Sie unseren kostenfreien Tarifvergleich - wir bieten hohe Ersparnisse sowie günstigste Beiträge.",
    },
    {
      title: "Was ist wenn mir bereits Zähne fehlen?",
      content: `Auch bei bereits fehlenden Zähnen bieten wir eine perfekte Möglichkeit Ihre Zähne abzusichern. Wir unterbreiten Ihnen ein kostenfreies Angebot. `,
    },
  ],
};

const styles = {
  bgColor: "#F6F6F6",
  titleTextColor: "#666",
  titleTextSize: "16px !important",
  rowTitleColor: "#666",
  // rowTitleTextSize: 'medium',
  rowContentColor: "#666",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "20px",
  // rowContentPaddingLeft: '50px',
  // rowContentPaddingRight: '150px',
  // arrowColor: "red",
  //transitionDuration: "1s",
  timingFunc: "ease",
};

const config = {
  animate: true,
  //arrowIcon: "V",
  tabFocus: true,
};

export default function FaqQuestion() {
  return (
    <div className="faq-parent">
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
