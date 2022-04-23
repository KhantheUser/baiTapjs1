// PDF
//  1.In mang tu 1 den 100
// function ex1(){
//     let x="";
//     for(var i =10 ; i<=90;i+=10){
//         for(var k=0;k<=10;k++){
//             x+= " " + (k+i);
//         }
//         x=x+ "\n"
//     }
//     console.log(x);
// }
// ex1()

// 2. Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số nguyên tố trong mảng

// function ex2(array){
//     let primeNumber ="";
//     for(var i=0;i<array.length;i++){
//     let count =0;
        
//             for(var k=1;k<=array[i];k++){
//                 if(array[i]% k==0){
//                     count+=1;
//                 }
                
//             }
//             if(count===2){
//                 primeNumber+=array[i]+" ";
//             }
//     }
//     console.log(primeNumber)
// }
// ex2([3,9,6,5,7,13])

//3. Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
// function ex3(n){
//     let sum=0
//     for(var i = 2;i<=n;i++){
//         tong+= i
//     }
//      sum+= 2*n
//     console.log(sum)
// }
// ex3(6)

// 4.4.Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 => Ước số của 8 là : 8,4,2,1
 
// function ex4(n){
//     let count =0;
//     for(var i=1;i<=n;i++){
//         if(n%i===0){
//             count+=1;
//         }
//     }
//     console.log(count)
// }
// ex4(24)

// 5.Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn 
// phím.Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống như duyệt mảng)

// function ex5(array){
//     let newArray =[];
//     for(var i=0;i<array.length;i++){
//         newArray.unshift(array[i])
//     }
//     console.log(newArray)
// }
// ex5([1,2,3,4,5,6,7,8])

// 6.Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100
 
// function ex6(){
//     for(var i=0;i<=10;i++){
//         if(i*(i+1)>100){
//             console.log(i-1)
//         }
        
//     }
// }
// ex6()

// 7. Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó. 
// Vd: n = 3

// function ex7(n){
//     let result=""
//     for(var i=0;i<=10;i++){
//         let result2 = n*i;
        
//         result+= n+"x"+i+"="+result2+ "\n";

//     }
//     console.log(result)
// }

// ex7(3)

// 8.Viết hàm chia bài cho 4 người chơi

// function ex8(array){
//    var playerArray =[[],[],[],[]];
//   for(var i=0;i<playerArray.length;i++){
//       for(k=0+i;k<array.length;k+=4){
//           playerArray[i].push(array[k]);
//       }
//   }
//   console.log(playerArray)
// }
// ex8( ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", 
// "AS", "7H", "9K", "10D"])

// 9.Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn
// function ex9(){
//     var sum = document.getElementById("sum").value;
//     var feet= document.getElementById("feet").value;
//     var dogAccount 
//     var chickenAccount 
//     chickenAccount = (feet-4*sum) / (-2);
//     dogAccount = sum-chickenAccount;
//     document.getElementById("dogs").innerHTML ="Dogs: "+dogAccount
//     document.getElementById("chicken").innerHTML ="Chicken: "+chickenAccount;

// }

function ex10(){
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var angle ;
    angle= Math.abs(6*minutes -30*hours-minutes*0.5);
    document.getElementById("angle").innerHTML ="Goc giua 2 kim : "+angle
}



// File hinh anh
// 11.Nhap 3 so nguyen , sap xep theo thu tu tang dan

function ex11(){
    var array =[];
    var numberArray = document.getElementsByClassName("number");
    for(var i=0; i<numberArray.length; i++){
        array.push(numberArray[i].value);
    }
    
   var temp;
    for(var k=0;k<array.length-1;k++){
       for(var j=k+1;j<array.length;j++){
           if(array[j]<array[k]){
                temp=array[k];
                array[k]=array[j];
                array[j]=temp;
           }
       }
    }
    
    document.getElementById("arrange").innerHTML = array.join(",");
}

// 12.Nhap ngay thang nam , in ra ngay truoc va sau
// function ex12(){
//     var day =+document.getElementById("day").value
//     var month =+document.getElementById("month").value
//     var year =+document.getElementById("year").value
//     var dateBefore = document.getElementById("dateBefore")
//     var dateAfter = document.getElementById("dateAfter")
//     let dayAfter , dayBefore , monthAfter , monthBefore , yearAfter , yearBefore;
//     dayAfter =day+1
//     dayBefore = day-1;
//     function check(month){
//         switch(month){
//             case 4 : 
//             case 6: 
//             case  9: 
//             case 11 : 
//                 if(day>=1 && day<30){
                    
                    
//                     dateAfter.innerHTML = `${dayAfter} ${month} ${year}`
//                     dateBefore.innerHTML = `${dayBefore} ${month} ${year}`
//                     if(day===1){
//                         monthBefore =month-1;
//                         dateBefore.innerHTML = `30 ${monthBefore} ${year}`
//                     }
                    
                   
//                 }else{
                    
