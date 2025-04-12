import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface SampleEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const SampleEmail = ({
  name,
  email,
  phone,
  message,
}: SampleEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Nieuw contactformulier bericht van {name}</Preview>
      <Container style={container}>
        <Img
          src="logo.png"
          width="200"
          height="auto"
          alt="Webmoov"
          style={logo}
        />
        <Text style={paragraph}>Beste Webmoov team,</Text>
        <Text style={paragraph}>
          Er is een nieuw bericht ontvangen via het contactformulier:
        </Text>
        <Section style={messageSection}>
          <Text style={label}>Van:</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>

          {phone && (
            <>
              <Text style={label}>Telefoon:</Text>
              <Text style={value}>{phone}</Text>
            </>
          )}

          <Text style={label}>Bericht:</Text>
          <Text style={value}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Dit bericht is automatisch verzonden via het contactformulier op
          webmoov.be
        </Text>
      </Container>
    </Body>
  </Html>
);

SampleEmail.PreviewProps = {
  name: "John Doe",
  email: "john@example.com",
  phone: "0498163250",
  message: "Dit is een testbericht via het contactformulier.",
} as SampleEmailProps;

export default SampleEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
  display: "block",
  maxWidth: "200px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const messageSection = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "5px",
  margin: "20px 0",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#666",
  margin: "10px 0 5px",
};

const value = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 15px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
