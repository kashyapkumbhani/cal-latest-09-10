import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomePage } from "@/pages/HomePage"
import { FractionsPage } from "@/pages/FractionsPage"
import { FractionsCalculatorPage } from "@/pages/FractionsCalculatorPage"
import { AddingSubtractingFractionsPage } from "@/pages/AddingSubtractingFractionsPage"
import { MixedNumbersCalculatorPage } from "@/pages/MixedNumbersCalculatorPage"
import { MixedFractionsPage } from "@/pages/MixedFractionsPage"
import { SimplifyingFractionsPage } from "@/pages/SimplifyingFractionsPage"
import { SimplifyingComplexFractionsCalculatorPage } from "@/pages/SimplifyingComplexFractionsCalculatorPage"
import { ComplexFractionCalculatorPage } from "@/pages/ComplexFractionCalculatorPage"
import { FractionToDecimalCalculatorPage } from "@/pages/FractionToDecimalCalculatorPage"
import { DecimalToFractionCalculatorPage } from "@/pages/DecimalToFractionCalculatorPage"
import { FractionToPercentCalculatorPage } from "@/pages/FractionToPercentCalculatorPage"
import { PercentToFractionCalculatorPage } from "@/pages/PercentToFractionCalculatorPage"
import { RatioToFractionCalculatorPage } from "@/pages/RatioToFractionCalculatorPage"
import { ComparingFractionsCalculatorPage } from "@/pages/ComparingFractionsCalculatorPage"
import { OrderingFractionsCalculatorPage } from "@/pages/OrderingFractionsCalculatorPage"
import { EquivalentFractionsCalculatorPage } from "@/pages/EquivalentFractionsCalculatorPage"
import { FractionExponentsCalculatorPage } from "@/pages/FractionExponentsCalculatorPage"
import { FractionRootCalculatorPage } from "@/pages/FractionRootCalculatorPage"
import { FractionLogarithmCalculatorPage } from "@/pages/FractionLogarithmCalculatorPage"
import { EmbeddableFractionsCalculator } from "@/components/EmbeddableFractionsCalculator"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/embed/fractions-calculator" element={<EmbeddableFractionsCalculator />} />
          <Route path="*" element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/fractions" element={<FractionsPage />} />
                  <Route path="/fractions/fractions-calculator" element={<FractionsCalculatorPage />} />
                  <Route path="/fractions/adding-and-subtracting-fractions" element={<AddingSubtractingFractionsPage />} />
                  <Route path="/fractions/mixed-numbers-calculator" element={<MixedNumbersCalculatorPage />} />
                  <Route path="/fractions/mixed-fractions" element={<MixedFractionsPage />} />
                  <Route path="/fractions/simplifying-fractions" element={<SimplifyingFractionsPage />} />
                  <Route path="/fractions/simplifying-complex-fractions-calculator" element={<SimplifyingComplexFractionsCalculatorPage />} />
                  <Route path="/fractions/complex-fraction-calculator" element={<ComplexFractionCalculatorPage />} />
                  <Route path="/fractions/fraction-to-decimal-calculator" element={<FractionToDecimalCalculatorPage />} />
                  <Route path="/fractions/decimal-to-fraction-calculator" element={<DecimalToFractionCalculatorPage />} />
                  <Route path="/fractions/fraction-to-percent-calculator" element={<FractionToPercentCalculatorPage />} />
                  <Route path="/fractions/percent-to-fraction-calculator" element={<PercentToFractionCalculatorPage />} />
                  <Route path="/fractions/ratio-to-fraction-calculator" element={<RatioToFractionCalculatorPage />} />
                  <Route path="/fractions/comparing-fractions-calculator" element={<ComparingFractionsCalculatorPage />} />
                  <Route path="/fractions/ordering-fractions-calculator" element={<OrderingFractionsCalculatorPage />} />
                  <Route path="/fractions/equivalent-fractions-calculator" element={<EquivalentFractionsCalculatorPage />} />
                  <Route path="/fractions/fraction-exponents-calculator" element={<FractionExponentsCalculatorPage />} />
                  <Route path="/fractions/fraction-root-calculator" element={<FractionRootCalculatorPage />} />
                  <Route path="/fractions/fraction-logarithm-calculator" element={<FractionLogarithmCalculatorPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App