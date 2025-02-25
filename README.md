# COMP 4513 (Winter 2025)
### Assignment #1: Node, SQL (via supabase)

# Overview
This project is an API for querying an art database that has information related to paintings, artists, genres, and galleries. 

# Built With

**Node.js** - JS runtime

**Express** - Routing

**Render** - For deployment -

# **API Endpoints**

**API Endpoint**  | **Description** 
------------- | ------------
/api/eras     | Returns all the eras 
/api/galleries | Returns all the galleries
/api/galleries/:ref | Returns the specified gallery by id 
/api/galleries/country/:substring | Returns the galleries whose galleryCountry begins with the provided substring
/api/artists | Returns all the artists
/api/artists/:ref | Returns the specified artist by id
/api/artists/search/:substring | Returns all the artists whose last name begins with the provided substring
/api/artists/country/:substring | Returns the artists whose nationality begins with the provided substring
/api/paintings | Returns all the paintings 
/api/paintings/sort/:(title or year) | Returns all the paintings sorted by either title or yearOfWork
/api/paintings/:ref | Returns the specified painting by id
/api/paintings/search/:substring | Returns the paintings whose title contains the provided substring 
/api/paintings/years/:start/:end | Returns all the paintings between two years, ordered by yearOfWork
/api/paintings/galleries/:ref | Returns all the paintings in a given gallery
/api/paintings/artist/:ref | Returns all the paintings by a given artist by id
/api/paintings/artists/country/:ref | Returns all the paintings by artists whose nationality begins with the provided substring
/api/genres | Returns all the enres
/api/genres/:ref | Returns the specified genre by id 
/api/genres/painting/:ref | Returns the genres used in a given painting 
/api/paintings/genre/:ref | Returns all the paintings for a given genre 
/api/paintings/era/:ref | Returns all the paintings for a given era 
/api/counts/genres | Returns the genre name and the number of paintings for each genre
/api/counts/artists | Returns the artis name and the numer of paintings for each artist
/api/counts/topgenres/:ref | Returns the genre name and the number of paintings for each genre

# Test Links

* 

  
