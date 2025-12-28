import { PrismaClient } from '@prisma/client';
declare const prismaClientSingleton: () => PrismaClient<{
    log: ("info" | "query" | "warn" | "error")[];
}, "info" | "query" | "warn" | "error", import("@prisma/client/runtime/library").DefaultArgs>;
declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}
declare const prisma: PrismaClient<{
    log: ("info" | "query" | "warn" | "error")[];
}, "info" | "query" | "warn" | "error", import("@prisma/client/runtime/library").DefaultArgs>;
export default prisma;
//# sourceMappingURL=prisma.d.ts.map