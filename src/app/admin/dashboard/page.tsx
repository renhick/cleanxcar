'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  LogOut,
  Users,
  Calendar,
  Settings,
  Plus,
  Edit,
  Save,
  X,
  Trash2
} from "lucide-react";

interface Service {
  id: string;
  header: string;
  price: string;
  text: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [newService, setNewService] = useState<Partial<Service>>({
    header: '',
    price: '',
    text: ''
  });
  const [showNewServiceForm, setShowNewServiceForm] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
    } else {
      loadServices();
      setIsLoading(false);
    }
  }, [router]);

  const loadServices = async () => {
    try {
      const response = await fetch('/api/admin/services');
      const data = await response.json();
      setServices(data.services);
    } catch (error) {
      console.error('Fehler beim Laden der Dienstleistungen:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  const handleEditService = (service: Service) => {
    setEditingService(service);
  };

  const handleSaveEdit = async () => {
    if (!editingService) return;

    try {
      const response = await fetch('/api/admin/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingService),
      });

      if (response.ok) {
        await loadServices();
        setEditingService(null);
      }
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
    }
  };

  const handleAddService = async () => {
    try {
      const response = await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService),
      });

      if (response.ok) {
        await loadServices();
        setNewService({ header: '', price: '', text: '' });
        setShowNewServiceForm(false);
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen:', error);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('Möchten Sie diese Dienstleistung wirklich löschen?')) return;

    try {
      const response = await fetch('/api/admin/services', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await loadServices();
      }
    } catch (error) {
      console.error('Fehler beim Löschen:', error);
    }
  };

  if (isLoading) {
    return <div>Laden...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8 mt-20 sm:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout} className="w-full sm:w-auto">
            <LogOut className="mr-2 h-4 w-4" />
            Abmelden
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Dienstleistungen</CardTitle>
              <Button 
                onClick={() => setShowNewServiceForm(true)}
                className="w-full sm:w-auto"
              >
                <Plus className="mr-2 h-4 w-4" />
                Neue Dienstleistung
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {showNewServiceForm && (
              <div className="mb-6 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Neue Dienstleistung</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="new-name">Name</Label>
                    <Input
                      id="new-name"
                      value={newService.header || ''}
                      onChange={(e) => setNewService({...newService, header: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-price">Preis</Label>
                    <Input
                      id="new-price"
                      value={newService.price || ''}
                      onChange={(e) => setNewService({...newService, price: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-description">Beschreibung</Label>
                    <Textarea
                      id="new-description"
                      value={newService.text || ''}
                      onChange={(e) => setNewService({...newService, text: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      onClick={handleAddService}
                      className="w-full sm:w-auto"
                    >
                      Speichern
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowNewServiceForm(false)}
                      className="w-full sm:w-auto"
                    >
                      Abbrechen
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="p-3 sm:p-4 border rounded-lg">
                  {editingService?.id === service.id ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="edit-name">Name</Label>
                        <Input
                          id="edit-name"
                          value={editingService.header}
                          onChange={(e) => setEditingService({
                            ...editingService,
                            header: e.target.value
                          })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="edit-price">Preis (€)</Label>
                        <Input
                          id="edit-price"
                          value={editingService.price}
                          onChange={(e) => setEditingService({
                            ...editingService,
                            price: e.target.value
                          })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="edit-description">Beschreibung</Label>
                        <Textarea
                          id="edit-description"
                          value={editingService.text}
                          onChange={(e) => setEditingService({
                            ...editingService,
                            text: e.target.value
                          })}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button 
                          onClick={handleSaveEdit}
                          className="w-full sm:w-auto"
                        >
                          <Save className="mr-2 h-4 w-4" />
                          Speichern
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setEditingService(null)}
                          className="w-full sm:w-auto"
                        >
                          <X className="mr-2 h-4 w-4" />
                          Abbrechen
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="w-full sm:w-auto">
                        <h3 className="font-semibold">{service.header}</h3>
                        <p className="text-sm text-muted-foreground">{service.text}</p>
                        <p className="font-medium mt-1">{service.price}</p>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button 
                          variant="outline" 
                          onClick={() => handleEditService(service)}
                          className="flex-1 sm:flex-none"
                        >
                          <Edit className="h-4 w-4" />
                          <span className="ml-2 sm:hidden">Bearbeiten</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleDeleteService(service.id)}
                          className="flex-1 sm:flex-none text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="ml-2 sm:hidden">Löschen</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 