# COMP 4513 (Winter 2025)
### Assignment #1: Node, SQL (via supabase)

# Overview
This project is an API for querying an art database that has information related to paintings, artists, genres, and galleries. 

# Built With

**Node.js** - JS runtime

**Express** - Routing

**Render** - For deployment 

# **Example Response**
* https://w2025-assign1-jzrm.onrender.com/api/eras
```
[
  {
    "eraId": 1,
    "eraName": "Medieval",
    "eraYears": "Before 1400"
  },
  {
    "eraId": 2,
    "eraName": "Renaissance",
    "eraYears": "1400-1550"
  },
  {
    "eraId": 3,
    "eraName": "Post Renaissance",
    "eraYears": "1550-1700"
  },
  {
    "eraId": 4,
    "eraName": "Early Modern",
    "eraYears": "1700-1875"
  },
  {
    "eraId": 5,
    "eraName": "Modern",
    "eraYears": "1875-1945"
  },
  {
    "eraId": 6,
    "eraName": "Contemporary",
    "eraYears": "After 1945"
  }
]
```


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
/api/genres | Returns all the genres 
/api/genres/:ref | Returns the specified genre by id  
/api/genres/painting/:ref | Returns the genres used in a given painting  
/api/paintings/genre/:ref | Returns all the paintings for a given genre  
/api/paintings/era/:ref | Returns all the paintings for a given era  
/api/counts/genres | Returns the genre name and the number of paintings for each genre 
/api/counts/artists | Returns the artis name and the numer of paintings for each artist 
/api/counts/topgenres/:ref | Returns the genre name and the number of paintings for each genre 

# **Test Links**

* https://w2025-assign1-jzrm.onrender.com/api/eras
* https://w2025-assign1-jzrm.onrender.com/api/galleries
* https://w2025-assign1-jzrm.onrender.com/api/galleries/30
* https://w2025-assign1-jzrm.onrender.com/api/galleries/Calgary
* https://w2025-assign1-jzrm.onrender.com/api/galleries/country/fra
* https://w2025-assign1-jzrm.onrender.com/api/artists
* https://w2025-assign1-jzrm.onrender.com/api/artists/12
* https://w2025-assign1-jzrm.onrender.com/api/artists/1223423
* https://w2025-assign1-jzrm.onrender.com/api/artists/search/ma
* https://w2025-assign1-jzrm.onrender.com/api/artists/search/mA
* https://w2025-assign1-jzrm.onrender.com/api/artists/country/fra
* https://w2025-assign1-jzrm.onrender.com/api/paintings
* https://w2025-assign1-jzrm.onrender.com/api/paintings/sort/year
* https://w2025-assign1-jzrm.onrender.com/api/paintings/63
* https://w2025-assign1-jzrm.onrender.com/api/paintings/search/port
* https://w2025-assign1-jzrm.onrender.com/api/paintings/search/pORt
* https://w2025-assign1-jzrm.onrender.com/api/paintings/search/connolly
* https://w2025-assign1-jzrm.onrender.com/api/paintings/years/1800/1850
* https://w2025-assign1-jzrm.onrender.com/api/paintings/galleries/5
* https://w2025-assign1-jzrm.onrender.com/api/paintings/artist/16
* https://w2025-assign1-jzrm.onrender.com/api/paintings/artist/666
* https://w2025-assign1-jzrm.onrender.com/api/paintings/artist/country/ital
* https://w2025-assign1-jzrm.onrender.com/api/genres
* https://w2025-assign1-jzrm.onrender.com/api/genres/76
* https://w2025-assign1-jzrm.onrender.com/api/genres/painting/408
* https://w2025-assign1-jzrm.onrender.com/api/genres/painting/jsdfhg
* https://w2025-assign1-jzrm.onrender.com/api/paintings/genre/78
* https://w2025-assign1-jzrm.onrender.com/api/paintings/era/2
* https://w2025-assign1-jzrm.onrender.com/api/counts/genres
* https://w2025-assign1-jzrm.onrender.com/api/counts/artists
* https://w2025-assign1-jzrm.onrender.com/api/counts/topgenres/20
* https://w2025-assign1-jzrm.onrender.com/api/counts/topgenres/2034958
