// Only displays 5 records
// Should not be rendered when contact is loaded
// next and prev button should be disabled when there is no next or prev page
import React from 'react'

const Paginater = ({
  totalPages,
  hasPrevPage,
  prevPage,
  hasNextPage,
  nextPage,
  page,
}) =>
  page != totalPages ? (
    <div className="contactInfoPaginatorWrapper">
      <div>
        Page {page} of {totalPages}
      </div>
      <div>
        <button disabled={hasPrevPage} onClick={prevPage}>
          prev
        </button>
        <button disabled={hasNextPage} onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  ) : (
    <></>
  )

export default Paginater
