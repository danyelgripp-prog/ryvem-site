import RyvemNavbar from '@/components/ryvem/RyvemNavbar';
import RyvemHero from '@/components/ryvem/RyvemHero';
import RyvemProblema from '@/components/ryvem/RyvemProblema';
import RyvemManifesto from '@/components/ryvem/RyvemManifesto';
import RyvemProdutos from '@/components/ryvem/RyvemProdutos';
import RyvemCases from '@/components/ryvem/RyvemCases';
import RyvemProcesso from '@/components/ryvem/RyvemProcesso';
import RyvemCTA from '@/components/ryvem/RyvemCTA';
import RyvemFooter from '@/components/ryvem/RyvemFooter';

export default function Home() {
  return (
    <div
      style={{
        background: '#0A0A1A',
        minHeight: '100vh',
        color: '#FFFFFF',
        overflowX: 'hidden',
      }}
    >
      <RyvemNavbar />
      <RyvemHero />
      <RyvemProblema />
      <RyvemManifesto />
      <RyvemProdutos />
      <RyvemCases />
      <RyvemProcesso />
      <RyvemCTA />
      <RyvemFooter />
    </div>
  );
}
