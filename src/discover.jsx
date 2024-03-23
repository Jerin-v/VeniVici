import { useEffect, useState } from "react"

const Discover = () => {

    const [name, setName] = useState('')
    const [origin, setOrigin] = useState('')
    const [weight, setWeight] = useState('')
    const [life, setLife] = useState('')
    const [img,setImg] = useState('')


    useEffect(() => {
        async function callAPI() {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_S0CaHgx2ccgXfVQILiaXBFMsb7l84mEUDiK3aBsve6BhyVB8D5Thgcak5xmrcBWj")
            const data = await response.json()
            setName(data[0].breeds[0].name)
            setOrigin(data[0].breeds[0].origin)
            setWeight(data[0].breeds[0].weight.imperial)
            setLife(data[0].breeds[0].life_span)
            setImg(data[0].url)
            console.log(data[0])
        }
        callAPI()

    },[])


    return (
        <div>
            <h2>Some Cat Name</h2>
            <div className="buttons">
                <button  className="attribute">{ name }</button>
                <button  className="attribute">{ origin }</button>
                <button className="attribute">{ weight } Pounds</button>
                <button className="attribute">{ life } Years</button>  
            </div>
            <img className="carPicture" src={img} alt="random cat picture" height="250px" width="250px" ></img>
        </div>
    )
}


export default Discover