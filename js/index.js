var name =prompt("Whats Ur Name ?");
var hobies=prompt("Whats Ur Hobies ?");
var int_prov =prompt("Whats Ur  phone provider  ?   zain , orange , umniah");
var git ;

function gitprov(git)
{
while(int_prov !== 'zain' && int_prov !== 'umniah' && int_prov !== 'orange' ){
 int_prov =prompt("Whats Ur  phone provider  ?   zain , orange , umniah");
}
if (int_prov == "umniah")
{
    git="ur phone provider is 078 ";
}
else if (int_prov == "zain" )
    {git="ur phone provider is 079 ";
} 
else if (int_prov == "orange")
  { git="ur phone provider is 077 ";
}
else {
git="somthing wrong";}
return git;
}
document.write(`<h2>`+ " Ur name is " + name + " Ur hobies is  "+ hobies + "  Ur provider is "+gitprov()+ `<h2>`);




