import { Hero } from '@/components/sections/Hero';
import { ProblemGap } from '@/components/sections/ProblemGap';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Verdicts } from '@/components/sections/Verdicts';
import { Limits } from '@/components/sections/Limits';
import { Audiences } from '@/components/sections/Audiences';
import { PressCoverage } from '@/components/sections/PressCoverage';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';

/**
 * Ordem das seções pensada para conversão:
 * problema -> mecanismo -> vocabulário -> confiança -> encaixe -> prova -> objeções -> pedido.
 * Hierarquia de títulos: um único H1 no Hero, um H2 por seção, H3 nos itens.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemGap />
      <HowItWorks />
      <Verdicts />
      <Limits />
      <Audiences />
      <PressCoverage />
      <Faq />
      <FinalCta />
    </>
  );
}
