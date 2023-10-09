let prompt = require('prompt-sync')();

basicSalary = parseInt(prompt("Please enter your basic salary: "));
      totalBenefits =parseInt(prompt("Please enter your benefits: "));


  const personalRelief = 2400;
//calculate payeetax
  function calculatePAYEETax(income) {
    if (income <= 24000) {
      return income * 0.1;
    } else if (income <= 32333) {
      return 24000 * 0.1 + (income - 24000) * 0.25;
    } else if (income <= 500000) {
      return 24000 * 0.1 + 8333 * 0.25 + (income - 32333) * 0.3;
    } else if (income <= 800000) {
      return (
        24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (income - 500000) * 0.325
      );
    } else {
      return (
        24000 * 0.1 +
        8333 * 0.25 +
        467667 * 0.3 +
        300000 * 0.325 +
        (income - 800000) * 0.35
      );
    }
  }
//it calculates the NHIF contribution
  function calculateNHIFContribution(gross) {
    if (gross <= 5999) {
      return 150;
    } else if (gross <= 7999) {
      return 300;
    } else if (gross <= 11999) {
      return 400;
    } else if (gross <= 14999) {
      return 500;
    } else if (gross <= 19999) {
      return 600;
    } else if (gross <= 24999) {
      return 750;
    } else if (gross <= 29999) {
      return 850;
    } else if (gross <= 34999) {
      return 900;
    } else if (gross <= 39999) {
      return 950;
    } else if (gross <= 44999) {
      return 1000;
    } else if (gross <= 49999) {
      return 1100;
    } else if (gross <= 59999) {
      return 1200;
    } else if (gross <= 69999) {
      return 1300;
    } else if (gross <= 79999) {
      return 1400;
    } else if (gross <= 89999) {
      return 1500;
    } else if (gross <= 99999) {
      return 1600;
    } else {
      return 1700;
    }
  }
//Calculate the NSSF contribution as 6% of the gross salary, up to a maximum of 6000.
  function calculateNSSFContribution(gross) {
    let nssf = 0.06 * gross;

    if (nssf <= 6000) {
      return nssf;
    } else {
      return 6000;
    }
  }
//Calculate the housing levy as 1.5% of the gross salary.
  function calculateHousingLevy(gross) {
    return 0.015 * gross;
  }

  grossIncome = basicSalary + totalBenefits;

  nhifContribution = calculateNHIFContribution(grossIncome);
  nssfContribution = calculateNSSFContribution(grossIncome);
  housingLevy = calculateHousingLevy(grossIncome);
  taxableIncome = grossIncome - (personalRelief + nhifContribution + nssfContribution + housingLevy);
  payeeTax = calculatePAYEETax(taxableIncome);
  netIncome = taxableIncome - payeeTax;

//log the input to the console to get results
  console.log(`Gross Salary: ${grossIncome} \n`);
  console.log(`NHIF Deductions: ${nhifContribution} \n`);
  console.log(`NSSF Deductions: ${nssfContribution} \n`);
  console.log(`PAYE Tax: ${payeeTax} \n`);
  console.log(`Net Salary: ${netIncome} \n`);
