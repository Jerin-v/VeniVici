

const Discover = () => {

    async function callAPI() {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_S0CaHgx2ccgXfVQILiaXBFMsb7l84mEUDiK3aBsve6BhyVB8D5Thgcak5xmrcBWj")
        const data = await response.json()
        console.log(data)
    
    
    
    }
    callAPI()

    return (
        <div>
            <h2>Some Cat Name</h2>
            <div className="buttons">
                <button type="attribute" className="attribute-button"></button>
                <button type="attribute" className="attribute-button"></button>
                <button type="attribute" className="attribute-button"></button>
                <button type="attribute" className="attribute-button"></button>
            </div>
            <img className="carPicture" src="" alt="random cat picture"></img>
        </div>
    )
}


export default Discover