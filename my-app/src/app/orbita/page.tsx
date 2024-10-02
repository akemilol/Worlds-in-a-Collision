"use client"
import { useEffect, useState } from 'react';

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Órbitas Planetárias e Instabilidade</h1>
      <p>
        Velikovsky sugeriu que Vênus, Marte e outros corpos celestes poderiam ter passado perto da Terra, 
        perturbando as órbitas planetárias de forma significativa. Isso implicava em uma instabilidade 
        no sistema solar que não era compatível com os cálculos newtonianos de órbitas estáveis a longo prazo.
      </p>
      
      {apod && (
        <div>
          <h1>{apod.title}</h1>
          {apod.media_type === 'image' ? (
            <img src={apod.url} alt={apod.title} style={{ maxWidth: '100%' }} />
          ) : (
            <iframe src={apod.url} title={apod.title} frameBorder="0" allowFullScreen />
          )}
          <p>{apod.explanation}</p>
        </div>
      )}
    </div>
  );
}