const yelpAPIkey = 'YOUR-YELP-API-KEY';
const yelpBaseUrl = 'https://api.yelp.com/v3';

// function to retrieve business listings
const getYelpRequest = async (searchTerm, location, sortOption) => {
    // construct URL
    const searchBusiness = '/businesses/search';
    const headers = {
        Authorization: `Bearer ${yelpAPIkey}`,
    };
    const requestParams = `?term=${searchTerm}&location=${location}&sort_by=${sortOption}`;
    // bypass CORS restrictions
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    const urlToFetch = `${yelpBaseUrl}${searchBusiness}${requestParams}`;

    // handle fetch
    try {
        const response = await fetch(urlToFetch, {headers});
        if (response.ok) {
            const jsonResponse = await response.json();
            // map array of restaurant businesses
            const restaurants = jsonResponse.businesses.map((business) => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: `${business.location.address3 || ''} ${business.location.address1} ${business.location.address2 || ''}`,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                };
            });
            // array of restaurant businesses
            return restaurants;
        }
    } catch (error) {
        console.log(error);
    }
};

export default getYelpRequest;
