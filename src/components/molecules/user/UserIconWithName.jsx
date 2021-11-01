import { memo, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const UserIconWithName = memo((props) => {
  const { image, name } = props
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name}></SImg>
      <SName>{name}</SName>
    </SContainer>
  )
})

const SContainer = styled.div`
  text-align: center;
`

const SImg = styled.img`
  border-radius: 50%;
`

const SName = styled.p`
  font-size: 18p;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`

// const SEdit = styled.span`
//   text-decoration: underline;
//   color: #aaa;
//   cursor: pointer;
// `
