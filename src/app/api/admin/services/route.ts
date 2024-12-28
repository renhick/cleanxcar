import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { id: 'asc' }
    });
    return NextResponse.json({ services });
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ services: [], error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const service = await prisma.service.create({
      data: {
        header: data.header,
        price: data.price,
        text: data.text
      }
    });
    return NextResponse.json(service);
  } catch (error: any) {
    return NextResponse.json({ error: 'Fehler beim Erstellen' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const service = await prisma.service.update({
      where: { id: parseInt(data.id) },
      data: {
        header: data.header,
        price: data.price,
        text: data.text
      }
    });
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Aktualisieren' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.service.delete({
      where: { id: parseInt(id) }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Löschen' }, { status: 500 });
  }
} 