//                     dateAfter.innerHTML = "Khong co ngay nhu vay"
//                     dateBefore.innerHTML = `${dayBefore} ${month} ${year}`
    
//                 } 
//             break
           
//             case 3:
//             case 7:
//             case 5: 
//             case 8: 
//             case 10: 
//             if(day>=1 && day<31){
//                 dateAfter.innerHTML = `${dayAfter} ${month} ${year}`
//                 dateBefore.innerHTML = `${dayBefore} ${month} ${year}`
//                 if(day===1){
//                     monthBefore =month-1;
//                     dateBefore.innerHTML = `31 ${monthBefore} ${year}`
//                 }
                
               
//             }else{
                
//                 dateAfter.innerHTML = "Khong co ngay nhu vay"
//                 dateBefore.innerHTML = `${dayBefore} ${month} ${year}`
//             }
//             break
//             case 2:
//                 if(day>=1 && day<28){
//                     dateAfter.innerHTML = `${dayAfter} ${month} ${year}`
//                     dateBefore.innerHTML = `${dayBefore} ${month} ${year}`
        
                    
                   
//                 }else{
                    
//                     dateAfter.innerHTML = "Khong co ngay nhu vay"
//                     dateBefore.innerHTML = `${dayBefore} ${month} ${year}`
//                 }
//                 break
//             case 12:
//                 if(day>=1 && day<=31){
//                     if(day===31){
//                         dayAfter = 1;
//                         monthAfter =1;
//                         yearAfter =year+1;
                        
//                     }
//                     dateAfter.innerHTML = `${dayAfter} ${monthAfter} ${yearAfter}`
//                     dateBefore.innerHTML = `${dayBefore} ${month} ${year}`
                    
//                 }
//                 break
//             case 1:    
//             if(day>=1 && day<=31){
//                 if(day===1){
//                     dayBefore = 31;
//                     monthBefore =12;
//                     yearBefore =year-1;
                    
//                 }
//                 dateAfter.innerHTML = `${dayAfter} ${month} ${year}`
//                 dateBefore.innerHTML = `${dayBefore} ${monthBefore} ${yearBefore}`
                
//             }
    
            
//         }
//     }
//     if(year%4!== 0){
//        check(month)
//     }else {
//         check(month)
//         if(month===2 && day===28){
//            dateAfter.innerHTML ="29 2"+" "+year

//         }
      
//     }
  
// }

// 13.Chuong trinh chao hoi
// function ex13(){
//     var greeting =document.getElementById("greeting")
//     var family = document.getElementsByClassName("family")
//     if(family[0].checked){
//         greeting.innerHTML = "Chao bac trai?Bac dao nay co khoe khong"
//     }else if(family[1].checked){
//         greeting.innerHTML = "Chao bac gai?Bac van dep chu"
        
//     }else if(family[2].checked){
//         greeting.innerHTML = "Chao ban lam tran lol chu"
        
//     }else if(family[3].checked){
//         greeting.innerHTML = "Chao em gai"
        
//     }
// }

// 14.Nhap 3 so => xuat ra co bao nheiu so le so chan
// function ex14(){
//     var array =document.getElementsByClassName("number14")
//     var countChan = 0;
//     var countLe = 0;
//     for(var i=0;i<array.length;i++){
//        if(+array[i].value%2===0){
//            countChan+=1;
//        }else{
//            countLe+=1;
//        }
//     }
//    document.getElementById("chan").innerHTML ="So chan la : "+countChan
//    document.getElementById("le").innerHTML ="So le la : "+countLe

// }

// 15.Viet chuong trinh nhap ngay thang nam va cho biet so ngay

// function ex15(){
//     var day =+document.getElementById("day15").value
//     var month =+document.getElementById("month15").value
//     var year =+document.getElementById("year15").value
//     var dayInMonth = document.getElementById("dayInMonth")
//     function check(month){
//         switch(month){
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 dayInMonth.innerHTML = "So ngay trong thang la : 30"
//                 break
//             case 2:    
//             dayInMonth.innerHTML = "So ngay trong thang la : 28"
//             break
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//             dayInMonth.innerHTML = "So ngay trong thang la : 31"
//             break


