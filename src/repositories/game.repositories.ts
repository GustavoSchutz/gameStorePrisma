import prisma from "@/db/db";

async function insertGame({ name, description, release_date }: { name: string, description: string, release_date: string }) {

    return prisma.games.create({
        data: {
            name,
            description,
            release_date
        }
    })

}

async function insertCategory({ name, description }: { name: string, description: string }) {

    return prisma.categories.create({
        data: {
            name,
            description
        }
    })

}

async function relateGametoCategory(gameId: number, categoryId: number) {

    return prisma.game_categories.create({
        data: {
            games: { connect: { id: gameId } },
            categories: { connect: { id: categoryId } }
        }
    });

}

async function selectGame(gameId: number) {

    return prisma.games.findFirst({
        where: { id: gameId },
        include: { game_categories: { include: { categories: true } } }
    });

}

async function deleteGame(gameId: number) {

    return prisma.games.delete({
        where: {id: gameId},
    });

}

async function deleteCategory(categoryId: number) {

    return prisma.categories.delete({
        where: {id: categoryId},
    });

}

export { insertGame, insertCategory, relateGametoCategory, selectGame, deleteCategory, deleteGame }