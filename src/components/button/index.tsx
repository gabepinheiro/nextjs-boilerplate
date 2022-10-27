import { css } from '@emotion/react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue[100]};
    color: ${theme.colors.blackAlpha[900]};
    padding: ${theme.space[1]};
    border-radius: ${theme.radii.sm};
  `}
`

export function Button() {
  return <StyledButton>MyButton</StyledButton>
}
