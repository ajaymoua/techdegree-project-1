//array of quotes
var famousQuotes = [ 
  
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
    year: 2003
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
function getRandomQuote(quotas){ 
  
  var random = Math.floor(Math.random() * (quotas.length));  
  return quotas[random]; 
  
  
};

//print function retrieving random object and properties from famousQuotes array and printing to site
function printQuote(x){
  
  var get = getRandomQuote(x);  
  var string = '<p class = "quote">' + get.quote + '</p>' + '<p class="source">' + get.source + '</p>';
    
  if(get.citation){
      string += '<span class="citation">' + get.citation + '</span>';
    }
      if(get.year){
        string += '<span class="year">' + get.year + '</span>';
      }
        string += '</p>';
              
          document.getElementById('quote-box').innerHTML = string; 

          
       
}; 


printQuote(famousQuotes);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
