import { React } from "react";
import "./style.css";
import "./style-short.css"
import logoPositivo from "../../img/logo/positivo.svg";
import logo from "../../img/logo/originale.jpeg"
import instagram from "../../img/instagram.svg"
import facebook from "../../img/facebook.svg"

export const Footer = () => {
  return (
    <>
      <div className="footer">

        <div className="col col-1">
          <img
            className="logo-positivo"
            alt="Logo positivo"
            src={logoPositivo}
          />
          <div className="line" />
        </div>

        <div className="col col-2">
          <div className="desc-col">
            <div className="sede-legale-titolo">SEDE LEGALE</div>
            <p className="sede-legale">
              C’è campo ODV
              <br />
              Via del Muredel, 59, Trento (TN), Italia
            </p>
          </div>
          <div className="line" />
        </div>

        <div className="col col-3">
          <div className="dati-fiscali-container">
            <p className="dati-fiscali">
              CODICE FISCALE 9603 4110229
              <br />
              IBAN IT08D830401811000011302588
              <br />
              cecampo.odv@gmail.com
            </p>
          </div>
          <div className="line" />
        </div>

        <div className="col col-4">
          <div className="social-container">
            <div className="social-network">SOCIAL NETWORK</div>
            <div className="loghi">
              <img className="facebook" alt="Facebook" src={facebook} />
              <div></div>
              <img className="instagram" alt="Instagram" src={instagram} />
            </div>
          </div>
        </div>

      </div>

      <div className="footer-short-container">
        <div className="footer-short">
          <img className="logo" alt="Logo" src={logo} />
          <div className="desc-associazione">
            <p className="text-wrapper">
              C’è campo ODV
              <br />
              Via del Muredel, 59, Trento (TN), Italia
              <br />
              cecampo.odv@gmail.com
            </p>
          </div>
          <div className="loghi">
            <img className="facebook" alt="Facebook" src={facebook} />
            <div></div>
            <img className="instagram" alt="Instagram" src={instagram} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;