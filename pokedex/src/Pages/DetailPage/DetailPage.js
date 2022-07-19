import React from 'react'
import {DetailContainer, CardLeft, CardCenter, CardRight} from './styled'
import Header from '../../components/Header'
import styled from 'styled-components'

const Container = styled.div`

`

export default function DetailPage() {
    return(
        <Container>
            <Header />
        <DetailContainer>
            <CardLeft></CardLeft>
            <CardCenter></CardCenter>
            <CardRight></CardRight>
        </DetailContainer>
        </Container>
    )
    }
