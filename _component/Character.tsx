import { prisma } from "@/lib/db";

export const Character = async () => {
  const characters = await prisma.character.findMany();
  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <div>{character.name}</div>
          </div>
        );
      })}
    </div>
  );
};
