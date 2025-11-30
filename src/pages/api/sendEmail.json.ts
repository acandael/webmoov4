import type { APIRoute } from "astro";
import { Resend } from "resend";
import { render } from "@react-email/render";
import SampleEmail from "../../emails/SampleEmail";
import * as React from "react";

// Initialize Resend with error handling
const apiKey = import.meta.env.RESEND_API_KEY || "";
const resend = apiKey ? new Resend(apiKey) : null;

export const POST: APIRoute = async ({ request }) => {
  // Check if Resend is configured
  if (!resend || !apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return new Response(
      JSON.stringify({
        error: "Email service is not configured",
      }),
      {
        status: 503,
        statusText: "Service Unavailable",
      }
    );
  }
  const body = await request.json();
  const { name, email, phone, message, subject } = body;

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
      subject: subject || `Nieuw contactformulier bericht van ${name}`,
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
