import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../../test-utils"
import Footer from "../index"


it("Show footer contents", () => {
  render(<Footer/>)
  const textElement = screen.getByText(/ab3id/i)
  expect(textElement).toBeInTheDocument()
})
