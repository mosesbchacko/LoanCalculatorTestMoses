import { fireEvent, render, screen } from '@testing-library/react'
import { LoanRepaymentDetails } from 'src/components/LoanRepaymentDetails'
import { LoanSchedule } from 'src/components/LoanSchedule'
import { LoanCalculatorForm, LoanCalculatorFormValues } from '../components/LoanCalculatorForm/LoanCalculatorForm'

test("Check everything is displaying", () => {
    render(<LoanCalculatorForm onSubmit={function (formData: LoanCalculatorFormValues): void {
        throw new Error('Function not implemented.')
    } } />)
  
    expect(screen.getByText("Loan Amount")).toBeInTheDocument()
    expect(screen.getByDisplayValue(30000)).toBeInTheDocument()
    expect(screen.getByText("Loan Term")).toBeInTheDocument()
    expect(screen.getByDisplayValue(12)).toBeInTheDocument()
    expect(screen.getByText("Interest Rate")).toBeInTheDocument()
    expect(screen.getByDisplayValue(7.5)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()

  })

  test("Clicking on button renders Loan Repayment Details", () => {
    render(<LoanCalculatorForm onSubmit={function (formData: LoanCalculatorFormValues): void {
        throw new Error('Function not implemented.')
    } } />)

    
    const button = screen.getByRole('button')
    fireEvent.click(button)

   expect(screen.getByText("Calculating")).toBeInTheDocument()

    render(<LoanRepaymentDetails />)

    expect(screen.getByText("Monthly Repayment Amount")).toBeInTheDocument()
    expect(screen.getByText("Total Interest Repayable")).toBeInTheDocument()
    expect(screen.getByText("Total Amount Repayable")).toBeInTheDocument()

  })

  test("Clicking on button renders Loan Schedule", () => {
    render(<LoanCalculatorForm onSubmit={function (formData: LoanCalculatorFormValues): void {
        throw new Error('Function not implemented.')
    } } />)

    
    const button = screen.getByRole('button')
    fireEvent.click(button)

   expect(screen.getByText("Calculating")).toBeInTheDocument()

    render(<LoanSchedule instalments={[]} />)

    expect(screen.getByText("Instalment")).toBeInTheDocument()
    expect(screen.getByText("Payment")).toBeInTheDocument()
    expect(screen.getByText("Principal")).toBeInTheDocument()
    expect(screen.getByText("Interest")).toBeInTheDocument()
    expect(screen.getByText("Balance")).toBeInTheDocument()

  })


  