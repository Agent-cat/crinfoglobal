## install dependencies

```bash
npm install prisma --save-dev
npm install @prisma/client
```

## Initialize prisma 

```bash
npx prisma init
```
- Create a model in schema.prisma file
```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```
- Run the following command to create a migration and update the database
```bash
npx prisma migrate dev --name initial
```
- This will create a new migration file in the prisma/migrations folder and update the database with the new model.
---
- Generate the prisma client
```bash
npx prisma generate
```
- This will generate the prisma client in the node_modules/@prisma/client folder.

---
## one-to-many relationship

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  Todos     Todos[]
  Favorites Todos[]
}

model Todos {
  id     String @id @default(uuid())
  author User   @relation(fields: [userId], references: [id])
  userId String
}
```
---
## one-to-many relationship

```prisma

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  Todos     Todos[]  @relation("WrittenPosts")
  Favorite Todos[] @relation("Favoriteposts")
}

model Todos {
  id            String @id @default(uuid())
  author        User   @relation("WrittenPosts", fields: [userId], references: [id])
  FavoritedBy   User   @relation("Favoriteposts", fields: [FavoritedById], references: [id])
  userId?        String
  FavoritedById? String
}
```
- we use @relation to specify the relation name and the fields and references to specify the foreign key.
---
- we can also use enum to define the role of the user.
```prisma
enum Role {
  USER
  ADMIN
}
```
- we can then use the enum in the model
```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now()) @updatedAt
  Todos     Todos[]  @relation("WrittenPosts")
  Favorite  Todos[]  @relation("Favoriteposts")
}
```
---
# Create Operations

```typescript
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
      role: 'USER',
    },
  });
  console.log(newUser);
}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
```
