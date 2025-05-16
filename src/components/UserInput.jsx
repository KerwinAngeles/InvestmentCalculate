import React from 'react'
import { Input } from './Input'
import { useState } from 'react'
import TableResult from './TableResult';
import { calculateInvestmentResults, formatter } from '../helpers/utilis';

const UserInput = () => {

  const [initialInvestment, setInitialInvesmentValue] = useState(15000);
  const [anualInvesment, setAnualInvesmentValue] = useState(1200);
  const [expectedReturn, setExpectedReturnValue] = useState(6);
  const [duration, setDurationValue] = useState(10);

  const handledChangeInitialInvestment = (e) => {
    setInitialInvesmentValue(Number(e.target.value))
  }

  const handledChangeanualInvesment = (e) => {
    setAnualInvesmentValue(Number(e.target.value))
  }

  const handledChangeExpectedReturn = (e) => {
    setExpectedReturnValue(Number(e.target.value))
  }

  const handledChangeDuration = (e) => {
    setDurationValue(Number(e.target.value))
  }

  const data = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: anualInvesment,
    expectedReturn: expectedReturn,
    duration: duration
  })

  return (
    <>
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-green-950 rounded-md shadow-2xl p-6 sm:p-10 flex flex-col justify-center items-center gap-6">
          <div className="grid justify-center gap-6 md:justify-between lg:justify-center sm:grid-cols-2">
            <Input
              defaultValue={initialInvestment}
              handledChange={handledChangeInitialInvestment}
              placeHolder="Initial Investment"
            >
              Initial Investment
            </Input>
            <Input
              defaultValue={anualInvesment}
              handledChange={handledChangeanualInvesment}
              placeHolder="Annual Investment"
            >
              Annual Investment
            </Input>
            <Input
              defaultValue={expectedReturn}
              handledChange={handledChangeExpectedReturn}
              placeHolder="Expected Return"
            >
              Expected Return
            </Input>
            <Input
              defaultValue={duration}
              handledChange={handledChangeDuration}
              placeHolder="Duration"
            >
              Duration
            </Input>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-auto">
        {duration < 0 ? (
          <p className="text-center font-bold text-gray-900 py-10">Enter a valid duration</p>
        ) : (
          <TableResult>
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2">{item.year}</td>
                <td className="px-4 py-2">{formatter.format(item.valueEndOfYear)}</td>
                <td className="px-4 py-2">{formatter.format(item.interest)}</td>
                <td className="px-4 py-2">{formatter.format(item.totalInterest)}</td>
                <td className="px-4 py-2">{formatter.format(item.investedCapital)}</td>
              </tr>
            ))}
          </TableResult>
        )}
      </section>
    </>
  )
}

export default UserInput