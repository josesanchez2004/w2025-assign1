/**API endpoints and server in express and supabase
 * @author Jose Sanchez
 */

const express = require('express');
const supa = require('@supabase/supabase-js');

const app = express();

const supaUrl = 'https://mezedufqtnqluhxmfchd.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lemVkdWZxdG5xbHVoeG1mY2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MzQ5ODcsImV4cCI6MjA1NjAxMDk4N30.n_y_GU5CVggsy_OsrZ91lhzL3vjfWuxhSfI8ytuseak';

const supabase = supa.createClient(supaUrl, supaAnonKey);


/**
 * Listens for a connection on port 8080, logs the localhost. 
 */
app.listen(8080, () => {
    console.log('listening on port 8080');
    console.log('http://localhost:8080');
});

/**
 * Returns all the eras
 */
app.get('/api/eras', async (req, res) => {
    const {data, error} = await supabase
    .from('Eras')
    .select("*");
    
    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Returns all the galleries
 */
app.get('/api/galleries' , async (req,res) => {
    const {data,error} = await supabase
    .from("Galleries")
    .select("*");

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns a single gallery by the id
 */
app.get(`/api/galleries/:id` , async (req,res) => {

    const galleryId = req.params.id;

    const {data,error}  = await supabase
    .from("Galleries")
    .select("*")
    .eq("galleryId", galleryId);

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the galleries whose galleryCountry begins with the provided substring
 */
app.get('/api/galleries/country/:substring' , async (req,res) => {

    const substring = req.params.substring;

    const {data,error} = await supabase
    .from("Galleries")
    .select("*")
    .ilike("galleryCountry", `${substring}%`)

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all artists 
 */
app.get('/api/artists', async (req,res) => {

    const {data,error} = await supabase
    .from("Artists")
    .select("*")

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the specified artist by id
 */
app.get('/api/artists/:id' , async (req,res) => {

    const id = req.params.id;

    const {data,error} = await supabase
    .from("Artists")
    .select("*")
    .eq("artistId", id);

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the artist whose last name begins with the provided substring
 */
app.get("/api/artists/search/:substring" , async(req,res) => {

    const substring = req.params.substring;

    const {data,error} = await supabase
    .from("Artists")
    .select("*")
    .ilike("lastName", `${substring}%`);

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the artists whose nationality begins with the provided substring
 */
app.get("/api/artists/country/:substring" , async(req,res) => {
    
    const substring = req.params.substring;

    const {data,error} = await supabase
    .from("Artists")
    .select("*")
    .ilike("nationality", `${substring}%`);

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all paintings
 */
app.get("/api/paintings" , async(req,res) => {
    
    const {data,error} = await supabase 
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .order("title" , {ascending: true});

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all paintings sorted by title or yearOfWork
 */
app.get("/api/paintings/sort/:choice" , async(req,res) => {

    const choice = req.params.choice == 'title' ? "title" : "yearOfWork";

    const {data,error} = await supabase 
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .order( `${choice}` , {ascending: true});

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the specified painting by id
 */

app.get("/api/paintings/:id", async(req,res) => {

    const id = parseInt(req.params.id);

    const {data, error} = await supabase
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .eq("paintingId", id)
    .order("title" , {ascending: true});

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
    
})

/**
 * Returns the paintings whose title contains the provided substring
 */
app.get("/api/paintings/search/:substring" , async(req,res) => {

    const substring = req.params.substring;

    const {data,error}  = await supabase 
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .ilike("title" ,  `${substring}%`)
    .order("title" , {ascending: true});

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }

})

/**
 * Returns the paintings between two dates ordered by year in ascending order 
 */
app.get("/api/paintings/years/:start/:end" , async(req,res) => {

    const start = req.params.start;
    const end = req.params.end;

    const {data, error}  = await supabase 
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .gt("yearOfWork", start)
    .lt("yearOfWork", end)
    .order("title", {ascending: true} );

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all paintings in a given gallery
 */
app.get("/api/paintings/galleries/:id", async(req,res) => {
    
    const id = req.params.id;

    const {data, error} = await supabase
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .eq("galleryId" , id)
    .order("title", {ascending: true});

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all paintings by artists whose nationality begins with the provided substring
 */
app.get("/api/paintings/artist/:id" , async(req,res) => {

    const id = req.params.id;

    const {data,error} = await supabase
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .eq("artistId", id)

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all the paintings by artists whose nationality begins with the provided substring 
 */
app.get("/api/paintings/artists/country/:substring", async(req,res) => {
    const substring = req.params.substring;

    const {data,error} = await supabase
    .from("Paintings")
    .select("paintingId, imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations, Artists!inner(artistId, firstName, lastName, nationality, gender, yearOfBirth, yearOfDeath, details , artistLink), Galleries(galleryId, galleryName, galleryNativeName, galleryCity, galleryAddress, galleryCountry, latitude, longitude, galleryWebSite, flickrPlaceId, yahooWoeId, googlePlaceId)")
    .ilike("Artists.nationality", `${substring}%`);

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})


/**
 * Returns all the genres
 */
app.get("/api/genres", async(req,res) => {

    const {data, error} = await supabase 
    .from("Genres")
    .select("genreId, genreName, eraId, description, wikiLink , Eras(eraId, eraName, eraYears)");

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the specified genre by id 
 */
app.get("/api/genres/:id" , async(req,res) => {

    const id = req.params.id;

    const {data, error} = await supabase
    .from("Genres")
    .select("genreId, genreName, eraId, description, wikiLink , Eras(eraId, eraName, eraYears)")
    .eq("genreId", id);

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the genres used in a given painting 
 */
app.get("/api/genres/painting/:id", async(req, res) => {

    const id = parseInt(req.params.id);

    const {data,error} = await supabase
    .from("PaintingGenres")
    .select("Genres!inner(genreId, genreName, eraId, description, wikiLink, Eras!inner(eraId, eraName, eraYears) )")
    .eq("paintingId", id)
    .order("genreName" , {foreignTable:"Genres",ascending: true});

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all the paintings for a given genre by id
 */
app.get("/api/paintings/genre/:id" , async(req,res) => {
    const id = req.params.id;

    const {data,error} = await supabase 
    .from("Paintings")
    .select("paintingId, title, yearOfWork , PaintingGenres!inner(genreId)")
    .eq("PaintingGenres.genreId",id)
    .order("yearOfWork", {ascending: true});

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns all the paintings for a given era by id 
 */
app.get("/api/paintings/era/:id" , async(req,res) => {
    const id = req.params.id;

    const {data,error} = await supabase
    .from("Paintings")
    .select("paintingId, title, yearOfWork, PaintingGenres!inner(Genres!inner(Eras!inner(eraId, eraName, eraYears)))")
    .eq("PaintingGenres.Genres.Eras.eraId", id)
    .order("yearOfWork", { ascending: true });

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

/**
 * Returns the genre name and the number of paintings for each genre, sorted by the number of paintings
 */
app.get("/api/counts/genres" , async(req,res) => {
    
    const { data, error } = await supabase

    //created view using the sql editor within supabase and are querying the data within it 
    .from("genre_painting_counts")
    .select("*")

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }

})

/**
 * Returns the artist name and the number of paintings for each artist, sorted by the number of paintings
 */
app.get("/api/counts/artists" , async(req,res) => {
    const { data, error } = await supabase

    //created view using the sql editor within supabase and are querying the data within it 
    .from("artist_count")
    .select("*")

    if(!error){
        res.send(data);
    }else{
        console.log("Supabase Query Error:", error);
        return res.status(500).json({ error: error.message });
    }
})

app.get("/api/counts/topgenres/:id", async (req, res) => {
    res.send({Error: "This endpoint has not been implemented yet."});
});
