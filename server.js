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
    res.send(data);
});

/**
 * Returns all the galleries
 */
app.get('/api/galleries' , async (req,res) => {
    const {data,error} = await supabase
    .from("Galleries")
    .select("*");

    res.send(data);
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

    res.send(data);
})

/**
 * Returns the galleries whose galleryCountry begins with the provided substring
 */
app.get('/api/galleries/country/:substring' , async (req,res) => {

    const substring = req.params.substring;

    console.log(substring);

    const {data,error} = await supabase
    .from("Galleries")
    .select("*")
    .ilike("galleryCountry", `${substring}%`)

    res.send(data);
})
