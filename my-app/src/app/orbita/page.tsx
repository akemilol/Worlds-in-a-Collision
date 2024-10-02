"use client"
import { useEffect, useState } from 'react';
import Menu from '@/Components/Menu/Menu'

interface ApodData {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
}

export default function Orbita() {
    const [apod, setApod] = useState<ApodData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchApod = async () => {
        try {
          const response = await fetch('/api/nasa');
          if (!response.ok) {
            throw new Error('Failed to fetch APOD');
          }
          const data: ApodData = await response.json();
          setApod(data);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchApod();
    }, []);
  
    if (loading) {
      return <p className="text-center text-gray-500">Loading...</p>;
    }
  
    if (error) {
      return <p className="text-center text-red-500">Error: {error}</p>;
    }
  
    return (
      <div>
        <Menu />

        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Órbitas Planetárias e Instabilidade</h1>
        <p className="mb-8 text-lg">
          Velikovsky sugeriu que Vênus, Marte e outros corpos celestes poderiam ter passado perto da Terra, 
          perturbando as órbitas planetárias de forma significativa. Isso implicava em uma instabilidade 
          no sistema solar que não era compatível com os cálculos newtonianos de órbitas estáveis a longo prazo.
        </p>
  
        {apod && (
          <div>
            {apod.media_type === 'image' ? (
              <img src={apod.url} alt="NASA Astronomy Picture of the Day" className="w-full h-auto mb-4 rounded-lg shadow-md" />
            ) : apod.media_type === 'video' ? (
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={apod.url}
                  title="NASA Astronomy Picture of the Day"
                  className="w-full h-full rounded-lg shadow-md"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p className="text-gray-500">Unsupported media type.</p>
            )}
          </div>
        )}
      </div>
      </div>
    );
  }