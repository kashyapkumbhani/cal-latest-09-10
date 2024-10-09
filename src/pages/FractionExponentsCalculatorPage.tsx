import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FractionExponentsCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Fraction Exponents
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Fraction Exponents Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Fraction Exponents</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This calculator helps you work with fractions raised to powers or fractions as exponents, showing the steps involved in the calculations.</p>
        </CardContent>
      </Card>
      
      {/* Add your fraction exponents calculator component here */}
    </div>
  );
}