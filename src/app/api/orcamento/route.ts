import { NextResponse } from "next/server";
import { budgetSchema } from "@/lib/validations/contact";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = budgetSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { planSlug, name, email, phone, document, company, city, state, description } =
    parsed.data;

  const plan = await prisma.plan.findUnique({ where: { slug: planSlug } });
  if (!plan) {
    return NextResponse.json({ error: "Plano não encontrado" }, { status: 404 });
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: { name },
    create: { name, email },
  });

  const client = await prisma.client.upsert({
    where: { userId: user.id },
    update: { company, document, phone, city, state },
    create: { userId: user.id, company, document, phone, city, state },
  });

  const request_ = await prisma.request.create({
    data: {
      subject: `Orçamento — ${plan.name}`,
      message: description,
      clientId: client.id,
    },
  });

  return NextResponse.json({ id: request_.id }, { status: 201 });
}