//         }
//     }
//     if(year%4!==0){
//        check(month)
//     }else{
//         check(month)
//         if(month===2){
//             dayInMonth.innerHTML = "So ngay trong thang la : 29"

//         }
//     }
// }

// 6.Tim sinh vien xa truong nhat
// function ex16(){


// var array=[]
//    for(var i=0;i<3;i++){
//         array.push([])
//        for(var k=0;k<3;k++){
//         array[i].push(document.getElementsByClassName(`st${i}`)[k].value)
//        }
//    }
//    var kc=[]
//    for(j=0;j<array.length;j++){
//     kc.push(Math.sqrt(Math.pow(+(array[j][1]),2) + Math.pow(+(array[j][2]),2)))
//    }
//    var index =0;
//    var max=kc[0];
//    for(var f=0;f<kc.length;f++){
      
       
//        if(kc[f]>max){
//            max=kc[f]
//            index=f;
//        }
       
//    }

//   document.getElementById("resultStd").innerHTML = "Ban xa nha nhat la :"+ array[index][0]  + " "+max+" km"


// }

// 17.Nhap 3 so thuc , thay so am bang tri tuyet doi
// function ex17(){
//     var array = document.getElementsByClassName("number17")
//     var array2=[]
//     for(var i=0;i<array.length;i++){
//             array2.push(Math.abs(array[i].value))
//     }
//     document.getElementById("result17").innerHTML = array2.join(", ")
// }

// 18.Nhap 1 so va in ra cach doc no

// function ex18(){
//     var number = document.getElementById("read18").value;
//     var array = number.split("")
//     var hangTram , hangChuc ,hangDonVi;
//     switch(array[0]){
//         case "1": hangTram = "Mot tram"
//         break
//         case "2": hangTram = "Hai tram"
//         break
//         case "3": hangTram = "Ba tram"
//         break
//         case "4": hangTram = "Bon tram"
//         break
//         case "5": hangTram = "Nam tram"
//         break
//         case "6": hangTram = "Sau tram"
//         break
//         case "7": hangTram = "Bay tram"
//         break
//         case "8": hangTram = "Tam tram"
//         break
//         case "9": hangTram = "Chin tram"
//         break
//     }
//     switch(array[1]){
//         case "0" : hangChuc ="linh"
//         break
//         case "1" : hangChuc ="muoi"
//         break
//         case "2" : hangChuc ="hai muoi"
//         break
//         case "3" : hangChuc ="ba muoi"
//         break
//         case "4" : hangChuc ="bon muoi"
//         break
//         case "5" : hangChuc ="nam muoi"
//         break
//         case "6" : hangChuc ="sau muoi"
//         break
//         case "7" : hangChuc ="bay muoi"
//         break
//         case "8": hangChuc ="tam muoi"
//         break
//         case "9": hangChuc ="chin muoi"
//         break
      
//     }
//     switch(array[2]){
//         case "0" : hangDonVi =""
//         break
//         case "1" : hangDonVi ="mot"
//         break
//         case "2" : hangDonVi ="hai "
//         break
//         case "3" : hangDonVi ="ba "
//         break
//         case "4" : hangDonVi ="bon "
//         break
//         case "5" : hangDonVi ="nam "
//         break
//         case "6" : hangDonVi ="sau "
//         break
//         case "7" : hangDonVi ="bay "
//         break
//         case "8": hangDonVi ="tam "
//         break
//         case "9": hangDonVi ="chin "
//         break
      
//     }
    
//     document.getElementById("result18").innerHTML =`${hangTram} ${hangChuc} ${hangDonVi}`
// }

// 19.Nhap 3 canh tam giac cho biet do la tam giac gi

function ex19(){
    var a = +document.getElementById("canh1").value
    var b = +document.getElementById("canh2").value
    var c = +document.getElementById("canh3").value
    var result =document.getElementById("result19")
    if(a + b <= c || a + c <= b ||  b + c <= a)
	{
		result.innerHTML= "Tam giac khong hop le"
	}
	else
	{
		
	    if((a == b) && (b == c))
		{
		result.innerHTML= "Tam giac deu"
			
		}
		else
		{
			if(a*a + b*b === c*c || a*a+c*c=== b*b|| b*b+c*c === a*a)
			{
                result.innerHTML= "Tam giac vuong"

			}
			if(a == b || a == c || b == c)
		    {
                result.innerHTML= "Tam giac can"

		    }
			else
			{
                result.innerHTML= "Tam giac thuong"

			}
		}
	}
		
}

