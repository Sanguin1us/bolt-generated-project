"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FileText, TrendingUp, Users } from 'lucide-react'
import { economicIndicators } from '@/lib/economicData';
import EconomicIndicatorGraph from '@/components/EconomicIndicatorGraph';

const publicationTypes = [
  { 
    icon: FileText, 
    title: 'Boletim Econômico', 
    category: 'BOLETIM ECONÔMICO',
    description: 'Publicação periódica com a análise da conjuntura macroeconômica do Rio de Janeiro.' 
  },
  { 
    icon: TrendingUp, 
    title: 'Notas Técnicas', 
    category: 'NOTAS TÉCNICAS',
    description: 'Documentos elaborados pela equipe técnica da SMDEIS com o objetivo de embasar a tomada de decisão dos gestores.' 
  },
  { 
    icon: Users, 
    title: 'Estudos Especiais', 
    category: 'ESTUDOS ESPECIAIS',
    description: 'Análises acerca de temas que impactam no desenvolvimento econômico da cidade, ajudando na criação de políticas públicas.' 
  },
]

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/rio-hero.webp"
          alt="Vista aérea do Rio de Janeiro"
          fill
          priority
          quality={85}
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center 40%'
          }}
          className="z-0 brightness-90"
        />
        <div className="absolute inset-0 bg-blue-900/50 backdrop-brightness-75 z-10"></div>
        <div className="relative z-20 text-center text-white px-6 md:px-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Observatório Econômico</h1>
          <p className="text-xl md:text-2xl mb-10">Sua fonte de insights econômicos abrangentes e dados</p>
          <Link href="/publicacoes" className="mt-10 inline-block bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-100 transition-colors">
            Explorar Publicações
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Nossas Publicações</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {publicationTypes.map((type, index) => (
            <Link
              key={type.title}
              href={`/publicacoes?categoria=${encodeURIComponent(type.category)}`}
              className={`flex flex-col items-center text-center p-8 bg-blue-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in-up cursor-pointer`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <type.icon size={56} className="text-blue-900 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Indicadores de Atividade Econômica</h2>
        <div className="grid gap-12">
          {economicIndicators.map((indicator) => (
            <EconomicIndicatorGraph key={indicator.name} indicator={indicator} />
          ))}
        </div>
      </section>
    </>
  )
}
