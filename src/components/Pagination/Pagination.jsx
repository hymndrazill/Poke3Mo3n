const Pagination = ( {  nextUrl, prevUrl    }) => {
    return (
    <div className='btn button'>
    {prevUrl && <button onClick={prevUrl}> Prev</button>} 
    {nextUrl && <button onClick={nextUrl}>Next</button>} 
    </div>
    )
}

export default Pagination