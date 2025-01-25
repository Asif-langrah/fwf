import { NextResponse } from "next/server"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
})

export async function POST(request: Request) {
  try {
    const { registrationNumber } = await request.json()

    const client = await pool.connect()
    try {
      const result = await client.query("SELECT name, workshop FROM participants WHERE registration_number = $1", [
        registrationNumber,
      ])

      if (result.rows.length > 0) {
        return NextResponse.json(result.rows[0])
      } else {
        return NextResponse.json({ error: "Participant not found" }, { status: 404 })
      }
    } finally {
      client.release()
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

