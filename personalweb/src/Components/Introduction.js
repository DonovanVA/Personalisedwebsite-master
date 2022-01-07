import React from 'react'
import './Introduction.css'
import { Aboutme } from './Aboutme'
import Crypto from './Images/Crypto.png'
import Fexpress from './Images/F-express.png'
import Bend from './Images/Bend.png'
import Me from './Images/Me.JPG'
export default function Introduction() {
    return (
        <div>
            <div className='Introduction1'>
                <h1 className='Introduction_text'>Hi my name is Donovan, and I am an undergrad studying in NTU School of Computer Science and Engineering</h1>
            </div>
            <div className='Introduction2'>
                <h1 className='Introduction2_header'>About me</h1>
                    <img src = {Me} height ='500' width = '700'></img>
                    <p className='Introduction2_text'>{Aboutme.Intro}{Aboutme.Hobbies}{Aboutme.Areasofinterest}</p>
            </div>
            <div className='Introduction3'>
                <h1 className='Introduction3_header'>My projects</h1>
                    <h2 className='Introduction3_header2'>FITNESSEXPRESS</h2>
                        <p className='Introduction3_paragraph'>FITNESSEXPRESS was my very first web project, designed in marketing necessary gym equipment and products to every day consumers who want to work out on a regular basis without having to travel to the gym</p>
                            <img src ={Fexpress} className ='Introduction_image' height ='400' width ='700'></img>
                        <p className='Introduction3_paragraph2'>Major technologies used: React.JS, CSS, Firebase, Stripe...</p>
                <div className='Introduction_buttons'><a target ='_blank' href ='https://fitnessexpress.herokuapp.com/'><button className='Introduction_button1'>Live</button></a><a target='_blank' href ='https://github.com/DonovanVA/Shoppingweb/tree/Publish'><button className='Introduction_button2'>Code</button></a></div>
                    <h2 className='Introduction3_header2'>JCARE</h2>
                        <p className='Introduction3_paragraph'>JCARE is a cryptocurrency token built on the SOLANA blockchain, this is my very first cryptocurrency that I designed with a primary function of balancing out healthcare services around the world. This is also the first project in which I had to research on cryptoeconomic whtitepapers and tokenomics in order to further develop algotrithms to sort out token distribution and staking (More functionality to be installed while I run down some cryptoeconomics:))</p>
                            <img src ={Crypto} height ='400' width ='700'></img>
                        <p className='Introduction3_paragraph2'>Major technologies used: ReactJS, Web3.JS, CSS, Solana API, Linode, Phantom wallet...</p>
                <div className='Introduction_buttons'><a target ='_blank' href ='https://jcarehealth.herokuapp.com/'><button className='Introduction_button1'>Live</button></a><a target ='_blank' href ='https://github.com/DonovanVA/JCAREweb/tree/publish'><button className='Introduction_button2'>Code</button></a><a target ='_blank' href ='https://donovan-ng.gitbook.io/jcare/'><button className='Introduction_button3'>Whitepaper</button></a></div>
                    <h2 className='Introduction3_header2'>Transfer Learning on NASNet</h2>
                        <p className='Introduction3_paragraph'>Me and my friends teamed up and worked on a solar panel deep learning project with the purpose of fault detection, we each experimented with various transfer learning models and computer vision tools that helped us understand the hands on application of data science. I was tasked to train the data on NASNet, but it was not used eventually. Here is the NASNet code:</p>
                            <img src ={Bend} height ='400' width ='700'></img>
                        <p className='Introduction3_paragraph2'>Major technologies used: Jupyter, OpenCV, Tensorflow, Keras, NASNet...</p>
                <div className='Introduction_buttons'><a target ='_blank' href ='https://github.com/DonovanVA/Transfer_learning/tree/publish'><button className='Introduction_button2'>Code</button></a></div>
            </div>
            
        </div>
    )
}
