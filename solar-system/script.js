const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetsArray = planets.forEach(planetsArray => {
    document.getElementById("planets").innerHTML += `<div>
<p>${planetsArray}</p>
</div>`

})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
*/

const upperCaseLetter = planets.map(planetLetter => {
return planetLetter.charAt(0).toUpperCase() + planetLetter.slice(1)

})

console.log(upperCaseLetter)


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.
*/

const planetE = planets.filter(planet =>{
    const filtered = planet.includes("e")
    return filtered
})

console.log(planetE)