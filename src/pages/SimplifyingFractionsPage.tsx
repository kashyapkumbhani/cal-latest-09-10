import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimplifyingFractionsCalculator } from "@/components/SimplifyingFractionsCalculator";

export function SimplifyingFractionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Simplifying Fractions
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Simplifying Fractions Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Simplifying Fractions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Simplifying fractions means reducing them to their lowest terms. This process involves finding the greatest common divisor (GCD) of the numerator and denominator and dividing both by this number. Our calculator helps you simplify fractions step-by-step.</p>
        </CardContent>
      </Card>
      
      <SimplifyingFractionsCalculator />
    </div>
  );
}