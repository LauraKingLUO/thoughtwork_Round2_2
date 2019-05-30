
module.exports = function main(s) {
     var r=new Array(10);
     r[0]=["._.","|.|","|_|"];
     r[1]=["...","..|","..|"];
     r[2]=["._.","._|","|_."];
     r[3]=["._.","._|","._|"];
     r[4]=["...","|_|","..|"];
     r[5]=["._.","|_.","._|"];
     r[6]=["._.","|_.","|_|"];
     r[7]=["._.","..|","..|"];
     r[8]=["._.","|_|","|_|"];
     r[9]=["._.","|_|","..|"];
    var l=s.length;
	var res1;
    var res ;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<l;j++)
        {
            if(j==0){
                res1= r[parseInt(s[j])][i];
            }
            else{
                res1= res1 +" " + r[parseInt(s[j])][i];
            }
        }
		if(i==0)
		{
			res = res1 + '\n';
		}
		else{
             res = res + res1 + '\n';
		}
    }
    console.log(res);
    return res;
};