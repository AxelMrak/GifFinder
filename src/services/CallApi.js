/**
 * * Call API Function
 * ? Through the URL provided by Giphy we will do a call to API and we will receive a response
 * @param { Receive the keyword, this keyword will passed to URL } param0 
 * @returns The fetch and the response of API
 */
export async function CallApi({ keyword = 'cats' }) {

    // URL provide by Giphy
    const url = `https://api.giphy.com/v1/gifs/search?api_key=otRpzRdhk2LbJmF3ERUezAHFt9ElNef8&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    // Call to URL and receive a response and this is transformed to JSON, after is transforme to array.  
    return await fetch(url)
        .then(response => response.json())
        .then(response => {
            const { data = [] } = response;
            // We will access to data provide by API.
            const gifs = data.map(gif => gif);
            return gifs;
        })
        // Takes or catch the errors
        .catch(e =>
            console.error('Error:' + e)
        )

}

