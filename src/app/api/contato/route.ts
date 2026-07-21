import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const contactMessage = await prisma.contactMessage.create({
    data: parsed.data,
  });

  return NextResponse.json({ id: contactMessage.id }, { status: 201 });
}
