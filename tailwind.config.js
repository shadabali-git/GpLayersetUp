const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],

  theme: {
    extend: {
      backgroundColor: {
      
        'blue-translucent' : 'rgb(100, 100, 255)',
      },
       
    }
  },
   plugins: [
    flowbite.plugin(),
     function ({addUtilities}){

      const value={
         ".active":{
            color:'#12b2e6',
            
            borderBottom:'2px solid #12b2e6'

         },
      };

      addUtilities(value,[]);


     }

    ]
}

