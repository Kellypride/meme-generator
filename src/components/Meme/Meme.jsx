import React from "react";
import memesData from "../../memesData";

export default function Meme () {
    const [memeImage, setMemeImage] = React.useState("")
    

    let url

    function getMemeImage (){
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        console.log("memeArray[randomNumber].url", memeArray[randomNumber].url);
        setMemeImage(memeArray[randomNumber].url)
        
    }
    return (
        <main className="px-10 flex flex-col justify-center gap-10 py-10  bg-white font-karla">
             <p>{url}</p>
            <div className="grid  grid-cols-2 gap-5  ">
               
                <input
                    type="text"
                    placeholder="Shutup"
                    className="border border-gray-400 rounded-lg  py-2 indent-3"
                />
                <input
                    type="text"
                    placeholder="And take your money"
                    className="border border-gray-400 rounded-lg py-2 indent-3"
                />
                <button className=" bg-purple-800 col-span-2 text-white rounded-lg px-4 py-2 cursor-pointer border-none" onClick={getMemeImage} >
                    Get a new meme image 🖼
            </button>
            </div>
            {memeImage && <img src={require(`../../${memeImage}`)} alt="memes img"  />}
            
        </main>
    )
}