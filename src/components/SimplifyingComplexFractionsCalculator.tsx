import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from 'lucide-react';

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

function simplifyFraction(numerator: number, denominator: number): [number, number] {
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

function mixedToImproper(whole: number, numerator: number, denominator: number): [number, number] {
  return [whole * denominator + numerator, denominator];
}

function improperToMixed(numerator: number, denominator: number): [number, number, number] {
  const whole = Math.floor(Math.abs(numerator) / denominator);
  const remainder = Math.abs(numerator) % denominator;
  const sign = numerator < 0 ? -1 : 1;
  return [sign * whole, remainder, denominator];
}

function parseMixedNumber(input: string): [number, number, number] {
  const parts = input.split(/\s+/);
  if (parts.length === 1) {
    const fraction = parts[0].split('/');
    if (fraction.length === 1) {
      return [parseInt(fraction[0]), 0, 1];
    } else {
      return [0, parseInt(fraction[0]), parseInt(fraction[1])];
    }
  } else {
    const fraction = parts[1].split('/');
    return [parseInt(parts[0]), parseInt(fraction[0]), parseInt(fraction[1])];
  }
}



function simplifyComplexFraction(numerator: string, denominator: string): [string, string[]] {
  let steps: string[] = [];
  steps.push(`Simplifying the Complex Fraction:`);
  steps.push(`\\frac{${numerator}}{${denominator}}`);

  // Parse mixed numbers
  const [whole1, num1, den1] = parseMixedNumber(numerator);
  const [whole2, num2, den2] = parseMixedNumber(denominator);

  // Convert mixed numbers to improper fractions
  const [impNum1, impDen1] = mixedToImproper(whole1, num1, den1);
  const [impNum2, impDen2] = mixedToImproper(whole2, num2, den2);

  steps.push(`Convert Mixed Numbers to Fractions:`);
  steps.push(`\\frac{${impNum1}}{${impDen1}} \\div \\frac{${impNum2}}{${impDen2}}`);

  // Simplify fractions if possible
  const [simpNum1, simpDen1] = simplifyFraction(impNum1, impDen1);
  const [simpNum2, simpDen2] = simplifyFraction(impNum2, impDen2);

  if (simpNum1 !== impNum1 || simpDen1 !== impDen1 || simpNum2 !== impNum2 || simpDen2 !== impDen2) {
    steps.push(`Reduce fractions where possible:`);
    steps.push(`\\frac{${simpNum1}}{${simpDen1}} \\div \\frac{${simpNum2}}{${simpDen2}}`);
  }

  steps.push(`Method 1: LCD Multiplication`);
  const lcd = lcm(simpDen1, simpDen2);
  steps.push(`The LCD for ${simpDen1} and ${simpDen2} is ${lcd}`);
  steps.push(`Multiply top and bottom by the LCD:`);

  const newNum1 = simpNum1 * (lcd / simpDen1);
  const newNum2 = simpNum2 * (lcd / simpDen2);

  // Adjust for negative denominator
  let adjustedNum1 = newNum1;
  let adjustedNum2 = newNum2;
  if (newNum2 < 0) {
    adjustedNum1 = -newNum1;
    adjustedNum2 = -newNum2;
  }

  steps.push(`\\frac{${adjustedNum1}}{${adjustedNum2}}`);

  steps.push(`Method 2: Fraction Division`);
  steps.push(`Divide the top fraction by the bottom (multiply top by reciprocal of bottom):`);
  steps.push(
    `\\frac{${simpNum1}}{${simpDen1}} \\div \\frac{${simpNum2}}{${simpDen2}} = \\frac{${simpNum1}}{${simpDen1}} \\times \\frac{${simpDen2}}{${simpNum2}}`
  );

  // Compute the result
  const numeratorResult = simpNum1 * simpDen2;
  const denominatorResult = simpDen1 * simpNum2;

  // Adjust for negative denominator
  if (denominatorResult < 0) {
    adjustedNum1 = -numeratorResult;
    adjustedNum2 = -denominatorResult;
  } else {
    adjustedNum1 = numeratorResult;
    adjustedNum2 = denominatorResult;
  }

  steps.push(`= \\frac{${adjustedNum1}}{${adjustedNum2}}`);

  // Simplify the final fraction
  const [simpFinalNum, simpFinalDen] = simplifyFraction(adjustedNum1, adjustedNum2);

  // Convert to mixed number
  const [mixedWhole, mixedNum, mixedDen] = improperToMixed(simpFinalNum, simpFinalDen);

  // Simplify the fractional part
  const [simpMixedNum, simpMixedDen] = simplifyFraction(mixedNum, mixedDen);

  steps.push(`Convert to mixed number and reduce fractions where possible:`);
  if (simpMixedNum === 0) {
    steps.push(`= ${mixedWhole}`);
  } else {
    steps.push(`= ${mixedWhole}\\frac{${simpMixedNum}}{${simpMixedDen}}`);
  }

  const finalResult =
    simpMixedNum === 0 ? `${mixedWhole}` : `${mixedWhole}\\frac{${simpMixedNum}}{${simpMixedDen}}`;
  return [finalResult, steps];
}


export function SimplifyingComplexFractionsCalculator() {
  const [numerator, setNumerator] = useState<string>('');
  const [denominator, setDenominator] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');

  const handleCalculate = () => {
    const [simplifiedFraction, calculationSteps] = simplifyComplexFraction(numerator, denominator);
    setSteps(calculationSteps);
    setResult(simplifiedFraction);
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
        <CardTitle className="text-2xl font-bold">Simplifying Complex Fractions Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>How to use</AlertTitle>
          <AlertDescription>
            Enter the numerator and denominator of the complex fraction you want to simplify, then click Calculate. For mixed numbers, use spaces (e.g., 5 1/3).
          </AlertDescription>
        </Alert>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            value={numerator}
            onChange={(e) => setNumerator(e.target.value)}
            placeholder="Numerator (e.g., 5 1/3)"
          />
          <Input
            value={denominator}
            onChange={(e) => setDenominator(e.target.value)}
            placeholder="Denominator (e.g., -6/15)"
          />
        </div>
        <div className="flex justify-between mb-4">
          <Button onClick={handleClear} variant="outline">Clear</Button>
          <Button onClick={handleCalculate}>Calculate</Button>
        </div>
        {result && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Result:</h3>
            <BlockMath math={result} />
          </div>
        )}
        {steps.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Solution Steps:</h3>
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