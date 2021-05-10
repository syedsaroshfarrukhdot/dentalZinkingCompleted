import React from 'react'
import "../footer/footer.scss"
import tickIcon from "../../images/haken_green.png"

export default function Footer() {
    return (
        <div id="footer">
            <div className="footer_wrapper desktoponlycss">
                <div className="footer_element footer_element_margin_left" id="footer_element_left">
                    <img className="footer_check_icon" src={tickIcon}></img>
                    100% kostenlos & unverbindlich
                </div>
                <div className="footer_element footer_element_margin_left" id="footer_element_middle">
                    <img className="footer_check_icon" src={tickIcon}></img>
                    Absolute Datensicherheit
                </div>
                <div className="footer_element" id="footer_element_right">
                    <img className="footer_check_icon" src={tickIcon}></img>
                    Vom Fachmann aus der Region
                </div>
            </div>
            <div id="footer_disclamier">
                <span>
                *Rechtlicher Hinweis: Der Service ist für Sie komplett kostenfrei und unverbindlich. Wir finanzieren den Service über die Provision unserer Anbieter.
                </span>
            </div>
            <div id="footer_link_bar">
                <a href="https://einfach-zum-angebot.de/impressum/">Impressum</a>
                &nbsp;-&nbsp;  
                <a href=" https://einfach-zum-angebot.de/datenschutzerklaerung/">Datenschutz</a>  
            </div>
            
        </div>
    )
}
