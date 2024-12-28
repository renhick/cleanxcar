import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const servicesFilePath = path.join(process.cwd(), 'src/data/services.json');

async function getServices() {
  const fileContent = await fs.readFile(servicesFilePath, 'utf-8');
  return JSON.parse(fileContent);
}

async function saveServices(services: any) {
  await fs.writeFile(servicesFilePath, JSON.stringify({ services }, null, 2));
}

export async function GET() {
  try {
    const data = await getServices();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Laden der Dienstleistungen' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newService = await request.json();
    const data = await getServices();
    
    // Generiere eine neue ID
    const maxId = Math.max(...data.services.map((s: any) => parseInt(s.id)), 0);
    newService.id = (maxId + 1).toString();
    
    data.services.push(newService);
    await saveServices(data.services);
    
    return NextResponse.json(newService);
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Erstellen der Dienstleistung' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedService = await request.json();
    const data = await getServices();
    
    const index = data.services.findIndex((s: any) => s.id === updatedService.id);
    if (index !== -1) {
      data.services[index] = updatedService;
      await saveServices(data.services);
      return NextResponse.json(updatedService);
    }
    
    return NextResponse.json({ error: 'Dienstleistung nicht gefunden' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Aktualisieren der Dienstleistung' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const data = await getServices();
    
    const filteredServices = data.services.filter((s: any) => s.id !== id);
    await saveServices(filteredServices);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Löschen der Dienstleistung' }, { status: 500 });
  }
} 