/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"

const IntroPage = () => {
  return (
    <div className='flex flex-col w-full  min-h-screen items-center justify-center md:py-15 gap-5 p-3'>

          <motion.div
        initial={{opcaity: 0, y:-30}}
       whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, delay:0.2 }}
      className='flex absolute md:left-10 left-5 top-10 md:h-[178px] md:w-[522px] h-[70px] w-[320px]'>
        <img alt="" className='h-[178px]'
        src="https://images.squarespace-cdn.com/content/v1/6658dc833079153370a6e050/c2848d91-b7e8-4af4-ace2-b872a372ca1f/BG_BEAST_GAMES_LOGO_FULL_COLOR_RGB_900PX_W_300PPI.png?format=1500w"
    />

    
    
        </motion.div>

        <motion.div
        initial={{opcaity: 0, x:-10}}
        animate={{opacity: 1, x:0}}
        transition={{duration: 0.8, delay:0.2 }}
        className='max-w-[800px] min-h-[400px] w-full bg-white rounded-lg p-4 flex flex-col mt-[260px]
        gap-10 '>

            <div className='flex flex-col w-full items-center justify-center'>
  <h1 className='md:text-[30px] text-xl md:leading-[35px] font-bold  anton'>We are back</h1>
            <p className=' md:text-[36px] text-2xl md:leading-[40px] font-bold'>Beast Games Season 2 </p>
            </div>
            
            <div className=' flex flex-col gap-2'>
                <h1 className='font-bold text-sm'>Here’s what you need to know about submitting for a
                   chance to compete in BEAST GAMES Season 2:</h1>

                    <ul className='flex flex-col gap-2'>
                        {
                            infoData.map((inf,index) => (
                            <li key={index} className='list-disc list-inside text-[13px]'>
                                {inf.title}
                            </li>
                            ))
                        }
                    </ul>
            </div>

            <div className=' flex flex-col gap-4'>
                <h1 className='font-bold text-sm'>🔥 TELL US WHO YOU ARE! 🔥</h1>
                <h1 className='font-bold text-sm'>​ ​Are you SMART or PHYSICALLY STRONG? </h1>

                <p className='font-bold text-[13px]'>Tell us why you are smart and the ultimate strategic thinker—analytical, clever, street smart and a master
                     problem-solver who can outsmart the competition. Do you have a high IQ or a
                      collection of impressive intellectual achievements?</p>

                      <h1 className='font-bold text-sm'> OR</h1>

                        <h1 className='font-bold text-sm'> Tell us how your strength, endurance, and physical dominance
                             make you an unstoppable force in this competition!  </h1>

                              <h1 className='font-bold text-sm underline'> 
         If you have already submitted DO NOT submit again (e.g. send another video or resubmit the application)
                              </h1>

                               <p className='font-bold text-[13px]'> 
                                Why are YOU deserving of a spot to compete in BEAST GAMES Season 2? Show us your energy and passion. 
                               </p>

                                <h1 className='text-sm '> 
                                    <b>Be bold. Be fun. Be YOU. </b>
                                    <span className='text-[13px]'>
         You have ONE minute, this is your shot to compete—go all in!                                
                                    </span>

                                    </h1>

                                        <h1 className='font-bold text-sm'> 
When you're ready, SUBMIT A 1-MINUTE VIDEO
                                            </h1>

                                         <p className='text-[13px]'> 
                                            Tell us your name, age, where you live, and what you do for a living. BUT… don’t just
                                             list them—prove it! Are you smart or physically strong? Take us into your world for a moment. 

                                            </p>


<div className='flex flex-col gap-4'>

            <h1 className='font-bold text-sm'>
  MAKE SURE TO ANSWER AT LEAST TWO OR THREE OF THESE QUESTIONS:                    
                                                  </h1>
                                                

                                             <h1 className='font-bold text-sm'> 
     ​•​What was your favorite challenge from BEAST GAMES Season 1, and why?                                           
                                             </h1>

                                              

                                                   <h1 className='text-sm   w-full'>
  <b className=''>​•​What makes YOU an unforgettable competitor? </b>
      What’s your edge? Your secret weapon? Your unique skills? Your strongest skills?
                                                   </h1>

           <h1 className='font-bold text-sm'>
​•​What would you do with $5,000,000?
               </h1>



            <h1 className='font-bold text-sm'> VIDEO FORMAT:   </h1>

            
                                                   <h1 className='text-sm   w-full'>
  <b className=''>​•​Shoot horizontally</b> (wide-screen is best)
                                                   </h1>

                                                   
                                                   <h1 className='text-sm   w-full'>
  <b className=''>​•​Find good lighting—​ </b>  we need to see your face
                                                   </h1>


                                                   
                                                   <h1 className='text-sm   w-full'>
  <b className=''>​•Make sure we can hear you</b>find a quiet space
                                                   </h1>

      <h1 className='text-sm   w-full'>
  <b className=''>​•​Keep it clean—</b>No personal details like addresses, SSNs, bank info or other private material.
                                                   </h1>
                                                

                 <h1 className='font-bold text-sm'> UPLOAD YOUR VIDEO (under 100MB) </h1>   

                       <p className='text-[13px]'>
                        As a part of the submission process, we will not ask you for your banking or financial information.
                         Please be aware of potential scams. </p>

                       
                    <h1 className='font-bold text-sm'> PHOTO: Get ready to upload a recent photos of yourself </h1>  

                     <p className='text-[13px]'>
        Please reach out to support@mysticartpictures.net with any questions or
         technical issues. It may take us 72 hours to get back to you.                
                     </p>

                       <div className='w-full flex items-center justify-center'>
                            <Link to="/form">
                            <h1 className='uppercase font-bold md:text-3xl underline'>Clik here to begin!</h1>
                            </Link>
                         </div>


  
                                                        

                                                           </div>


            </div>
        </motion.div>


    </div>
  )
}

export default IntroPage



const infoData = [

    
  
  {
    title: "You need to be 18 or older by the time you submit for a chance to compete in the BEAST GAMES SEASON 2.",
  },

  {
        title: "You need to have a valid passport of your country that is good through 2026"
    },
  {
    title: "You either need to be a legal citizen of the U.S. and able to legally travel and reside for U.S. from any country OR you need to be able to legally travel to and reside in the U.S. for 90 days",
  
  },

  {
    title: 'You need to be free of any obligations and able to travel internationally for up to six consecutive weeks during the period of the games. For purposes of contest secrecy and integrity, those who chose to compete in BEAST GAMES will need to be free of any and all obligations for the duration of the competition (including any personal, family or work demands or responsibilities) and without interference or interruption of any type'
  },

  {
    title: 'You must not be a current candidate for public office or intend to be or intend to run for public office within one year as of July 1st, 2026'
  },
 {
    title: 'You are willing to pay a $150 one time fee to process your registration'
 },
  {
    title: "You are not currently employed by or closely connected to anyone who is involved with the creation, production, administration or judging of BEAST GAMES or anyone working on the MrBeast YouTube channel",
  }
];




