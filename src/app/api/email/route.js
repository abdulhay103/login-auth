import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let toMail = searchParams.get("email");

  // Random number generator
  const randomOTP = () => {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Transporter
  let transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  // Prepare Mail
  let myMail = {
    from: "Module-14<info@teamrabbil.com>",
    to: toMail,
    subject: "OTP verification from Module-14",
    text: `Your OTP is: ${randomOTP()} `,
  };

  try {
    let result = await transporter.sendMail(myMail);
    // let receiver = result["accepted"];
    return NextResponse.json({
      status: "Success",
      msg: result,
    });
  } catch (err) {
    // Log the error for debugging purposes
    console.error(err);
    return NextResponse.next({
      msg: "Message sending failed.",
    });
  }
}
