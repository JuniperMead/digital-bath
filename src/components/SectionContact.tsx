import { Container } from "react-bootstrap";

const SectionContact = () => {
  return (
    <Container className="sectionContact" fluid>
      <a
        className="contactLink"
        href="https://digital-bath.s3.ap-southeast-2.amazonaws.com/resume.pdf"
      >
        R É S U M É
      </a>
      <a className="contactLink" href="mailto:contact@digital-bath.net">
        C O N T A C T
      </a>
      <br />
      <div className="contactText">
        available for consultation
        <br />
        not open to new opportunities
        <br />
        thank you for visiting
      </div>
    </Container>
  );
};
export default SectionContact;
