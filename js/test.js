

const Songs = [{
    id: 1,
    title: "Duurt te Lang",
    artiest: "Davina Michelle",
    genre: "Pop",
    rating: "1",
    img: "https://img.discogs.com/UKaHfCK3oRiRYHn379Mhxx5M8-E=/600x748/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-6746294-1588440957-7331.jpeg.jpg",
},
{
    id: 2,
    title: "Zij Weet Het",
    artiest: "Tino Martin",
    genre: "Nederlands talig",
    rating: "5",
    img: "https://img.discogs.com/R6qgH2Dn0IyXiXH1Zux9xE5x-_A=/600x900/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-6443210-1599956962-5976.jpeg.jpg",
},
{
    id: 3,
    title: "Blijven Slapen",
    artiest: "Snelle, & Maan",
    genre: "Pop",
    rating: "3",
    img: "https://img.discogs.com/LAr9iybKw27fhLa7Nh4cZfHJiXo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-17811259-1615577547-4662.png.jpg",
},
{
    id: 4,
    title: "De Overkant",
    artiest: "Suzan & Freek",
    genre: "Neder Pop",
    rating: "5",
    img: "https://img.discogs.com/yvgHznWPlgzhs5eL6XgdUy135dE=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5754133-1500292487-5371.jpeg.jpg",
},
{
    id: 5,
    title: "Weg Van Jou",
    artiest: "Suzan & Freek",
    genre: "Nederlands talig",
    rating: "5",
    img: "https://img.discogs.com/yvgHznWPlgzhs5eL6XgdUy135dE=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5754133-1500292487-5371.jpeg.jpg",
},
{
    id: 6,
    title: "Hoe Het Danst",
    artiest: "Marco Borsato",
    genre: "Pop",
    rating: "4",
    img: "https://img.discogs.com/o7zHM3ibZ3Q4u2uBdLAjQZ3im2o=/265x397/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-287375-1114458089.jpg.jpg",

},
{
    id: 7,
    title: "Ze Huilt Maar Ze Lacht",
    artiest: "Maan",
    genre: "Nedelands talig",
    rating: "5",
    img: "https://img.discogs.com/OoORS5ntZJzzx1N9LZ6inJH1KYQ=/600x337/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5010662-1571434517-1590.jpeg.jpg",
},
{
    id: 8,
    title: "Mas Mas Mas",
    artiest: "Rolf Sanchez",
    genre: "Latino",
    rating: "5",
    img: "https://img.discogs.com/7rimA2rA1fTS2Lj12rTDdOolYiM=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5322358-1601367037-8827.jpeg.jpg",
},
{
    id: 9,
    title: "Ven Ven",
    artiest: "Rolf Sanches",
    genre: "Latino",
    rating: "5",
    img: "https://img.discogs.com/7rimA2rA1fTS2Lj12rTDdOolYiM=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5322358-1601367037-8827.jpeg.jpg",
},]
const filterGenreArray = []

Songs.forEach(item => {
    if (!filterGenreArray.includes(item.genre)){
        filterGenreArray.push(item)
    }
})

console.log(filterGenreArray)