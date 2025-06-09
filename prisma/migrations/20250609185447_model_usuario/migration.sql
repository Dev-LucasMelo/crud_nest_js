/*
  Warnings:

  - Added the required column `user_id` to the `tarefa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tarefa" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefa" ADD CONSTRAINT "tarefa_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
