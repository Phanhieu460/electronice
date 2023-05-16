import { useAppSelector } from 'app/hook'
import React, { useState } from 'react'

type Props = {}

const Pagination = (props: any) => {
  const [pageNumber, setPageNumber] = useState<Number>(1)
  console.log(props)
  const { pages } = useAppSelector(state => state.product)
  const renderPagination = () => {
    for (var i = 0; i <= pages; i++) {
      console.log(i, pages)
      return <button className="pagination-item">{i + 1}</button>
    }
  }
  return <div className="pagination">{renderPagination()}</div>
}

export default Pagination
