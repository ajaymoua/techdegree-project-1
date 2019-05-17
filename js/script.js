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
    citation:'Elf' 
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

//function generating inclusive 0 to array length of exclusive 6 returning one random object from the array
function getRandomQuote(){ 
  
  var random = Math.floor(Math.random() * (quotes.length));  
  return quotes[random]; 
  
  
};

//print function retrieving random object and properties from quotes array and outputs the html 'string'
function printQuote(){
  
  var selectedQuote = getRandomQuote();  
  var string = '<p class = "quote">' + selectedQuote.quote + '</p>' + '<p class="source">' + selectedQuote.source;
    
  if(selectedQuote.citation){ //if citation is true, retrieve
      string += '<span class="citation">' + selectedQuote.citation + '</span>';
    }
      if(selectedQuote.year){ //if year is true, retrieve
        string += '<span class="year">' + selectedQuote.year + '</span>';
      }
        string += '</p>'; //if not, its just the string @line 56 + closing 'p' tag
              
          document.getElementById('quote-box').innerHTML = string; 

          
       
}; 


printQuote(); //run the function


document.getElementById('loadQuote').addEventListener("click", printQuote, false); //button

