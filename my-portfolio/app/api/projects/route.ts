import { NextRequest, NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    title: "Mijn Portfolio",
    description: "Een persoonlijke website met Next.js, React, Typescript en Tailwind Css",
    image: "/",
    url: "https://github.com/Murten6/Portfolio"
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(projects);
}