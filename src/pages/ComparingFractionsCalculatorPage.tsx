import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComparingFractionsCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; <Link to="/fractions" className="text-primary hover:underline">Fractions</Link> &gt; Comparing Fractions
      </nav>
      
      <h1 className="text-4xl font-bold mb-6">Comparing Fractions Calculator</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Comparing Fractions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This calculator helps you compare two or more fractions, determining which is greater, lesser, or if they are equal.</p>
        </CardContent>
      </Card>
      
      {/* Add your comparing fractions calculator component here */}
    </div>
  );
}