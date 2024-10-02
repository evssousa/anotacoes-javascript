// objeto
const person = {
    name: 'John',
    age: 30
}

// função inferida com tipos
function createPerson(person: { name: string; age: number }, age: number) {
    person.age = age
}
createPerson(person, 33)