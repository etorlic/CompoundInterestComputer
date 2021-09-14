const principalBox = document.querySelector("#principal")
const interestRateBox = document.querySelector("#interestRate")
const numCompoundedBox = document.querySelector("#numCompounded")
const numYearsBox = document.querySelector("#numYears")
const compInterestSpan = document.querySelector("#compInterestResult")

function computeCompoundInterest() {
  const principal = principalBox.value
  const interestRate = interestRateBox.value
  const numCompounded = numCompoundedBox.value
  const numYears = numYearsBox.value
  const compInterest = principal * ((1 + (interestRate / numCompounded)) ** (numCompounded * numYears))
  compInterestSpan.textContent = compInterest
}

principalBox.addEventListener('input', computeCompoundInterest)
interestRateBox.addEventListener('input', computeCompoundInterest)
numCompoundedBox.addEventListener('input', computeCompoundInterest)
numYearsBox.addEventListener('input', computeCompoundInterest)