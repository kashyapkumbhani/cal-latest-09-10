import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EquivalentFractionsCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Equivalent Fractions
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Equivalent Fractions Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Equivalent Fractions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This calculator helps you find equivalent fractions for a given fraction, showing the steps involved in the process.</p>
        </CardContent>
      </Card>
      
      {/* Add your equivalent fractions calculator component here */}
    </div>
  );
}