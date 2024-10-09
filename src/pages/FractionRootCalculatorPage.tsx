import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FractionRootCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Fraction Root
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Fraction Root Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Fraction Roots</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This calculator helps you find the root of a fraction or a fractional root of a number, showing the steps involved in the calculations.</p>
        </CardContent>
      </Card>
      
      {/* Add your fraction root calculator component here */}
    </div>
  );
}