import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import "./index.css";
import WhiteLogo from "./whiteLogo.png";

const contactData = {
  address: "9094 Bay Meadows Street Conyars, GA 30012",
  phone: {
    phone1: "+229-955-5388-336",
    phone2: "+229-955-5373-360",
  },
  email: {
    email1: "office@mail.com",
    email2: "support@mail.com",
  },
};

const menuData = {
  slogan: "",
  menu: ["Terms of Service", "Contact Us", "About", "Recent Posts"],
};

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="mainRow">
        <Row className="contact">
          <Col className="address">
            <Row className="footerIcons">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Row>
            <Row>{contactData.address}</Row>
          </Col>
          <Col className="phone">
            <Row className="footerIcons">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Row>
            <Row>{contactData.phone.phone1}</Row>
            <Row>{contactData.phone.phone2}</Row>
          </Col>
          <Col className="email">
            <Row className="footerIcons">
              <FontAwesomeIcon icon={faEnvelope} />
            </Row>
            <Row>{contactData.email.email1}</Row>
            <Row>{contactData.email.email2}</Row>
          </Col>
        </Row>
        <Col lg={4} className="menu">
          <Row className="name">{menuData.slogan}</Row>
          <Row className="menuItems">
            {menuData.menu.map((menuitem) => (
              <Col>{menuitem}</Col>
            ))}
          </Row>
        </Col>
        <Col className="whiteLogo">
          <Image src={WhiteLogo} alt="logo" width="160px" height="90px" />
        </Col>
      </Row>
    </Container>
  );
}
