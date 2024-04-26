import { Profiler } from "react"

const person = {
    name: 'Mukul', 
    address: {
        line1: 'Water works',
        city: 'Bhind',
        country: 'India'
    },
    profiles: ['twitter', 'LInkedIN', 'Instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}
export default function LearningJavaScript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[2]}</div>
            <div>{ person.printProfile() }</div>
        </>
        
    )         
}