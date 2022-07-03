function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}

let text1 = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
let text2 = "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...";
let text3 = "Curabitur iaculis, nisl ut tristique fringilla, orci purus rutrum arcu, sed pharetra lectus tortor eget orci."

const texts = [text1,text2,text3];
for(let i = 0; i < texts.length; i++){
  text = texts[i];
  bigText = uppercase(text);
  longest_word = find_longest_word(text);
  vcount = vowel_count(text);
  
  console.log(`The original string was:\n${text}\nCapitalizing each word looks like:\n${bigText}\nThe longest word is ${longest_word}\nThere are ${vcount} vowels`);
  }