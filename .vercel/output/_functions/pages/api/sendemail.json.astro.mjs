import { Resend } from 'resend';
import { render } from '@react-email/render';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Html, Head, Body, Preview, Container, Img, Text, Section, Hr } from '@react-email/components';
import * as React from 'react';
export { renderers } from '../../renderers.mjs';

const SampleEmail = ({
  name,
  email,
  phone,
  message
}) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsxs(Body, { style: main, children: [
    /* @__PURE__ */ jsxs(Preview, { children: [
      "Nieuw contactformulier bericht van ",
      name
    ] }),
    /* @__PURE__ */ jsxs(Container, { style: container, children: [
      /* @__PURE__ */ jsx(
        Img,
        {
          src: "logo.png",
          width: "200",
          height: "auto",
          alt: "Webmoov",
          style: logo
        }
      ),
      /* @__PURE__ */ jsx(Text, { style: paragraph, children: "Beste Webmoov team," }),
      /* @__PURE__ */ jsx(Text, { style: paragraph, children: "Er is een nieuw bericht ontvangen via het contactformulier:" }),
      /* @__PURE__ */ jsxs(Section, { style: messageSection, children: [
        /* @__PURE__ */ jsx(Text, { style: label, children: "Van:" }),
        /* @__PURE__ */ jsx(Text, { style: value, children: name }),
        /* @__PURE__ */ jsx(Text, { style: label, children: "Email:" }),
        /* @__PURE__ */ jsx(Text, { style: value, children: email }),
        phone && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Text, { style: label, children: "Telefoon:" }),
          /* @__PURE__ */ jsx(Text, { style: value, children: phone })
        ] }),
        /* @__PURE__ */ jsx(Text, { style: label, children: "Bericht:" }),
        /* @__PURE__ */ jsx(Text, { style: value, children: message })
      ] }),
      /* @__PURE__ */ jsx(Hr, { style: hr }),
      /* @__PURE__ */ jsx(Text, { style: footer, children: "Dit bericht is automatisch verzonden via het contactformulier op webmoov.be" })
    ] })
  ] })
] });
SampleEmail.PreviewProps = {
  name: "John Doe",
  email: "john@example.com",
  phone: "0498163250",
  message: "Dit is een testbericht via het contactformulier."
};
const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
const container = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
const logo = {
  margin: "0 auto",
  display: "block",
  maxWidth: "200px"
};
const paragraph = {
  fontSize: "16px",
  lineHeight: "26px"
};
const messageSection = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "5px",
  margin: "20px 0"
};
const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#666",
  margin: "10px 0 5px"
};
const value = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 15px"
};
const hr = {
  borderColor: "#cccccc",
  margin: "20px 0"
};
const footer = {
  color: "#8898aa",
  fontSize: "12px"
};

const resend = new Resend("re_AqR6gvyd_6XR7xbZexZFivut2kfAwECvd");
const POST = async ({ request }) => {
  const body = await request.json();
  const { name, email, phone, message, subject } = body;
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        error: "Missing required fields"
      }),
      {
        status: 400,
        statusText: "Bad Request"
      }
    );
  }
  try {
    const finalHtml = await render(
      React.createElement(SampleEmail, {
        name,
        email,
        phone,
        message
      }),
      {
        pretty: true
      }
    );
    const finalText = await render(
      React.createElement(SampleEmail, {
        name,
        email,
        phone,
        message
      }),
      {
        plainText: true
      }
    );
    const send = await resend.emails.send({
      from: "info@webmoov.be",
      to: "info@webmoov.be",
      // Send to your own email address
      subject: subject || `Nieuw contactformulier bericht van ${name}`,
      html: finalHtml,
      text: finalText
    });
    if (send.data) {
      return new Response(
        JSON.stringify({
          message: "Email sent successfully"
        }),
        {
          status: 200,
          statusText: "OK"
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: send.error
        }),
        {
          status: 500,
          statusText: "Internal Server Error"
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to send email"
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
