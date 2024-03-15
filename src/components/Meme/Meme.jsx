import React from "react";

export default function Meme () {
    return (
        <main className="px-10">
            <form action="#" className="grid grid-rows-2 grid-cols-2 gap-5 py-10 px-5 font-karla">
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
                <button className="col-span-2 bg-purple-800 text-white rounded-lg px-4 py-2 cursor-pointer border-none">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}