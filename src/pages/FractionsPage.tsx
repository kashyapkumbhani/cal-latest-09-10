import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fractionsCalculators = [
  {
    title: "Fraction Operations and Manipulations",
    items: [
      { name: "Fractions Calculator", link: "/fractions/fractions-calculator" },
      { name: "Adding and Subtracting Fractions", link: "/fractions/adding-and-subtracting-fractions" },
      { name: "Mixed Numbers Calculator", link: "/fractions/mixed-numbers-calculator" },
      { name: "Mixed Fractions", link: "/fractions/mixed-fractions" },
      { name: "Simplifying Fractions", link: "/fractions/simplifying-fractions" },
      { name: "Simplifying Complex Fractions Calculator", link: "/fractions/simplifying-complex-fractions-calculator" },
      { name: "Complex Fraction Calculator", link: "/fractions/complex-fraction-calculator" },
    ]
  },
  {
    title: "Fraction Conversions",
    items: [
      { name: "Fraction to Decimal Calculator", link: "/fractions/fraction-to-decimal-calculator" },
      { name: "Decimal to Fraction Calculator", link: "/fractions/decimal-to-fraction-calculator" },
      { name: "Fraction to Percent Calculator", link: "/fractions/fraction-to-percent-calculator" },
      { name: "Percent to Fraction Calculator", link: "/fractions/percent-to-fraction-calculator" },
      { name: "Ratio to Fraction Calculator", link: "/fractions/ratio-to-fraction-calculator" },
    ]
  },
  {
    title: "Fraction Comparisons",
    items: [
      { name: "Comparing Fractions Calculator", link: "/fractions/comparing-fractions-calculator" },
      { name: "Ordering Fractions Calculator", link: "/fractions/ordering-fractions-calculator" },
      { name: "Equivalent Fractions Calculator", link: "/fractions/equivalent-fractions-calculator" },
    ]
  },
  {
    title: "Advanced Fraction Operations",
    items: [
      { name: "Fraction Exponents Calculator", link: "/fractions/fraction-exponents-calculator" },
      { name: "Fraction Root Calculator", link: "/fractions/fraction-root-calculator" },
      { name: "Fraction Logarithm Calculator", link: "/fractions/fraction-logarithm-calculator" },
    ]
  },
];

export function FractionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-primary hover:underline">Home</Link> &gt; Fractions
      </nav>
      <h1 className="text-4xl font-bold mb-6">Fractions Calculators</h1>
      <p className="mb-8 text-lg">
        Learn to add, subtract, multiply and divide fractions. Reduce fractions to lowest terms, simplify, compare and order fractions. Convert fractions to decimals and percentages, work with mixed numbers and improper fractions and solve for X in fractions equations using our online fractions calculators.
      </p>
      
      <Button asChild className="mb-8">
        <Link to="/fractions/fractions-calculator">Go to Fractions Calculator</Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {fractionsCalculators.map((category, index) => (
          <Card key={index} className="bg-card">
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link to={item.link} className="text-primary hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}