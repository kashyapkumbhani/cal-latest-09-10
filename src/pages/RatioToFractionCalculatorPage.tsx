import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RatioToFractionCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Ratio to Fraction
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Ratio to Fraction Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Ratio to Fraction Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This calculator helps you convert ratios to their fraction equivalents, showing the steps involved in the process.</p>
        </CardContent>
      </Card>
      
      {/* Add your ratio to fraction calculator component here */}
    </div>
  );
}