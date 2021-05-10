import React, { Component } from "react";
import { Button, Collapse } from "react-bootstrap";
import MultiStep from "../form/MultiStepForm";
import FaqQuestion from "./faq";
import "./temp.css";

class Temp3 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Search",
      showHiddropdown1: false,
      showHiddropdown2: false,
      showHiddropdown3: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHiddropdown1":
        this.setState({ showHiddropdown1: !this.state.showHiddropdown1 });
        break;
      case "showHiddropdown2":
        this.setState({ showHiddropdown2: !this.state.showHiddropdown2 });
        break;
      case "showHiddropdown3":
        this.setState({ showHiddropdown3: !this.state.showHiddropdown3 });
        break;
    }
  }
  render() {
    const { showHiddropdown1 } = this.state;
    const { showHiddropdown2 } = this.state;
    const { showHiddropdown3 } = this.state;
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>
            McMakler &gt;&gt; Ihr Immobilienmakler für den Immobilienverkauf
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
        </head>
        <body>
          <section className="header">
            <div class="container-fluid">
              <div class="container">
                <div class="row">
                  <div class="col-xs-6 col-sm-5 col-md-4 col-lg-3">
                    <img
                      src="/logo.png"
                      class="logoimg"
                      alt="Logo zahnzusatz-koenig.de"
                    />
                  </div>
                  <div class="col-xs-4 col-xs-offset-2 col-sm-3 col-sm-offset-4 col-md-2 col-md-offset-6 col-lg-2 col-lg-offset-7">
                    <img src="/stoerer.png" class="logoimg2" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="content"
          ></section>
          <section class="content2">
            <div class="text-center">
              <h1>Privatleistungen beim Zahnarzt</h1>
              <p>
                Jetzt in wenigen Schritten zu Ihrem
                <br />
                <strong>Angebot aus 5 TOP-Tarifen 2021</strong>
              </p>
            </div>
          </section>

        
            <MultiStep />
         

          <FaqQuestion />
          {/* <section class="content3">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2">
              <h3 class="text-center">Fragen und Antworten</h3>
              <div class="panel-group">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="c"
                        role="button"
                        onClick={() => this.hideComponent("showHiddropdown1")}
                      >
                        Welche Vorteile bringt mir eine Zahnzusatz­versicherung?
                      </a>
                    </h4>
                  </div>
                  {showHiddropdown1 && (
                    <div class="panel-collapse">
                      <div class="panel-body">
                        <p>
                          Die gesetzliche Kranken­versicherung leistet im
                          Bereich der Zahnvorsorge noch eingeschränkt. Sie
                          erhalten meist nur einfache Zahnleistungen, die nicht
                          langfristig sind. Mit einer Zahnzusatz­versicherung
                          erhalten Sie alle Premium-Leistungen für perfekte
                          Zähne - ein Leben lang.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="c"
                        role="button"
                        onClick={() => this.hideComponent("showHiddropdown2")}
                      >
                        Welche Kosten entstehen für eine
                        Zahnzusatz­versicherung?
                      </a>
                    </h4>
                  </div>
                  {showHiddropdown2 && (
                    <div class="panel-collapse">
                      <div class="panel-body">
                        <p>
                          Die Kosten richten sich nach Ihrem Alter und dem
                          Leistungswunsch - nutzen Sie unseren kostenfreien
                          Tarifvergleich - wir bieten hohe Ersparnisse sowie
                          günstigste Beiträge.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        class="c"
                        role="button"
                        onClick={() => this.hideComponent("showHiddropdown3")}
                      >
                        Was ist wenn mir bereits Zähne fehlen?
                      </a>
                    </h4>
                  </div>
                  {showHiddropdown3 && (
                    <div class="panel-collapse">
                      <div class="panel-body">
                        <p>
                          Auch bei bereits fehlenden Zähnen bieten wir eine
                          perfekte Möglichkeit Ihre Zähne abzusichern. Wir
                          unterbreiten Ihnen ein kostenfreies Angebot.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section> */}
          <section class="footer">
            <div className="row">
              <div class="col-xs-12 col-sm-6 f-left">
                {" "}
                © 2021 zahnzusatz-koenig.de
              </div>
              <div class="col-xs-12 col-sm-6 f-right">
                {" "}
                <a>Datenschutz</a> |<a>Impressum</a>
              </div>
            </div>
          </section>
        </body>
      </html>
    );
  }
}

export default Temp3;
