import { NextResponse } from "next/server";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOption = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          let employee = await prisma.employee.findUnique({
            where: { email: credentials.email },
          });

          if (!employee) return null;

          if (employee.password === credentials.password) {
            return NextResponse.json(employee);
          } else {
            return null;
          }
        } catch (error) {
          return NextResponse.json({ status: 400, errors: error.messages });
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
