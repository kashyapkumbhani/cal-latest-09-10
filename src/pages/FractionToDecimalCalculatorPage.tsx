import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FractionToDecimalCalculator } from "@/components/FractionToDecimalCalculator";

export function FractionToDecimalCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Fraction to Decimal
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Fraction to Decimal Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Fraction to Decimal Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This calculator helps you convert fractions to their decimal equivalents, showing the steps involved in the process.</p>
        </CardContent>
      </Card>
      
      <FractionToDecimalCalculator />
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Understanding Fraction to Decimal Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">What is a Decimal?</h2>
          <p className="mb-4">
            A decimal is a way of writing a number that is not whole. It uses a decimal point to separate the whole number part from the fractional part. For example, 0.5 is a decimal representation of one-half.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Types of Decimals:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Terminating decimals: These have a finite number of digits after the decimal point (e.g., 0.25, 0.75).</li>
            <li>Repeating decimals: These have a digit or group of digits that repeat indefinitely (e.g., 0.333... or 0.142857142857...).</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">How to Convert a Fraction to a Decimal:</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Divide the numerator by the denominator</li>
            <li>If the division results in a remainder, continue dividing by adding zeros after the decimal point</li>
            <li>If the division terminates, you have a terminating decimal</li>
            <li>If the division repeats, you have a repeating decimal</li>
          </ol>
          
          <p>
            Use our calculator above to convert fractions to decimals step-by-step and enhance your understanding of this important mathematical concept.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}