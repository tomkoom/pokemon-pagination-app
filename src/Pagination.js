import { Button } from 'react-bootstrap';
import React from 'react'

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div className="d-flex justify-content-center my-4" style={{gap: '12px'}}>
            {gotoPrevPage && <Button onClick={gotoPrevPage}>Previous</Button>}
            {gotoNextPage && <Button utton onClick={gotoNextPage}>Next</Button>}
        </div>
    )
}

export default Pagination
