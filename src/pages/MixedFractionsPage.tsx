import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MixedFractionsCalculator } from "@/components/MixedFractionsCalculator";

export function MixedFractionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Mixed Fractions
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Mixed Fractions Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Mixed Fractions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>A mixed fraction is a whole number and a proper fraction combined. This calculator helps you perform operations on mixed fractions, showing each step of the process.</p>
        </CardContent>
      </Card>
      
      <MixedFractionsCalculator />
    </div>
  );
}