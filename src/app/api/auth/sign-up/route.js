import pool from "@/database/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { firstname, lastname, email, password } = await req.json();
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query("INSERT INTO registration (firstname, lastname, email, password, role) VALUES (?,?,?,?,?)", [
      firstname,
      lastname,
      email,
      password,
      "User",
    ]);
    connection.release();
    return NextResponse.json({ message: "User added Successfully!" });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
