export interface Person {
    name: string;
    age: number;
    isBeliver: boolean;
}

export const Person = (props: Person) => {
    return <div>
        <p>My Name is {props.name}</p>
        <p>I am {props.age} years old</p>
        <p>Yes, I am a {props.isBeliver ? "Beliver" : "Non-Beliver"}</p>
        </div>
}