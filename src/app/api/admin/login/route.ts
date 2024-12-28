import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Überprüfen der Anmeldedaten mit den Umgebungsvariablen
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // JWT Token erstellen
      const token = jwt.sign(
        { email: process.env.ADMIN_EMAIL },
        process.env.JWT_SECRET!,
        { expiresIn: '1d' }
      );

      return NextResponse.json({ token });
    }

    return NextResponse.json(
      { error: 'Ungültige Anmeldedaten' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Interner Server-Fehler' },
      { status: 500 }
    );
  }
} 