import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from 'lucide-react';

function simplifyFraction(numerator: number, denominator: number): [number, number, number, string[]] {
  let steps: string[] = [];
  steps.push(`Original fraction: \\frac{${numerator}}{${denominator}}`);

  if (denominator === 0) {
    steps.push("Error: Denominator cannot be zero.");
    return [0, numerator, denominator, steps];
  }

  if (numerator === 0) {
    steps.push("Simplified fraction: 0");
    return [0, 0, 1, steps];
  }

  const wholePart = Math.floor(numerator / denominator);
  const remainder = numerator % denominator;

  steps.push(`Converting to a mixed number using long division with remainders for ${numerator} ÷ ${denominator}:`);
  steps.push(`${numerator} ÷ ${denominator} = ${wholePart} R${remainder}`);
  
  steps.push(`Therefore:`);
  if (wholePart === 0) {
    steps.push(`\\frac{${numerator}}{${denominator}} = \\frac{${remainder}}{${denominator}}`);
  } else if (remainder === 0) {
    steps.push(`\\frac{${numerator}}{${denominator}} = ${wholePart}`);
  } else {
    steps.push(`\\frac{${numerator}}{${denominator}} = ${wholePart}\\frac{${remainder}}{${denominator}}`);
  }

  return [wholePart, remainder, denominator, steps];
}

export function SimplifyingFractionsCalculator() {
  const [numerator, setNumerator] = useState<string>('');
  const [denominator, setDenominator] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');

  const handleCalculate = () => {
    const num = parseInt(numerator);
    const den = parseInt(denominator);

    if (isNaN(num) || isNaN(den)) {
      setSteps(['Please enter valid numbers for both numerator and denominator.']);
      setResult('');
      return;
    }

    const [wholePart, remainder, simplifiedDenominator, calculationSteps] = simplifyFraction(num, den);
    setSteps(calculationSteps);

    if (wholePart === 0) {
      setResult(`= \\frac{${remainder}}{${simplifiedDenominator}}`);
    } else if (remainder === 0) {
      setResult(`= ${wholePart}`);
    } else {
      setResult(`= ${wholePart}\\frac{${remainder}}{${simplifiedDenominator}}`);
    }
  };

  const handleClear = () => {
    setNumerator('');
    setDenominator('');
    setSteps([]);
    setResult('');
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Simplifying Fractions Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>How to use</AlertTitle>
          <AlertDescription>
            Enter the numerator and denominator of the fraction you want to simplify, then click Calculate.
          </AlertDescription>
        </Alert>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            type="number"
            value={numerator}
            onChange={(e) => setNumerator(e.target.value)}
            placeholder="Numerator"
          />
          <Input
            type="number"
            value={denominator}
            onChange={(e) => setDenominator(e.target.value)}
            placeholder="Denominator"
          />
        </div>
        <div className="flex justify-between mb-4">
          <Button onClick={handleClear} variant="outline">Clear</Button>
          <Button onClick={handleCalculate}>Calculate</Button>
        </div>
        {result && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Answer:</h3>
            <BlockMath math={result} />
          </div>
        )}
        {steps.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Solution:</h3>
            {steps.map((step, index) => (
              <div key={index} className="mb-2">
                {step.includes('\\') ? (
                  <BlockMath math={step} />
                ) : (
                  <p>{step}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}