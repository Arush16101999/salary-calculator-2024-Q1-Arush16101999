// const calculateResults = () => {
//   const totalEarnings =
//     basicSalary + earnings.reduce((sum, item) => sum + item.amount, 0);
//   const totalEarningsForEPF =
//     basicSalary +
//     earnings.reduce(
//       (sum, item) => (item.epfApplicable ? sum + item.amount : sum),
//       0
//     );
//   const grossDeduction = deductions.reduce(
//     (sum, item) => sum + item.amount,
//     0
//   );
//   const grossEarnings = totalEarnings - grossDeduction;
//   const grossSalaryForEPF = totalEarningsForEPF - grossDeduction;
//   const employeeEPF = grossSalaryForEPF * 0.08;
//   const employerEPF = grossSalaryForEPF * 0.12;
//   const employerETF = grossSalaryForEPF * 0.03;

//   /** APIT Calculation for tac and constant*/
//   const apitCalculation = (grossEarnings) => {
//     let taxPercentage = 0;
//     let constant = 0;

//     if (grossEarnings <= 100000) {
//       return 0;
//     } else if (grossEarnings > 100000 && grossEarnings <= 141667) {
//       taxPercentage = 0.06;
//       constant = 6000;
//     } else if (grossEarnings > 141667 && grossEarnings <= 183333) {
//       taxPercentage = 0.12;
//       constant = 14500;
//     } else if (grossEarnings > 183333 && grossEarnings <= 225000) {
//       taxPercentage = 0.18;
//       constant = 25500;
//     } else if (grossEarnings > 225000 && grossEarnings <= 266667) {
//       taxPercentage = 0.24;
//       constant = 39000;
//     } else if (grossEarnings > 266667 && grossEarnings <= 308333) {
//       taxPercentage = 0.3;
//       constant = 55000;
//     } else {
//       taxPercentage = 0.36;
//       constant = 73500;
//     }
//     const apit = grossEarnings * taxPercentage - constant;
//     return apit;
//   };
//   const apit = apitCalculation(grossEarnings);
//   // console.log(apit);
//   const netSalary = grossEarnings - employeeEPF - apit;
//   const costToCompany = grossEarnings + employerEPF + employerETF;

//   return {
//     totalEarnings,
//     totalEarningsForEPF,
//     grossDeduction,
//     grossEarnings,
//     grossSalaryForEPF,
//     employeeEPF,
//     employerEPF,
//     employerETF,
//     apit,
//     netSalary,
//     costToCompany,
//   };
// };
