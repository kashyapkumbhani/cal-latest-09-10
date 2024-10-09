import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimplifyingComplexFractionsCalculator } from "@/components/SimplifyingComplexFractionsCalculator";

export function SimplifyingComplexFractionsCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Simplifying Complex Fractions
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Simplifying Complex Fractions Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Simplifying Complex Fractions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Complex fractions are fractions that contain fractions in the numerator, denominator, or both. This calculator helps you simplify complex fractions step-by-step.</p>
        </CardContent>
      </Card>
      
      <SimplifyingComplexFractionsCalculator />
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Understanding Complex Fractions</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">What are Complex Fractions?</h2>
          <p className="mb-4">
            Complex fractions, also known as compound fractions, are fractions that have one or more fractions in their numerator, denominator, or both. They can be thought of as a fraction of fractions.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Examples of Complex Fractions:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <span className="inline-block">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mfrac>
                    <mfrac>
                      <mn>1</mn>
                      <mn>2</mn>
                    </mfrac>
                    <mfrac>
                      <mn>3</mn>
                      <mn>4</mn>
                    </mfrac>
                  </mfrac>
                </math>
              </span>
            </li>
            <li>
              <span className="inline-block">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mfrac>
                    <mrow>
                      <mn>1</mn>
                      <mo>+</mo>
                      <mfrac>
                        <mn>1</mn>
                        <mn>2</mn>
                      </mfrac>
                    </mrow>
                    <mn>3</mn>
                  </mfrac>
                </math>
              </span>
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">How to Simplify Complex Fractions:</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Convert mixed numbers to improper fractions</li>
            <li>Multiply the numerator and denominator by the LCD (Least Common Denominator)</li>
            <li>Perform the division</li>
            <li>Simplify the resulting fraction if possible</li>
          </ol>
          
          <p>
            Use our calculator above to simplify complex fractions step-by-step and enhance your understanding of this important mathematical concept.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}