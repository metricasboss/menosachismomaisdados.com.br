'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";
import { charlieLocations } from '@/lib/charlie-locations'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const LocationSection = () => {
  // Importa o componente do mapa dinamicamente, desabilitando o SSR
  const Map = useMemo(() => dynamic(
    () => import('@/components/ui/leaflet-map').then((mod) => mod.LeafletMap),
    { 
      loading: () => <p className="flex h-full items-center justify-center text-zinc-400">Carregando mapa...</p>,
      ssr: false 
    }
  ), [])

  return (
    <Section id="location" className="bg-[#070C16]">
      <SectionTitle className="text-white">Local do Evento</SectionTitle>
      <SectionSubtitle className="text-white">Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP | E de onde você estiver</SectionSubtitle>
      <div className="mt-12 grid md:grid-cols-[30%_70%] gap-8 items-center">
        <Card className="p-6 bg-transparent">
          <img src="https://cubo.network/site-assets/cubo-logo-footer-white.svg" alt="Cubo Logo" className="mb-4 h-10 self-start" />
          <h3 className="text-xl font-bold mb-4 text-white">Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP</h3>
          <p className="text-base mb-4 text-white">
            O evento será realizado em um local de fácil acesso e também com transmissão online para você participar de onde estiver.
          </p>
          <Button variant="outline" asChild>
            <a href="https://www.google.com/maps/search/?api=1&query=Alameda+Vicente+Pinzon,+54,+Vila+Olímpia,+São+Paulo,+SP" target="_blank" rel="noopener noreferrer">
              Ver no Google Maps
            </a>
          </Button>
        </Card>
        <Card className="h-[500px] p-0 flex items-center justify-center overflow-hidden">
          <Map locations={charlieLocations} center={[-23.59709, -46.68676]} defaultPinLocation={[-23.59709, -46.68676]} />
        </Card>
      </div>
    </Section>
  )
};

export default LocationSection;
