import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OrderingFractionsCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Ordering Fractions
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Ordering Fractions Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Ordering Fractions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This calculator helps you order a set of fractions from least to greatest or greatest to least, showing the steps involved in the process.</p>
        </CardContent>
      </Card>
      
      {/* Add your ordering fractions calculator component here */}
    </div>
  );
}