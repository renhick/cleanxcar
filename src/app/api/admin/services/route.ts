import { NextResponse } from 'next/server';
import sql from '@/lib/db';

interface Service {
  id: string;
  header: string;
  price: string;
  text: string;
}

export async function GET() {
  try {
    const services = await sql`
      SELECT * FROM services ORDER BY id ASC
    `;
    return NextResponse.json({ services });
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ services: [], error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newService = await request.json();
    const [service] = await sql`
      INSERT INTO services (header, price, text)
      VALUES (${newService.header}, ${newService.price}, ${newService.text})
      RETURNING *
    `;
    return NextResponse.json(service);
  } catch (error: any) {
    return NextResponse.json({ error: 'Fehler beim Erstellen' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const service = await request.json();
    const [updated] = await sql`
      UPDATE services 
      SET header = ${service.header}, 
          price = ${service.price}, 
          text = ${service.text}
      WHERE id = ${service.id}
      RETURNING *
    `;
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Aktualisieren' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await sql`
      DELETE FROM services WHERE id = ${id}
    `;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Löschen' }, { status: 500 });
  }
} 