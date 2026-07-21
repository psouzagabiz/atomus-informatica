// Cria (ou atualiza) um usuário administrador direto no banco.
// Uso: node scripts/create-admin.mjs email@exemplo.com "SenhaForte123"
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const [, , email, password, name = "Administrador"] = process.argv;

if (!email || !password) {
  console.error('Uso: node scripts/create-admin.mjs email@exemplo.com "SenhaForte123" ["Nome"]');
  process.exit(1);
}

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashed, role: "ADMIN" },
    create: { email, password: hashed, name, role: "ADMIN" },
  });

  console.log(`Usuário admin pronto: ${user.email} (id: ${user.id})`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
