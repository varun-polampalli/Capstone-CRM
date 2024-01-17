import React from "react";
import ChatBot from 'react-simple-chatbot';
 
function Chatbot() {
  const steps=[
    {
      id:'Greet',
      message:'Hello,Welcome to our Website',
      trigger:'Ask Name'
    },
    {
      id:'Ask Name',
      message:'Please enter your Name',
      trigger:'waiting1'
    },
    {
      id:'waiting1',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'HI {previousValue},Please May i know how can i help you?',
      trigger:'issues'
    },
    {
      id:'issues',
      options:[{ value:"User",label:'User',trigger:"User"},
    { value:"Admin",label:'Admin',trigger:"Admin"}],      
    },
    {
      id:'User',
      message:'Thanks for selecting and please provide your contact number',
      trigger:'userrrr'
    },
    {
      id:'Admin',
      message:'Thanks for selecting and please provide your contact number',
      trigger:'userrrr'
 
    },
    {
      id:'userrrr',
      user:true,
      trigger:'say'
    },
    
   
    {
      id:'say',
      message:'Our executive will contact you shortly',
      trigger:'ok'
 
    },
    {
      id:'ok',
      user:true,
      trigger:'thank'
    },
    {
      id:'thank',
      message:'Great to meet you',
      end:true,
    }
   
  ]
    return (
      <div>
      <ChatBot steps={steps}  floating={true}> </ChatBot>
        </div>
  );
 
}
 
export default Chatbot;