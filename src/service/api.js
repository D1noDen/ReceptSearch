export async function FetchRecept(text){
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=c4b12d1f&app_key=ca26220ec62a25cc8bfed9ee03a7b400`)
    return res.json()
}