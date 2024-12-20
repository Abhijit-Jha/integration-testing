import { prisma } from "../../db/db";

export function resetDB(){
    prisma.user.deleteMany();
}