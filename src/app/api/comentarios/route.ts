import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { commentSchema } from "@/lib/validations/comment";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

// Comentários entram como não aprovados (moderação manual) — ver BlogComment.approved
// no schema do Prisma. Os posts precisam existir no banco (cadastrados via /admin/blog).
export async function POST(request: Request) {
  const { success } = rateLimit(`comentarios:${getClientIp(request)}`);
  if (!success) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde um minuto e tente novamente." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const parsed = commentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const post = await prisma.blogPost.findUnique({ where: { slug: parsed.data.slug } });
  if (!post) {
    return NextResponse.json({ error: "Post não encontrado" }, { status: 404 });
  }

  const comment = await prisma.blogComment.create({
    data: {
      postId: post.id,
      name: parsed.data.name,
      email: parsed.data.email,
      content: parsed.data.content,
    },
  });

  return NextResponse.json({ id: comment.id }, { status: 201 });
}
