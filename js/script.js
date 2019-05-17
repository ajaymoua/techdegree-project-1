//array of quotes
var quotes = [ 
  
  {
    quote:'My name is Jeff!', 
    source:'Greg Jenko', 
    citation:'22 Jump Street', 
    year: 2014
  },
  
  {
    quote:'That\'s my credo, no regrets', 
    source:'Scottie P.', 
    citation:'We\'re the Millers', 
    year: 2015
  },
  
  {
    quote:'You sit on a throne of lies', 
    source:'Buddy the Elf', 
    citation:'Elf', 
    //year: 2003 commented out to test citation without year
  },
  {
    quote:'Just do it', 
    source:'Nike',  
    year: 1988
  },
  
  {
    quote:'During your life, never stop dreaming. No one can take away your dreams', 
    source:'Tupac Shakur'
   
  },

  {
    quote:'Defeat is a state of mind; No one is ever defeated until defeat has been accepted as a reality', 
    source:'Bruce Lee'
   
  }
];

//function generating inclusive 0 to array length of exclusive 6
function getRandomQuote(){ 
  
  var random = Math.floor(Math.random() * (quotes.length));  
  return quotes[random]; 
  
  
};

//print function retrieving random object and properties from quotes array and printing to site
function printQuote(){
  
  var get = getRandomQuote();  
  var string = '<p class = "quote">' + get.quote + '</p>' + '<p class="source">' + get.source + '</p>';
    
  if(get.citation){ //if citation is true, retrieve
      string += '<span class="citation">' + get.citation + '</span>';
    }
      if(get.year){ //if year is true, retrieve
        string += '<span class="year">' + get.year + '</span>';
      }
        string += '</p>'; //if not, by default its just the string @line 56 + closing 'p' tag
              
          document.getElementById('quote-box').innerHTML = string; 

          
       
}; 


printQuote(); //run the function


document.getElementById('loadQuote').addEventListener("click", printQuote, false); //button

