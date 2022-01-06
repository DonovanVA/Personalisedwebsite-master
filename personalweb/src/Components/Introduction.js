import React from 'react'
import './Introduction.css'
import { Aboutme } from './Aboutme'
import Crypto from './Images/Crypto.png'
import Fexpress from './Images/F-express.png'
export default function Introduction() {
    return (
        <div>
            <div className='Introduction1'>
                <h1 className='Introduction_text'>Hi my name is Donovan, and I am a Y1 student studying in NTU School of computer science and engineering</h1>
            </div>
            <div className='Introduction2'>
                <h1 className='Introduction2_header'>About me</h1>
                <p className='Introduction2_text'>{Aboutme.Intro}{Aboutme.Hobbies}{Aboutme.Areasofinterest}</p>
            </div>
            <div className='Introduction3'>
                <h1 className='Introduction3_header'>My projects</h1>
                <h2 className='Introduction3_header2'>FITNESSEXPRESS</h2>
                <p className='Introduction3_paragraph'>FITNESSEXPRESS was my very first shopping project, aimed at selling necessary gym equipment and products to every day consumers who want to work out on a regular basis without having to travel to the gym</p>
                <img src ={Fexpress} className ='Introduction_image' height ='300' width ='700'></img>
                <p className='Introduction3_paragraph2'>Technologies used: ReactJS, CSS, Firebase, Stripe</p>
                <div className='Introduction_buttons'><button className='Introduction_button1'>Live</button><button className='Introduction_button2'>code</button></div>
                <h2 className='Introduction3_header2'>JCARE</h2>
                <p className='Introduction3_paragraph'>JCARE is a cryptocurrency token built on the SOLANA blockchain, this is my very first cryptocurrency that I designed with a primary function of balancing out healthcare services around the world. This is also the first project in which I had to research on cryptoeconomic whtitepapers and tokenomics in order to further develop algotrithms to sort out token distrinution and staking (More help needed :))</p>
                <img src ={Crypto} height ='300' width ='700'></img>
                <p className='Introduction3_paragraph2'>Technologies used: ReactJS, web3JS, CSS, Solana API, linode, Phantom wallet...</p>
                <div className='Introduction_buttons'><button className='Introduction_button1'>Live</button><button className='Introduction_button2'>code</button></div>
            </div>
            
        </div>
    )
}
