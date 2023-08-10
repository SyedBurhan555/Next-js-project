// import dbConnect from "@/app/utils/dbconn";
import Connect from "@/app/utils/dbconn";
import Contact from "@/app/models/contactSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, phone_number, message } = await req.json();

  await Connect();
  const newUser = new Contact({
    name,
    email,
    phone_number,
    message,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
}

// export async function GET() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   return NextResponse.json(data);
// }
