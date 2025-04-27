-- CreateTable
CREATE TABLE "tarefa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "realizada" BOOLEAN NOT NULL,

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);
