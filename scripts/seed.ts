const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Famous People" },
        { name: "Movies & TV" },
        { name: "Musicians" },
        { name: "Games" },
        { name: "Philosophy" },
        { name: "Scientists" },
        { name: "Animals" },
      ],
    });
  } catch (err) {
    console.log(err);
  } finally {
    db.$disconnect();
  }
}

main();
