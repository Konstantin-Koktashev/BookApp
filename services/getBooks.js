const apiKey='AIzaSyCe9zjgBTQ6483TXF3jqHlPHtgvD8fXC-s';


export async  function getBooks(querySearch='happy'){
    const url=`https://www.googleapis.com/books/v1/volumes?q=${querySearch}&filter=paid-ebooks&key=${apiKey}&maxResults=10`
    const deFaultBooks= await fetch(url).then(res=>res.json())
    return deFaultBooks
    
}














