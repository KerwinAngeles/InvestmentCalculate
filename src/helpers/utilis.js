
export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
}) {
    const annualData = [];
    let investmentValue = initialInvestment;
    let totalInterest = 0;
    let investedCapital = initialInvestment

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        totalInterest += interestEarnedInYear;
        investedCapital += annualInvestment;
        investmentValue += interestEarnedInYear + annualInvestment;

        annualData.push({
            year: i + 1, 
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            investedCapital: investedCapital
        });
    }

    return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})