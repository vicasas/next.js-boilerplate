import { connection } from 'next/server'

export async function GET() {
  // Prevent build-time prerendering when using Cache Components.
  await connection()

  return Response.json(
    {
      status: 'ok',
      uptime: Math.round(process.uptime()),
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  )
}
