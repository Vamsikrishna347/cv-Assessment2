
var done=document.getElementById("mysentence");
done.addEventListener('change',function()
{
   let submit=document.getElementById("mybutton");
 
        if(done==null || done=="")
        {
            submit.setAttribute('disabled','disabled');
        }
        else
        {
            submit.removeAttribute('disabled');
            
            document.getElementById("mybutton").onclick= function()
            {
                document.getElementById("heading").innerHTML="Result:";
                var sentence=document.getElementById("mysentence").value;
                var letter=document.getElementById("myletter").value;
                if(letter=="")
                {
                    document.getElementById("result").innerHTML="Enter any character!!!";
                    document.getElementById("result").style.color=' blue';
                    document.getElementById("result").style.fontSize='20px';
                }

               else if(sentence.indexOf(letter)>=0)
                {
                    document.getElementById("result").innerHTML=sentence.substr(sentence.indexOf(letter)+1,sentence.length);
                    document.getElementById("result").style.color=' green';
                    document.getElementById("result").style.fontSize='20px';
                }

                else
                {
                    document.getElementById("result").innerHTML="This character is not present in the sentence";
                    document.getElementById("result").style.color="red";
                    document.getElementById("result").style.fontSize='20px';
                }
                
            }
        }
})
