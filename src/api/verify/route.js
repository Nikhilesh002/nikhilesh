import { NextRequest,NextResponse } from "next/server";

// TODO: Implement actual reCAPTCHA verification here

export default async function POST(req){
  // NEXT_PUBLIC_RECAPTCHA_SECRET_KEY
  const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
    params: {
      secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    },
  });
  console.log(res);
  
}