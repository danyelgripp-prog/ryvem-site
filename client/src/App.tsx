import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MissaoVisaoValores from "./pages/MissaoVisaoValores";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaCookies from "./pages/PoliticaCookies";
import ConformidadeLGPD from "./pages/ConformidadeLGPD";
import Acessibilidade from "./pages/Acessibilidade";
import DPA from "./pages/DPA";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/missao-visao-valores"} component={MissaoVisaoValores} />
      {/* Páginas legais */}
      <Route path={"/politica-de-privacidade"} component={PoliticaPrivacidade} />
      <Route path={"/termos-de-uso"} component={TermosDeUso} />
      <Route path={"/politica-de-cookies"} component={PoliticaCookies} />
      <Route path={"/conformidade-lgpd"} component={ConformidadeLGPD} />
      <Route path={"/acessibilidade"} component={Acessibilidade} />
      <Route path={"/dpa"} component={DPA} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
