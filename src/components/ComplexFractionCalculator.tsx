import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from 'lucide-react';

type Operation = '+' | '-' | '×' | '÷';

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
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

function calculateComplexFraction(num1: string, den1: string, num2: string, den2: string, operation: Operation): [string, string[]] {
  let steps: string[] = [];
  steps.push(`Calculating: \\frac{${num1}}{${den1}} ${operation} \\frac{${num2}}{${den2}}`);

  // Parse mixed numbers
  const [whole1, n1, d1] = parseMixedNumber(num1);
  const [whole2, n2, d2] = parseMixedNumber(den1);
  const [whole3, n3, d3] = parseMixedNumber(num2);
  const [whole4, n4, d4] = parseMixedNumber(den2);

  // Convert mixed numbers to improper fractions
  const [impNum1, impDen1] = mixedToImproper(whole1, n1, d1);
  const [impNum2, impDen2] = mixedToImproper(whole2, n2, d2);
  const [impNum3, impDen3] = mixedToImproper(whole3, n3, d3);
  const [impNum4, impDen4] = mixedToImproper(whole4, n4, d4);

  steps.push(`Convert mixed numbers to improper fractions:`);
  steps.push(`\\frac{${impNum1}}{${impDen1}} \\div \\frac{${impNum2}}{${impDen2}} ${operation} \\frac{${impNum3}}{${impDen3}} \\div \\frac{${impNum4}}{${impDen4}}`);

  // Perform division for each complex fraction
  const leftNum = impNum1 * impDen2;
  const leftDen = impDen1 * impNum2;
  const rightNum = impNum3 * impDen4;
  const rightDen = impDen3 * impNum4;

  steps.push(`Simplify each complex fraction:`);
  steps.push(`\\frac{${leftNum}}{${leftDen}} ${operation} \\frac{${rightNum}}{${rightDen}}`);

  // Perform the operation
  let resultNum: number, resultDen: number;
  switch (operation) {
    case '+':
      resultNum = leftNum * rightDen + rightNum * leftDen;
      resultDen = leftDen * rightDen;
      break;
    case '-':
      resultNum = leftNum * rightDen - rightNum * leftDen;
      resultDen = leftDen * rightDen;
      break;
    case '×':
      resultNum = leftNum * rightNum;
      resultDen = leftDen * rightDen;
      break;
    case '÷':
      resultNum = leftNum * rightDen;
      resultDen = leftDen * rightNum;
      break;
  }

  steps.push(`Perform the ${operation} operation:`);
  steps.push(`= \\frac{${resultNum}}{${resultDen}}`);

  // Simplify the result
  const [simpNum, simpDen] = simplifyFraction(resultNum, resultDen);
  if (simpNum !== resultNum || simpDen !== resultDen) {
    steps.push(`Simplify the result:`);
    steps.push(`= \\frac{${simpNum}}{${simpDen}}`);
  }

  // Convert to mixed number if necessary
  const [mixedWhole, mixedNum, mixedDen] = improperToMixed(simpNum, simpDen);
  if (mixedWhole !== 0) {
    steps.push(`Convert to mixed number:`);
    steps.push(`= ${mixedWhole}\\frac{${mixedNum}}{${mixedDen}}`);
  }

  const finalResult = mixedWhole === 0 ? `\\frac{${simpNum}}{${simpDen}}` : `${mixedWhole}\\frac{${mixedNum}}{${mixedDen}}`;
  return [finalResult, steps];
}

export function ComplexFractionCalculator() {
  const [num1, setNum1] = useState<string>('');
  const [den1, setDen1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [den2, setDen2] = useState<string>('');
  const [operation, setOperation] = useState<Operation>('+');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);

  const handleCalculate = () => {
    const [calculatedResult, calculationSteps] = calculateComplexFraction(num1, den1, num2, den2, operation);
    setResult(calculatedResult);
    setSteps(calculationSteps);
  };

  const handleClear = () => {
    setNum1('');
    setDen1('');
    setNum2('');
    setDen2('');
    setOperation('+');
    setResult('');
    setSteps([]);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Complex Fraction Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>How to use</AlertTitle>
          <AlertDescription>
            Enter fractions, mixed numbers, or integers for each part of the complex fraction. Select an operation, then click Calculate.
          </AlertDescription>
        </Alert>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Numerator 1 (e.g., 5 1/3)"
          />
          <Input
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Numerator 2 (e.g., 7/3)"
          />
          <Input
            value={den1}
            onChange={(e) => setDen1(e.target.value)}
            placeholder="Denominator 1 (e.g., -6/15)"
          />
          <Input
            value={den2}
            onChange={(e) => setDen2(e.target.value)}
            placeholder="Denominator 2 (e.g., -1 1/5)"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <Select value={operation} onValueChange={(value) => setOperation(value as Operation)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select operation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+">Addition (+)</SelectItem>
              <SelectItem value="-">Subtraction (-)</SelectItem>
              <SelectItem value="×">Multiplication (×)</SelectItem>
              <SelectItem value="÷">Division (÷)</SelectItem>
            </SelectContent>
          </Select>
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