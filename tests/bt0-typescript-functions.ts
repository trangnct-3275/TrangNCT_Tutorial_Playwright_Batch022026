import { test } from '@playwright/test';

function sum(a: number, b: number): number {
  const sum = a+b;
  return sum;
}

const multiply = (a:number, b:number) : number => {
  return a*b;
};

function greet(name: string, role: string) {
  console.log(`Hello ${name}, your role is ${role}`);
}

async function delayPrint(msg: string, time: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}

test('Demo', async () => {
  const resultSum = sum(10,5);
  console.log(`Result 1: ${resultSum}`);
  const resultMultiply = multiply(6,7);
  console.log(`Result 2: ${resultMultiply}`);
  greet("Tracy", "System Admin");
  console.log("Happy");
  await delayPrint('New', 5000);
  console.log("Year");
});
