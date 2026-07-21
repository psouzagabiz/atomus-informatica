import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { requestSchema } from "@/lib/validations/request";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const client = await prisma.client.findUnique({
    where: { userId: session.user.id },
  });

  if (!client) {
    return NextResponse.json({ error: "Cliente não encontrado" }, { status: 404 });
  }

  const newRequest = await prisma.request.create({
    data: {
      clientId: client.id,
      subject: parsed.data.subject,
      message: parsed.data.message,
    },
  });

  return NextResponse.json({ id: newRequest.id }, { status: 201 });
}
