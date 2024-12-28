import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

interface Service {
  id: string;
  header: string;
  price: string;
  text: string;
}

export async function GET() {
  try {
    const services = (await kv.get<Service[]>('services')) || [];
    return NextResponse.json({ services });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Laden der Dienstleistungen' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newService = await request.json();
    const services = (await kv.get<Service[]>('services')) || [];
    
    const maxId = Math.max(...services.map((s: any) => parseInt(s.id)), 0);
    newService.id = (maxId + 1).toString();
    
    services.push(newService);
    await kv.set('services', services);
    
    return NextResponse.json(newService);
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Erstellen der Dienstleistung' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedService = await request.json();
    const services = (await kv.get<Service[]>('services')) || [];
    
    const index = services.findIndex((s) => s.id === updatedService.id);
    if (index !== -1) {
      services[index] = updatedService;
      await kv.set('services', services);
    }
    
    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Aktualisieren' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const services = (await kv.get<Service[]>('services')) || [];
    
    const filteredServices = services.filter((s) => s.id !== id);
    await kv.set('services', filteredServices);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Löschen' }, { status: 500 });
  }
} 