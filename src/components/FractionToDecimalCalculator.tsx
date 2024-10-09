import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function simplifyFraction(numerator: number, denominator: number): [number, number] {
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

function fractionToDecimal(numerator: number, denominator: number, roundTo: number): [string, string[]] {
  let steps: string[] = [];
  steps.push(`Converting \\frac{${numerator}}{${denominator}} to a decimal:`);

  if (denominator === 0) {
    steps.push("Error: Division by zero is undefined.");
    return ["Undefined", steps];
  }

  if (numerator === 0) {
    steps.push("The fraction is equal to 0.");
    return ["0", steps];
  }

  const [simpNum, simpDen] = simplifyFraction(numerator, denominator);
  if (simpNum !== numerator || simpDen !== denominator) {
    steps.push(`Simplify the fraction: \\frac{${numerator}}{${denominator}} = \\frac{${simpNum}}{${simpDen}}`);
    numerator = simpNum;
    denominator = simpDen;
  }

  steps.push(`Perform long division:`);
  let quotient = Math.floor(numerator / denominator);
  let remainder = numerator % denominator;
  let decimalPart = "";
  let position = 0;

  steps.push(`${numerator} ÷ ${denominator} = ${quotient} remainder ${remainder}`);

  while (remainder !== 0 && position < 15) {
    remainder *= 10;
    let digit = Math.floor(remainder / denominator);
    decimalPart += digit.toString();
    remainder %= denominator;
    position++;

    steps.push(`${remainder * 10} ÷ ${denominator} = ${digit} remainder ${remainder}`);
  }

  let result: string;
  if (decimalPart === "") {
    result = quotient.toString();
  } else {
    result = `${quotient}.${decimalPart}`;
  }

  if (roundTo > 0) {
    const roundedResult = Number(result).toFixed(roundTo);
    steps.push(`Round to ${roundTo} decimal places: ${roundedResult}`);
    result = roundedResult;
  }

  return [result, steps];
}

export function FractionToDecimalCalculator() {
  const [numerator, setNumerator] = useState<string>('');
  const [denominator, setDenominator] = useState<string>('');
  const [roundTo, setRoundTo] = useState<number>(-1);
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);

  const handleCalculate = () => {
    const num = parseInt(numerator);
    const den = parseInt(denominator);

    if (isNaN(num) || isNaN(den)) {
      setSteps(['Please enter valid numbers for both numerator and denominator.']);
      setResult('');
      return;
    }

    const [calculatedResult, calculationSteps] = fractionToDecimal(num, den, roundTo);
    setResult(calculatedResult);
    setSteps(calculationSteps);
  };

  const handleClear = () => {
    setNumerator('');
    setDenominator('');
    setRoundTo(-1);
    setResult('');
    setSteps([]);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Convert Fraction to Decimal</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>How to use</AlertTitle>
          <AlertDescription>
            Enter the numerator and denominator of the fraction, select rounding option if needed, then click Calculate.
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
        <div className="flex items-center gap-4 mb-4">
          <span>Round Decimals to:</span>
          <Select value={roundTo.toString()} onValueChange={(value) => setRoundTo(parseInt(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select rounding" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="-1">Do Not Round</SelectItem>
              <SelectItem value="0">0 (ones)</SelectItem>
              <SelectItem value="1">1 (tenths)</SelectItem>
              <SelectItem value="2">2 (hundredths)</SelectItem>
              <SelectItem value="3">3 (thousandths)</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between mb-4">
          <Button onClick={handleClear} variant="outline">Clear</Button>
          <Button onClick={handleCalculate}>Calculate</Button>
        </div>
        {result && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Answer:</h3>
            <BlockMath math={`\\frac{${numerator}}{${denominator}} = ${result}`} />
          </div>
        )}
        {steps.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Showing the work:</h3>
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