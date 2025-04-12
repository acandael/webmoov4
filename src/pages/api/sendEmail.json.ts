import type { APIRoute } from "astro";
import { Resend } from "resend";
import { render } from "@react-email/render";
import SampleEmail from "../../emails/SampleEmail";
import * as React from "react";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        error: "Missing required fields",
      }),
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  try {
    const finalHtml = await render(
      React.createElement(SampleEmail, {
        name,
        email,
        phone,
        message,
      }),
      {
        pretty: true,
      }
    );

    const finalText = await render(
      React.createElement(SampleEmail, {
        name,
        email,
        phone,
        message,
      }),
      {
        plainText: true,
      }
    );

    const send = await resend.emails.send({
      from: "info@webmoov.be",
      to: "info@webmoov.be", // Send to your own email address
      subject: `Nieuw contactformulier bericht van ${name}`,
      html: finalHtml,
      text: finalText,
    });

    if (send.data) {
      return new Response(
        JSON.stringify({
          message: "Email sent successfully",
        }),
        {
          status: 200,
          statusText: "OK",
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: send.error,
        }),
        {
          status: 500,
          statusText: "Internal Server Error",
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};
