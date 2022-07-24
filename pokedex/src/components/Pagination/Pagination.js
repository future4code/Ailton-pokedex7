import React from 'react'
import { usePagination, DOTS } from '../Hooks/usePagination'
import * as Styled from './styled'
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    itemsPerPage
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    itemsPerPage
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  let lastPage = paginationRange[paginationRange.length - 1]

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

  return (
    <Styled.Container>
        {
            currentPage === 1 ?
            <Styled.Item>
                <Styled.DisabledLeft transform={'rotate(-135deg)'}/>
            </Styled.Item> :
            <Styled.Item onClick={(e) => goToTop(onPageChange(currentPage - 1))}>
                <Styled.ArrowLeft/>
            </Styled.Item>
        }
        {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
            return <Styled.Dots key={index} >&#8230;</Styled.Dots>
            }
            return (
                pageNumber === currentPage ? 
                <Styled.ItemSelected 
                    onClick={() => goToTop(onPageChange(pageNumber))}
                    key={index}
                >
                    {pageNumber}
                </Styled.ItemSelected> :
                <Styled.Item 
                    onClick={() => goToTop(onPageChange(pageNumber))}
                    key={index}
                >
                    {pageNumber}
                </Styled.Item>
            )
        })}
        {
            currentPage === lastPage ? 
            <Styled.Item>
                <Styled.DisabledRight transform={'rotate(45deg)'} />
            </Styled.Item> :
            <Styled.Item onClick={() => goToTop(onPageChange(currentPage + 1))}>
                <Styled.ArrowRight />
            </Styled.Item>
        }
    </Styled.Container>
  )
}

export default Pagination