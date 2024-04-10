// Style your elements here
import styled from 'styled-components'

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  max-width: 100%;
`

export const Text = styled.p`
  font-family: Roboto;
  font-size: 24px;
  color: #ffffff;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #3c2940;
  }
`
