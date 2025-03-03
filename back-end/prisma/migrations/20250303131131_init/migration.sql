-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmpassword" TEXT NOT NULL
);
