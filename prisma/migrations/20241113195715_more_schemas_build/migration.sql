-- CreateTable
CREATE TABLE "Summary" (
    "id" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "reponse" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoinSpend" (
    "id" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "summary_id" UUID NOT NULL,

    CONSTRAINT "CoinSpend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Summary" ADD CONSTRAINT "Summary_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoinSpend" ADD CONSTRAINT "CoinSpend_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoinSpend" ADD CONSTRAINT "CoinSpend_summary_id_fkey" FOREIGN KEY ("summary_id") REFERENCES "Summary"("id") ON DELETE CASCADE ON UPDATE CASCADE;
