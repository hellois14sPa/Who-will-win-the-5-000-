
const right = new Audio('images/صوت تسقيف جمهور مؤثرات للمونتاج.mp4');

const wrong =  new Audio('images/مؤثر خطأ للمونتاج -sound effects-.mp3')

const endhappy =  new Audio('images/hi.mp4')

const _1 = new Audio('./images/العين.aac')
const _2 = new Audio('./images/رومان زنار.aac')
const _3 = new Audio('./images/الطبق.aac')
const _4 = new Audio('./images/100.aac')
const _5 = new Audio('./images/الرمانة.aac')
const _6 = new Audio('./images/ثقبة.aac')
const _7 = new Audio('./images/البيضة.aac')
const _8 = new Audio('./images/الوعد.aac')
const _9 = new Audio('./images/اصلع.aac')
const _10 = new Audio('./images/السمسم.aac')
const _11 = new Audio('./images/الساعة.aac')
const _12 = new Audio('./images/الباذنجان.aac')
const _13 = new Audio('./images/السفنج.aac')
const _14 = new Audio('./images/السحاب.aac')
const _15 = new Audio('./images/عقرب الساعة.aac')
const _16 = new Audio('./images/الجريدة.aac')
const _17 = new Audio('./images/اتوقف عن التفكير.aac')
const _18 = new Audio('./images/الجزرة.aac')
const _19 = new Audio('./images/5.aac')
const _20 = new Audio('./images/نجم.aac')
const _21 = new Audio('./images/الدائرة.aac')
const _22 = new Audio('./images/ك.aac')
const _23 = new Audio('./images/ببت الشعر.aac')
const _24 = new Audio('./images/انت.aac')
const _25 = new Audio('./images/البصل.aac')
const _26 = new Audio('./images/حرف اللام.aac')
const _27 = new Audio('./images/بيت العنكبوت.aac')
const _28 = new Audio('./images/الزجاجة.aac')
const _29 = new Audio('./images/السلحفاء.aac')
const _30 = new Audio('./images/وهو متجمد.aac')
const _31 = new Audio('./images/الخفاش.aac')
const _32 = new Audio('./images/عرعر.aac')
const _33 = new Audio('./images/الابرة.aac')
const _34 = new Audio('./images/امجد.aac')
const _35 = new Audio('./images/جميع الشهور.aac')
const _36 = new Audio('./images/الرحمن.aac')
const _37 = new Audio('./images/الصمت.aac')
const _38 = new Audio('./images/البنك.aac')
const _39 = new Audio('./images/الفشل.aac')
const _40 = new Audio('./images/اسمك.aac')
const _41 = new Audio('./images/يوجد ست.aac')
const _42 = new Audio('./images/الذكر.aac')
const _43 = new Audio('./images/الحذاء.aac')
const _44 = new Audio('./images/الإنسان.aac')
const _45 = new Audio('./images/الاعمى.aac')
const _46 = new Audio('./images/لا لون له.aac')
const _47 = new Audio('./images/العطار.aac')
const _48 = new Audio('./images/العمر.aac')
const _49 = new Audio('./images/الفحم.aac')
const _50 = new Audio('./images/الماء.aac')




// caling
const ran = new Audio('./images/نغمة رنين الجرس.mp4') 

// start calling functions


cal_btn1.onclick = function(){
    let in1 = document.getElementById("cal_inp1").value;     
     
    if(in1 == "")
    {
        console.log("Error");
    }else if(isNaN(in1))
    {
        console.log("Error");
    }else if(in1 == 1)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                        _1.play(); 
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    
    

    }else if(in1 == 2)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                     _2.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 3)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _3.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 4 )
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _4.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 5)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                        _5.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 6)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _6.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 7)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                   _7.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 8)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _8.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 9)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _9.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 10)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _10.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });    
    
    }else if(in1 == 11)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _11.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 12)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _12.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 13)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                        _13.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 14)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                      _14.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 15)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _15.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 16 )
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _16.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 17)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _17.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 18)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _18.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 19)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _19.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 20)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _20.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 21)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _21.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 22)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _22.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });    
    }else if(in1 == 23)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _23.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 24)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _24.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 25)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _25.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 26)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _26.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 27)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _27.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 28)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _28.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 29)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _29.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 30)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _30.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 31)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _31.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 32)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _32.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 33)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _33.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });    
    }else if(in1 == 34)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _34.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 35)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _35.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 36)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _36.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });    
    }else if(in1 == 37)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _37.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 38)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _38.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 39)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _39.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 40)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _40.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 41)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _41.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 42)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _42.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 43 )
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _43.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 44 )
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _44.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 45 )
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _45.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 46 )
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _46.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 47 )
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _47.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 48)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _48.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });    
    }else if(in1 == 49)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _49.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }else if(in1 == 50)
    {
        ran.play();
        $("#cal_gary1").fadeIn(3000,function(){
            $("#cal_gary1").fadeOut(3000,function(){
                $("#cal_img1").fadeOut(3000,function(){
                    $("#cal_img1").fadeOut(3000,function(){
                    _50.play();
                        document.getElementById("call__mohawla").innerHTML = "4";
                        $(".call1").fadeOut(200);
                        $(".call2").fadeIn(200);
                        
                    });
    
                });
    
            });
    
        });
    }
   


   
    

}







cal_btn2.onclick = function(){
   
    let in2 = document.getElementById("cal_inp2").value;     
         
    if(in2 == 1)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _1.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    
    

    }else if(in2 == 2 )
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _2.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 3)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _3.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 4)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _4.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 5)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _5.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 6)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _6.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 7)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _7.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 8)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _8.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 9)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _9.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 10)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _10.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    
    }else if(in2 == 11)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _11.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 12)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _12.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 13)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _13.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 14)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _14.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 15)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _15.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 16)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _16.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 17)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _17.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 18)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _18.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 19)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _19.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 20)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _20.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 21)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _21.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 22)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _22.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 23)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _23.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 24)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _24.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 25)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _25.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 26)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _26.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 27)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _27.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 28)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _28.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 29)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _29.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 30)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _30.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 31)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _31.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 32)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _32.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 33)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _33.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 34)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _34.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 35)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _35.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 36)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                        _36.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 37)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _37.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 38 )
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _38.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 39 )
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _39.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 40)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _40.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 41)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _41.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 42)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _42.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 43)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _43.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 44)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                _44.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 45)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _45.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 46)
    {
        ran.play();
        $("#cal_gary2").fadeIn(3000,function(){
            $("#cal_gary2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    $("#cal_img2").fadeOut(3000,function(){
                            _46.play();
                        document.getElementById("call__mohawla").innerHTML = "3";
                        $(".call2").fadeOut(200);
                        $(".call3").fadeIn(200);
    
                    });
    
                });
    
            });
    
        });
    }else if(in2 == 47)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                        _47.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 48)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _48.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 49)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _49.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }else if(in2 == 50)
    {
        ran.play();
    $("#cal_gary2").fadeIn(3000,function(){
        $("#cal_gary2").fadeOut(3000,function(){
            $("#cal_img2").fadeOut(3000,function(){
                $("#cal_img2").fadeOut(3000,function(){
                    _50.play();
                    document.getElementById("call__mohawla").innerHTML = "3";
                    $(".call2").fadeOut(200);
                    $(".call3").fadeIn(200);

                });

            });

        });

    });
    }
   



}




cal_btn3.onclick = function(){
    
    let in3 = document.getElementById("cal_inp3").value;

    if(in3 == "")
    {
        console.log("Error");
    }else if(isNaN(in3))
    {
        console.log("Error");

    }else if(in3 == 1)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _1.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 2)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _2.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 3)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _3.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 4)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _4.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 5)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _5.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 6)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _6.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 7)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _7.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 8)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _8.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 9)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _9.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 10)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _10.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 11)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _11.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 12)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _12.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 13)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _13.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 14)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _14.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 15)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _15.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 16)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _16.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 17)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _17.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 18)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _18.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 19)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _19.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 20)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _20.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 21)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _21.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 22)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _22.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 23)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _23.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 24)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _24.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 25)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _25.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 26)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _26.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 27)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _27.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 28)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _28.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 29)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _29.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 30)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _30.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 31)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _31.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 32)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _32.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 33)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _33.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 34)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _34.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 35)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _35.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 36)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _36.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 37)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                   _37.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 38)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _38.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 39)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _39.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 40)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                        _40.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 41)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _41.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 42)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _42.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 43)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _43.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 44)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _44.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 45)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _45.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 46)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _46.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 47)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _47.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 48)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _48.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 49)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _49.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }else if(in3 == 50)
    {
        ran.play();
    $("#cal_gary3").fadeIn(3000,function(){
        $("#cal_gary3").fadeOut(3000,function(){
            $("#cal_img3").fadeOut(3000,function(){
                $("#cal_img3").fadeOut(3000,function(){
                    _50.play();
                    document.getElementById("call__mohawla").innerHTML = "2";
                    $(".call3").fadeOut(200);
                    $(".call4").fadeIn(200);

                });

            });

        });

    });


    }
    

}


cal_btn4.onclick = function(){
 let in4 =  document.getElementById("cal_inp4").value;

 if(in4 == "")
 {
    console.log("error");
 }else if(isNaN(in4))
 {
    console.log("error");

 }else if(in4 == 1)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                   _1.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 2)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _2.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 3)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _3.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 5)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _5.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 6)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                _6.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 7)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _7.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 8)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _8.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 9)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                      _9.play();  
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 10)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _10.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 11)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _11.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 12)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _12.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 13)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                   _13.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 14)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                     _14.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 15)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _15.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 16)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _16.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 17)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _17.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 18)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _18.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 19)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _19.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 20)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _20.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 21)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _21.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 22)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _22.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 23)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _23.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 24)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _24.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 25)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _25.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 26)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _26.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 27)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _27.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 28)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _28.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 29)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _29.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 30)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _30.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 31)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _31.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 32)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _32.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 33)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _33.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 34)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _34.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }
 else if(in4 == 35)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _35.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 36)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _36.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 37)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _37.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 38)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _38.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 39)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _39.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 40)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _40.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 41)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _41.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 42)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _42.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 43)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _43.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 44)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _44.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 45)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _45.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 46)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _46.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 47)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                    _47.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 48)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _48.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 49)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _49.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 50)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _50.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }else if(in4 == 4)
 {
    ran.play();
    $("#cal_gary4").fadeIn(3000,function(){
        $("#cal_gary4").fadeOut(3000,function(){
            $("#cal_img4").fadeOut(3000,function(){
                $("#cal_img4").fadeOut(3000,function(){
                        _4.play();
                    document.getElementById("call__mohawla").innerHTML = "1";
                    $(".call4").fadeOut(200);
                    $(".call5").fadeIn(200);

                });

            });

        });

    });

 }



    


}

cal_btn5.onclick = function(){
   
    let in5 =  document.getElementById("cal_inp5").value;

    if(in5 == "")
    {
       console.log("error");
    }else if(isNaN(in5))
    {
       console.log("error");
   
    }else if(in5 == 1)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _1.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 2)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                   _2.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 3)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                            _3.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 4)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _4.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 5)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _5.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 6)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _6.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 7)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                            _7.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 8)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _8.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 9)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                            _9.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 10)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _10.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 11)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _11.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 12)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _12.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 13)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _13.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 14)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _14.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 15)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _15.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 16)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                            _16.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 17)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                            _17.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 18)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _18.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 19)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                            _19.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 20)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _20.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }
    else if(in5 == 21)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                            _21.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 22)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _22.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 23)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _23.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 24)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _24.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 25)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _25.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 26)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _26.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 27)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _27.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 28)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _28.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 29)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _29.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 30)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _30.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 31)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _31.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 32)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _32.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 33)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _33.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 34)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _34.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 35)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _35.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 36)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _36.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 37)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _37.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 38)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _38.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 39)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _39.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 40)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _40.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 41)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _41.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 42)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _42.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 43)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                    _43.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 44)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _44.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 45)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _45.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 46)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _46.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 47)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _47.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 48)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _48.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 49)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _49.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }else if(in5 == 50)
    {
        ran.play();
        $("#cal_gary5").fadeIn(3000,function(){
            $("#cal_gary5").fadeOut(3000,function(){
                $("#cal_img5").fadeOut(3000,function(){
                    $("#cal_img5").fadeOut(3000,function(){
                        _50.play();
                        document.getElementById("call__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات اتصال اخرى لقد استنفذت الخمس محاولات";
                        $(".call5").fadeOut(200);
    
                    });
    
                });
    
            });
    
        });
    
    }
   

    


}

// end calling functions


// start remove functions

re_btn1.onclick = function(){
 
    
    let in6 = document.getElementById("re_inp1").value;
   


    if(in6 == 1)
    {
        $(".remove1").fadeOut(1000 , function(){
            $(".remove2").fadeIn(1000,function(){
            $(".clean1").fadeOut(500);

                document.getElementById("remove__mohawla").innerHTML = "4";
            });

        });

 }else if(in6 == 2)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean2").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 3)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean3").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 4)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean4").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 5)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean5").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 6)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean6").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 7)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean7").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 8)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean8").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 9)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean9").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 10)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean10").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 11)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean11").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 12)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean12").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 13)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean13").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 14)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean14").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 15)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean2").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 16)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean16").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 17)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean17").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 18)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean18").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 19)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean19").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 20)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean20").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 21)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean21").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 22)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean22").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 23)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean23").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 24)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean24").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 25)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean25").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 26)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean26").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 27)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean27").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 28)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean28").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 29)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean29").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 30)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean30").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 31)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean31").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 32)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean32").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 33)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean33").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 34)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean34").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 35)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean35").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 36)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean36").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 37)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean37").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 38)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean38").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 39)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean39").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 40)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean40").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 41)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean41").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 42)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean42").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 43)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean43").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 44)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean44").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 45)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean45").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 46)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean46").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 47)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean47").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 48)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean48").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 49)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean49").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }else if(in6 == 50)
 {
    $(".remove1").fadeOut(1000 , function(){
        $(".remove2").fadeIn(1000,function(){
        $(".clean50").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "4";
        });

    });

 }




}




re_btn2.onclick = function(){
    
    let in7 = document.getElementById("re_inp2").value;
   


    if(in7 == 1)
    {
        $(".remove2").fadeOut(1000 , function(){
            $(".remove3").fadeIn(1000,function(){
            $(".clean1").fadeOut(500);

                document.getElementById("remove__mohawla").innerHTML = "3";
            });

        });

 }else if(in7 == 2)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean2").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 3)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean3").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 4)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean4").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 5)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean5").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 6)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean6").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 7)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean7").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 8)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean8").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 9)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean9").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 10)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean10").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 11)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean11").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 12)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean12").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 13)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean13").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 14)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean14").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 15)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean15").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 16)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean16").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 17)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean17").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 18)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean18").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 19)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean19").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 20)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean20").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 21)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean21").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 22)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean22").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 23)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean23").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 24)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean24").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 25)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean25").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 26)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean26").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 27)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean27").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 28)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean28").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 29)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean29").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 30)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean30").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 31)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean31").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 32)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean32").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 33)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean33").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 34)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean34").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 35)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean35").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 36)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean36").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 37)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean37").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 38)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean38").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 39)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean39").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 40)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean40").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 41)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean41").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 42)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean42").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 43)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean43").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 44)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean44").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 45)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean45").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 46)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean46").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 47)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean47").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 48)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean48").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 49)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean49").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }else if(in7 == 50)
 {
    $(".remove2").fadeOut(1000 , function(){
        $(".remove3").fadeIn(1000,function(){
        $(".clean50").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "3";
        });

    });

 }

}


re_btn3.onclick = function(){

    
    let in8 = document.getElementById("re_inp3").value;
   


    if(in8 == 1)
    {
        $(".remove3").fadeOut(1000 , function(){
            $(".remove4").fadeIn(1000,function(){
            $(".clean1").fadeOut(500);

                document.getElementById("remove__mohawla").innerHTML = "2";
            });

        });

 }else if(in8 == 2)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean2").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 3)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean3").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 4)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean4").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 5)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean5").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 6)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean6").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 7)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean7").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 8)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean8").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 9)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean9").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 10)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean10").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 11)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean11").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 12)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean12").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 13)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean13").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 14)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean14").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 15)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean15").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 16)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean16").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 17)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean17").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 18)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean18").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 19)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean19").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 20)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean20").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 21)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean21").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 22)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean22").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 23)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean23").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 24)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean24").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 25)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean25").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 26)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean26").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 27)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean27").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 28)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean28").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 29)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean29").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 30)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean30").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 31)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean31").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 32)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean32").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 33)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean33").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 34)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean34").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 35)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean35").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 36)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean36").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 37)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean37").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 38)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean38").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 39)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean39").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 40)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean40").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 41)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean41").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 42)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean42").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 43)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean43").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 44)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean44").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 45)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean45").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 46)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean46").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 47)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean47").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 48)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean48").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 49)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean49").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }else if(in8 == 50)
 {
    $(".remove3").fadeOut(1000 , function(){
        $(".remove4").fadeIn(1000,function(){
        $(".clean50").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "2";
        });

    });

 }







}


re_btn4.onclick = function(){
    


    let in9 = document.getElementById("re_inp4").value;
   


    if(in9 == 1)
    {
        $(".remove4").fadeOut(1000 , function(){
            $(".remove5").fadeIn(1000,function(){
            $(".clean1").fadeOut(500);

                document.getElementById("remove__mohawla").innerHTML = "1";
            });

        });

 }else if(in9 == 2)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean2").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 3)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean3").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 4)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean4").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 5)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean5").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 6)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean6").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 7)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean7").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 8)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean8").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 9)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean9").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 10)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean10").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 11)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean11").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 12)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean12").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 13)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean13").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 14)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean14").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 15)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean15").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 16)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean16").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 17)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean17").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 18)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean18").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 19)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean19").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 20)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean20").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 21)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean21").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 22)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean22").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 23)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean23").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 24)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean24").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 25)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean25").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 26)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean26").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 27)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean27").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 28)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean28").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 29)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean29").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 30)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean30").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 31)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean31").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 32)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean32").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 33)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean33").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 34)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean34").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 35)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean35").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 36)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean36").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 37)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean37").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 38)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean38").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 39)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean39").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 40)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean40").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 41)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean41").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 42)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean42").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 43)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean43").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 44)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean44").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 45)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean45").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 46)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean46").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 47)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean47").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 48)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean48").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 49)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean49").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }else if(in9 == 50)
 {
    $(".remove4").fadeOut(1000 , function(){
        $(".remove5").fadeIn(1000,function(){
        $(".clean50").fadeOut(500);

            document.getElementById("remove__mohawla").innerHTML = "1";
        });

    });

 }


}


re_btn5.onclick = function(){

    let in10 = document.getElementById("re_inp5").value;
   


    if(in10 == 1)
    {
       
        $(".remove5").fadeOut(1000 , function(){
            $(".clean1").fadeOut(500);
            document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


        });

 }else if(in10 == 2)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean2").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 3)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean3").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 4)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean4").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 5)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean5").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 6)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean6").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 7)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean7").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 8)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean8").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 9)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean9").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 10)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean10").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 11)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean11").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 12)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean12").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 13)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean13").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 14)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean14").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 15)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean15").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 16)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean16").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 17)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean17").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 18)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean18").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 19)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean19").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 20)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean20").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 21)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean21").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 22)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean22").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 23)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean23").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 24)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean24").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 25)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean25").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 26)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean26").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 27)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean27").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 28)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean28").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 29)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean29").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 30)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean30").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 31)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean31").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 32)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean32").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 33)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean33").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 34)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean34").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 35)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean35").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 36)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean36").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 37)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean37").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 38)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean38").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 39)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean39").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 40)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean40").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 41)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean41").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 42)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean42").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 43)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean43").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 44)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean44").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 45)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean45").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 46)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean46").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 47)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean47").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 48)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean48").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 49)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean49").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }else if(in10 == 50)
 {
    $(".remove5").fadeOut(1000 , function(){
        $(".clean50").fadeOut(500);
        document.getElementById("remove__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات حذف اخرى لقد استنفذت الخمس محاولات";


    });

 }



       


}



// end remove functions


// start answer functions


an_btn1.onclick = function(){
    

    let in11 = document.getElementById("an_inp1").value;
   


    if(in11 == 1)
    {
       
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t1").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 2)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t2").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 3)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t3").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 4)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t4").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 5)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t5").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 6)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t6").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 7)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t7").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 8)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t8").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 9)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t9").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 10)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t10").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 11)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t11").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 12)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t12").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 13)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t13").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 14)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t14").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 15)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t15").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 16)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t16").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 17)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t17").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 18)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t18").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 19)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t19").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 20)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t20").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 21)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t21").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 22)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t22").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 23)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t23").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 24)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t24").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 25)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t25").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 26)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t26").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 27)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t27").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 28)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t28").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 29)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t29").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 30)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t30").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 31)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t31").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 32)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t32").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 33)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t33").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 34)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t34").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 35)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t35").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 36)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t36").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 37)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t37").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 38)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t38").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 39)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t39").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 40)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t40").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 41)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t41").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 42)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t42").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 43)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t43").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 44)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t44").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 45)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t45").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 46)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t46").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 47)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t47").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 48)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t48").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 49)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t49").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }else if(in11 == 50)
 {
        $(".answer1").fadeOut(1000 , function(){
            $(".answer2").fadeIn(1000,function(){
                $("#t50").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "4";

            });


        });

 }

}





an_btn2.onclick = function(){

    let in12 = document.getElementById("an_inp2").value;
   


    if(in12 == 1)
    {
       
        $(".answer2").fadeOut(1000 , function(){
            $(".answer3").fadeIn(1000,function(){
                $("#t1").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "3";

            });


        });

 }else if(in12 == 2)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t2").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 3)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t3").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 4)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t4").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 5)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t5").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 6)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t6").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 7)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t7").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 8)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t8").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 9)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t9").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 10)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t10").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 11)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t11").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 12)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t12").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 13)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t13").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 14)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t14").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 15)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t15").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 16)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t16").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 17)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t17").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 18)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t18").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 19)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t19").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 20)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t20").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 21)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t21").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 22)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t22").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 23)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t23").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 24)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t24").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 25)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t25").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 26)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t26").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 27)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t27").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 28)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t28").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 29)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t29").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 30)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t30").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 31)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t31").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 32)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t32").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 33)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t33").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 34)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t34").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 35)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t35").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 36)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t36").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 37)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t37").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 38)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t38").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 39)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t39").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 40)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t40").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 41)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t41").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 42)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t42").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 43)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t43").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 44)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t44").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 45)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t45").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 46)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t46").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 47)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t47").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 48)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t48").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 49)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t49").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }else if(in12 == 50)
 {
    $(".answer2").fadeOut(1000 , function(){
        $(".answer3").fadeIn(1000,function(){
            $("#t50").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "3";

        });


    });
 }
    
        


}




an_btn3.onclick = function(){


    let in13 = document.getElementById("an_inp3").value;
   


    if(in13 == 1)
    {
       
        $(".answer3").fadeOut(1000 , function(){
            $(".answer4").fadeIn(1000,function(){
                $("#t1").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "2";

            });


        });

 }else if(in13 == 2)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t2").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 3)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t3").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 4)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t4").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 5)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t5").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 6)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t6").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 7)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t7").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 8)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t8").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 9)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t9").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 10)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t10").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 11)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t11").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 12)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t12").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 13)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t13").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 14)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t14").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 15)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t15").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 16)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t16").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 17)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t17").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 18)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t18").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 19)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t19").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 20)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t20").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 21)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t21").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 22)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t22").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 23)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t23").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 24)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t24").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 25)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t25").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 26)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t26").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 27)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t27").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 28)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t28").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 29)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t29").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 30)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t30").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 31)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t31").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 32)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t32").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 33)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t33").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 34)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t34").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 35)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t35").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 36)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t36").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 37)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t37").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 38)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t38").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 39)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t39").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 40)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t40").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 41)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t41").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 42)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t42").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 43)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t43").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 44)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t44").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 45)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t45").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 46)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t46").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 47)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t47").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 48)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t48").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 49)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t49").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }else if(in13 == 50)
 {
    $(".answer3").fadeOut(1000 , function(){
        $(".answer4").fadeIn(1000,function(){
            $("#t50").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "2";

        });


    });
 }
  

}



an_btn4.onclick = function(){

    let in14 = document.getElementById("an_inp4").value;
   


    if(in14 == 1)
    {
       
        $(".answer4").fadeOut(1000 , function(){
            $(".answer5").fadeIn(1000,function(){
                $("#t1").css("background-color" , "green");
                document.getElementById("answer__mohawla").innerHTML = "1";

            });


        });

 }else if(in14 == 2)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t2").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 3)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t3").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 4)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t4").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 5)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t5").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 6)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t6").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 7)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t7").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 8)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t8").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 9)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t9").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 10)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t10").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 11)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t11").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 12)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t12").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 13)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t13").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 14)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t14").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 15)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t15").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 16)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t16").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 17)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t17").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 18)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t18").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 19)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t19").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 20)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t20").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 21)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t21").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 22)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t22").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 23)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t23").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 24)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t24").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 25)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t25").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 26)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t26").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 27)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t27").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 28)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t28").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 29)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t29").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 30)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t30").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 31)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t31").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 32)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t32").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 33)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t33").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 34)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t34").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 35)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t35").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 36)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t36").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 37)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t37").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 38)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t38").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 39)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t39").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 40)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t40").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 41)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t41").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 42)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t42").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 43)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t43").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 44)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t44").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 45)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t45").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 46)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t46").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 47)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t47").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 48)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t48").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 49)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t49").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }else if(in14 == 50)
 {
    $(".answer4").fadeOut(1000 , function(){
        $(".answer5").fadeIn(1000,function(){
            $("#t50").css("background-color" , "green");
            document.getElementById("answer__mohawla").innerHTML = "1";

        });


    });
 }




}



an_btn5.onclick = function(){
 
    let in15 = document.getElementById("an_inp5").value;
   


    if(in15 == 1)
    {
       
        $(".answer5").fadeOut(1000 , function(){
            $("#t1").css("background-color" , "green");
            document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



        });


 }else if(in15 == 2)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t2").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 3)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t3").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 4)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t4").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 5)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t5").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 6)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t6").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 7)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t7").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 8)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t8").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 9)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t9").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 10)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t10").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 11)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t11").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 12)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t12").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 13)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t13").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 14)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t14").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 15)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t15").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 16)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t16").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 17)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t17").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 18)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t18").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 19)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t19").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 20)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t20").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 21)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t21").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 22)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t22").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 23)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t23").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 24)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t24").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 25)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t25").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 26)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t26").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 27)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t27").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 28)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t28").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 29)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t29").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 30)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t30").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 31)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t31").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 32)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t32").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 33)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t33").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 34)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t34").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 35)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t35").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 36)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t36").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 37)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t37").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 38)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t38").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 39)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t39").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 40)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t40").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 41)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t41").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 42)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t42").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 43)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t43").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 44)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t44").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 45)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t45").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 46)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t46").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 47)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t47").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 48)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t48").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 49)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t49").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }else if(in15 == 50)
 {
    $(".answer5").fadeOut(1000 , function(){
        $("#t50").css("background-color" , "green");
        document.getElementById("answer__mohawla_parent").innerHTML = "لا يوجد لديك اى محاولات للحل مرة اخرى لقد استنفذت الخمس محاولات";



    });
 }


    
       


}


// end answer functions


// start chosses functions

t1.onclick = function(){
    right.play();
    $("#t1").css("background-color" , "green");
    $(".div1").fadeOut(3000,function(){
    $(".div1_2").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$100";
    document.getElementById("your_number2").innerHTML = "$100";

    });



}
function wrong1(){
    wrong.play();
    $(".div1").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");
   


    });



}



t2.onclick = function(){
    right.play();
    $("#t2").css("background-color" , "green");
    $(".div1_2").fadeOut(3000,function(){
    $(".div1_3").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$200";
    document.getElementById("your_number2").innerHTML = "$200";

    });



}
function wrong2(){
    wrong.play();
    $(".div1_2").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}




t3.onclick = function(){
    right.play();
    $("#t3").css("background-color" , "green");
    $(".div1_3").fadeOut(3000,function(){
    $(".div1_4").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$300";
    document.getElementById("your_number2").innerHTML = "$300";

    });



}
function wrong3(){
    wrong.play();
    $(".div1_3").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}



t4.onclick = function(){
    right.play();
    $("#t4").css("background-color" , "green");
    $(".div1_4").fadeOut(3000,function(){
    $(".div1_5").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$400";
    document.getElementById("your_number2").innerHTML = "$400";

    });



}
function wrong4(){
    wrong.play();
    $(".div1_4").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}


t5.onclick = function(){
    right.play();
    $("#t5").css("background-color" , "green");
    $(".div1_5").fadeOut(3000,function(){
    $(".div1_6").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$500";
    document.getElementById("your_number2").innerHTML = "$500";

    });



}
function wrong5(){
    wrong.play();
    $(".div1_5").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}



t6.onclick = function(){
    right.play();
    $("#t6").css("background-color" , "green");
    $(".div1_6").fadeOut(3000,function(){
    $(".div1_7").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$600";
    document.getElementById("your_number2").innerHTML = "$600";

    });



}
function wrong6(){
    wrong.play();
    $(".div1_6").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}





t7.onclick = function(){
    right.play();
    $("#t7").css("background-color" , "green");
    $(".div1_7").fadeOut(3000,function(){
    $(".div1_8").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$700";
    document.getElementById("your_number2").innerHTML = "$700";

    });



}
function wrong7(){
    wrong.play();
    $(".div1_7").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}


t8.onclick = function(){
    right.play();
    $("#t8").css("background-color" , "green");
    $(".div1_8").fadeOut(3000,function(){
    $(".div1_9").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$800";
    document.getElementById("your_number2").innerHTML = "$800";

    });



}
function wrong8(){
    wrong.play();
    $(".div1_8").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}




t9.onclick = function(){
    right.play();
    $("#t9").css("background-color" , "green");
    $(".div1_9").fadeOut(3000,function(){
    $(".div1_10").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$900";
    document.getElementById("your_number2").innerHTML = "$900";

    });



}
function wrong9(){
    wrong.play();
    $(".div1_9").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t10.onclick = function(){
    right.play();
    $("#t10").css("background-color" , "green");
    $(".div1_10").fadeOut(3000,function(){
    $(".div1_11").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1000";
    document.getElementById("your_number2").innerHTML = "$1000";

    });



}
function wrong10(){
    wrong.play();
    $(".div1_10").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}





t11.onclick = function(){
    right.play();
    $("#t11").css("background-color" , "green");
    $(".div1_11").fadeOut(3000,function(){
    $(".div1_12").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1100";
    document.getElementById("your_number2").innerHTML = "$1100";

    });



}
function wrong11(){
    wrong.play();
    $(".div1_11").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t12.onclick = function(){
    right.play();
    $("#t12").css("background-color" , "green");
    $(".div1_12").fadeOut(3000,function(){
    $(".div1_13").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1200";
    document.getElementById("your_number2").innerHTML = "$1200";

    });



}
function wrong12(){
    wrong.play();
    $(".div1_12").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t13.onclick = function(){
    right.play();
    $("#t13").css("background-color" , "green");
    $(".div1_13").fadeOut(3000,function(){
    $(".div1_14").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1300";
    document.getElementById("your_number2").innerHTML = "$1300";

    });



}
function wrong13(){
    wrong.play();
    $(".div1_13").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}


t14.onclick = function(){
    right.play();
    $("#t14").css("background-color" , "green");
    $(".div1_14").fadeOut(3000,function(){
    $(".div1_15").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1400";
    document.getElementById("your_number2").innerHTML = "$1400";

    });



}
function wrong14(){
    wrong.play();
    $(".div1_14").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}



t15.onclick = function(){
    right.play();
    $("#t15").css("background-color" , "green");
    $(".div1_15").fadeOut(3000,function(){
    $(".div1_16").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1500";
    document.getElementById("your_number2").innerHTML = "$1500";

    });



}
function wrong15(){
    wrong.play();
    $(".div1_15").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t16.onclick = function(){
    right.play();
    $("#t16").css("background-color" , "green");
    $(".div1_16").fadeOut(3000,function(){
    $(".div1_17").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1600";
    document.getElementById("your_number2").innerHTML = "$1600";

    });



}
function wrong16(){
    wrong.play();
    $(".div1_16").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t17.onclick = function(){
    right.play();
    $("#t17").css("background-color" , "green");
    $(".div1_17").fadeOut(3000,function(){
    $(".div1_18").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1700";
    document.getElementById("your_number2").innerHTML = "$1700";

    });



}
function wrong17(){
    wrong.play();
    $(".div1_17").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t18.onclick = function(){
    right.play();
    $("#t18").css("background-color" , "green");
    $(".div1_18").fadeOut(3000,function(){
    $(".div1_19").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1800";
    document.getElementById("your_number2").innerHTML = "$1800";

    });



}
function wrong18(){
    wrong.play();
    $(".div1_18").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}




t19.onclick = function(){
    right.play();
    $("#t19").css("background-color" , "green");
    $(".div1_19").fadeOut(3000,function(){
    $(".div1_20").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$1900";
    document.getElementById("your_number2").innerHTML = "$1900";

    });



}
function wrong19(){
    wrong.play();
    $(".div1_19").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t20.onclick = function(){
    right.play();
    $("#t20").css("background-color" , "green");
    $(".div1_20").fadeOut(3000,function(){
    $(".div1_21").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2000";
    document.getElementById("your_number2").innerHTML = "$2000";

    });



}
function wrong20(){
    wrong.play();
    $(".div1_20").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t21.onclick = function(){
    right.play();
    $("#t21").css("background-color" , "green");
    $(".div1_21").fadeOut(3000,function(){
    $(".div1_22").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2100";
    document.getElementById("your_number2").innerHTML = "$2100";

    });



}
function wrong21(){
    wrong.play();
    $(".div1_21").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}





t22.onclick = function(){
    right.play();
    $("#t22").css("background-color" , "green");
    $(".div1_22").fadeOut(3000,function(){
    $(".div1_23").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2200";
    document.getElementById("your_number2").innerHTML = "$2200";

    });



}
function wrong22(){
    wrong.play();
    $(".div1_22").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);


        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");

    });



}




t23.onclick = function(){
    right.play();
    $("#t23").css("background-color" , "green");
    $(".div1_23").fadeOut(3000,function(){
    $(".div1_24").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2300";
    document.getElementById("your_number2").innerHTML = "$2300";

    });



}
function wrong23(){
    wrong.play();
    $(".div1_23").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}





t24.onclick = function(){
    right.play();
    $("#t24").css("background-color" , "green");
    $(".div1_24").fadeOut(3000,function(){
    $(".div1_25").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2400";
    document.getElementById("your_number2").innerHTML = "$2400";

    });



}
function wrong24(){
    wrong.play();
    $(".div1_24").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t25.onclick = function(){
    right.play();
    $("#t25").css("background-color" , "green");
    $(".div1_25").fadeOut(3000,function(){
    $(".div1_26").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2500";
    document.getElementById("your_number2").innerHTML = "$2500";

    });



}
function wrong25(){
    wrong.play();
    $(".div1_25").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t26.onclick = function(){
    right.play();
    $("#t26").css("background-color" , "green");
    $(".div1_26").fadeOut(3000,function(){
    $(".div1_27").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2600";
    document.getElementById("your_number2").innerHTML = "$2600";

    });



}
function wrong26(){
    wrong.play();
    $(".div1_26").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t27.onclick = function(){
    right.play();
    $("#t27").css("background-color" , "green");
    $(".div1_27").fadeOut(3000,function(){
    $(".div1_28").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2700";
    document.getElementById("your_number2").innerHTML = "$2700";

    });



}
function wrong27(){
    wrong.play();
    $(".div1_27").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}

t28.onclick = function(){
    right.play();
    $("#t28").css("background-color" , "green");
    $(".div1_28").fadeOut(3000,function(){
    $(".div1_29").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2800";
    document.getElementById("your_number2").innerHTML = "$2800";

    });



}
function wrong28(){
    wrong.play();
    $(".div1_28").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t29.onclick = function(){
    right.play();
    $("#t29").css("background-color" , "green");
    $(".div1_29").fadeOut(3000,function(){
    $(".div1_30").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$2900";
    document.getElementById("your_number2").innerHTML = "$2900";


    });



}
function wrong29(){
    wrong.play();
    $(".div1_29").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}


t30.onclick = function(){
    right.play();
    $("#t30").css("background-color" , "green");
    $(".div1_30").fadeOut(3000,function(){
    $(".div1_31").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3000";
    document.getElementById("your_number2").innerHTML = "$3000";


    });



}
function wrong30(){
    wrong.play();
    $(".div1_30").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t31.onclick = function(){
    right.play();
    $("#t31").css("background-color" , "green");
    $(".div1_31").fadeOut(3000,function(){
    $(".div1_32").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3100";
    document.getElementById("your_number2").innerHTML = "$3100";


    });



}
function wrong31(){
    wrong.play();
    $(".div1_31").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t32.onclick = function(){
    right.play();
    $("#t32").css("background-color" , "green");
    $(".div1_32").fadeOut(3000,function(){
    $(".div1_33").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3200";
    document.getElementById("your_number2").innerHTML = "$3200";


    });



}
function wrong32(){
    wrong.play();
    $(".div1_32").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t33.onclick = function(){
    right.play();
    $("#t33").css("background-color" , "green");
    $(".div1_33").fadeOut(3000,function(){
    $(".div1_34").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3300";
    document.getElementById("your_number2").innerHTML = "$3300";


    });



}
function wrong33(){
    wrong.play();
    $(".div1_33").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t34.onclick = function(){
    right.play();
    $("#t34").css("background-color" , "green");
    $(".div1_34").fadeOut(3000,function(){
    $(".div1_35").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3400";
    document.getElementById("your_number2").innerHTML = "$3400";


    });



}
function wrong34(){
    wrong.play();
    $(".div1_34").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}





t35.onclick = function(){
    right.play();
    $("#t35").css("background-color" , "green");
    $(".div1_35").fadeOut(3000,function(){
    $(".div1_36").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3500";
    document.getElementById("your_number2").innerHTML = "$3500";


    });



}
function wrong35(){
    wrong.play();
    $(".div1_35").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);


        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");

    });



}





t36.onclick = function(){
    right.play();
    $("#t36").css("background-color" , "green");
    $(".div1_36").fadeOut(3000,function(){
    $(".div1_37").fadeIn(3000);

    document.getElementById("your_number").innerHTML = "$3600";
    document.getElementById("your_number2").innerHTML = "$3600";

    });



}
function wrong36(){
    wrong.play();
    $(".div1_36").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t37.onclick = function(){
    right.play();
    $("#t37").css("background-color" , "green");
    $(".div1_37").fadeOut(3000,function(){
    $(".div1_38").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3700";
    document.getElementById("your_number2").innerHTML = "$3700";


    });



}
function wrong37(){
    wrong.play();
    $(".div1_37").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t38.onclick = function(){
    right.play();
    $("#t38").css("background-color" , "green");
    $(".div1_38").fadeOut(3000,function(){
    $(".div1_39").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3800";
    document.getElementById("your_number2").innerHTML = "$3800";


    });



}
function wrong38(){
    wrong.play();
    $(".div1_38").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t39.onclick = function(){
    right.play();
    $("#t39").css("background-color" , "green");
    $(".div1_39").fadeOut(3000,function(){
    $(".div1_40").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$3900";
    document.getElementById("your_number2").innerHTML = "$3900";


    });



}
function wrong39(){
    wrong.play();
    $(".div1_39").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}



t40.onclick = function(){
    right.play();
    $("#t40").css("background-color" , "green");
    $(".div1_40").fadeOut(3000,function(){
    $(".div1_41").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4000";
    document.getElementById("your_number2").innerHTML = "$4000";


    });



}
function wrong40(){
    wrong.play();
    $(".div1_40").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t41.onclick = function(){
    right.play();
    $("#t41").css("background-color" , "green");
    $(".div1_41").fadeOut(3000,function(){
    $(".div1_42").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4100";
    document.getElementById("your_number2").innerHTML = "$4100";


    });



}
function wrong41(){
    wrong.play();
    $(".div1_41").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t42.onclick = function(){
    right.play();
    $("#t42").css("background-color" , "green");
    $(".div1_42").fadeOut(3000,function(){
    $(".div1_43").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4200";
    document.getElementById("your_number2").innerHTML = "$4200";


    });



}
function wrong42(){
    wrong.play();
    $(".div1_42").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t43.onclick = function(){
    right.play();
    $("#t43").css("background-color" , "green");
    $(".div1_43").fadeOut(3000,function(){
    $(".div1_44").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4300";
    document.getElementById("your_number2").innerHTML = "$4300";


    });



}

function wrong43(){
    wrong.play();
    $(".div1_43").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t44.onclick = function(){
    right.play();
    $("#t44").css("background-color" , "green");
    $(".div1_44").fadeOut(3000,function(){
    $(".div1_45").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4400";
    document.getElementById("your_number2").innerHTML = "$4400";


    });



}
function wrong44(){
    wrong.play();
    $(".div1_44").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t45.onclick = function(){
    right.play();
    $("#t45").css("background-color" , "green");
    $(".div1_45").fadeOut(3000,function(){
    $(".div1_46").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4500";
    document.getElementById("your_number2").innerHTML = "$4500";


    });



}
function wrong45(){
    wrong.play();
    $(".div1_45").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}




t46.onclick = function(){
    right.play();
    $("#t46").css("background-color" , "green");
    $(".div1_46").fadeOut(3000,function(){
    $(".div1_47").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4600";
    document.getElementById("your_number2").innerHTML = "$4600";


    });



}
function wrong46(){
    wrong.play();
    $(".div1_46").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);


        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");

    });



}




t47.onclick = function(){
    right.play();
    $("#t47").css("background-color" , "green");
    $(".div1_47").fadeOut(3000,function(){
    $(".div1_48").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4700";
    document.getElementById("your_number2").innerHTML = "$4700";


    });



}
function wrong47(){
    wrong.play();
    $(".div1_47").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}



t48.onclick = function(){
    right.play();
    $("#t48").css("background-color" , "green");
    $(".div1_48").fadeOut(3000,function(){
    $(".div1_49").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4800";
    document.getElementById("your_number2").innerHTML = "$4800";


    });



}
function wrong48(){
    wrong.play();
    $(".div1_48").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);

        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");


    });



}


t49.onclick = function(){
    right.play();
    $("#t49").css("background-color" , "green");
    $(".div1_49").fadeOut(3000,function(){
    $(".div1_50").fadeIn(3000);
    document.getElementById("your_number").innerHTML = "$4900";
    document.getElementById("your_number2").innerHTML = "$4900";


    });



}
function wrong49(){
    wrong.play();
    $(".div1_49").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}



t50.onclick = function(){
    right.play();
    $("#t50").css("background-color" , "green");
    document.getElementById("your_number").innerHTML = "$5000";
    document.getElementById("your_number2").innerHTML = "$5000";

    $(".div1_50").fadeOut(3000,function(){
        $("body").css("overflow-y" , "hidden");
        
        $(".sec_fooooz").fadeIn(3000,function(){
           
            $("#row1 ,#row2 ").fadeIn(3000,function(){
                $("#row1 ,#row2 ").fadeOut(3000,function(){
                  $("#row4").fadeIn(1000);


                });


            });
          });
  

    });



}
function wrong50(){
    wrong.play();
    $(".div1_50").fadeOut(1000,function(){
        $(".gameover").fadeIn(1000);
        $(".sec2 , .sec1").css("opacity" , "0.1");
        $("body").css("background-color" , "black");



    });



}

// end chosses functions


// start calling me 

call_me.onclick = function(){
    $(".slidecall").animate({"right" : "0px"});

}
close_calling_slide.onclick = function(){
    $(".slidecall").animate({"right" : "-320px"});

}


// end calling me 



// start remove me 

remove_me.onclick = function(){
    $(".slideremove").animate({"right" : "0px"});

}
close_remove_slide.onclick = function(){
    $(".slideremove").animate({"right" : "-320px"});

}


// end remove me 




// start answer me 

answerme.onclick = function(){
    $(".slideanswer").animate({"right" : "0px"});

}
close_answer_slide.onclick = function(){
    $(".slideanswer").animate({"right" : "-320px"});

}


// end answer me 





aaaaa.onclick = function(){


    $(".slidelevels").animate({"left" : "0px"});

}
closeitlevel.onclick = function(){

    $(".slidelevels").animate({"left" : "-360px"});  
} 








// star1.onclick = function(){

//     $("#star1").css("color" , "yellow");
//     $("#star2 ,#star3,#star4,#star5 ").css("color" , "white");
//     document.getElementById("altaky__eem").innerHTML ="ماشى مفيش مشكلة "; 
//      $("#clickhere").fadeOut(100);

// }

// star2.onclick = function(){

//     $("#star1 ,#star2 ").css("color" , "yellow");
//     $("#star3 ,#star4,#star5").css("color" , "white");
//     document.getElementById("altaky__eem").innerHTML ="شكرا "; 
//     $("#clickhere").fadeOut(100);

// }

// star3.onclick = function(){

//     $("#star1 , #star2 , #star3 ").css("color" , "yellow");
//     $("#star4 , #star5 ").css("color" , "white");
//     document.getElementById("altaky__eem").innerHTML ="تسلم ياغالى "; 
//     $("#clickhere").fadeOut(100);

// }

// star4.onclick = function(){

//     $("#star1 ,#star2 , #star3, #star4 ").css("color" , "yellow");
//     $("#star5 ").css("color" , "white");
//     document.getElementById("altaky__eem").innerHTML ="ايوة بقى  "; 
//     $("#clickhere").fadeOut(100);

// }

// star5.onclick = function(){

//     $("#star1 ,#star2 , #star3, #star4, #star5 ").css("color" , "yellow");
//     document.getElementById("altaky__eem").innerHTML ="واحنا كمان بنحبك اووى وعشان كدا الفيديدو الجميل دة ليك "; 

//     $("#clickhere").fadeIn(100);
    
// }





// clickhere.onclick = function(){
//     $(".kayam").fadeOut(100);
//         $(".vidio_abrahim_alfaky").fadeIn();

// }





star1.onclick = function(){

        $("#star1").css("color" , "yellow");
        $("#star2").css("color" , "white");
        $("#star3").css("color" , "white");
        $("#star4").css("color" , "white");
        $("#star5").css("color" , "white");
        document.getElementById("resultthanks").innerHTML = "ماشى مفيش مشكلة ";
        $("#clicktovidio").fadeOut(10);
}


star2.onclick = function(){

    $("#star2").css("color" , "yellow");
    $("#star1").css("color" , "yellow");
    $("#star3").css("color" , "white");
    $("#star4").css("color" , "white");
    $("#star5").css("color" , "white");
    document.getElementById("resultthanks").innerHTML = "شكرا ليك ";
    $("#clicktovidio").fadeOut(10);
}

star3.onclick = function(){

    $("#star3").css("color" , "yellow");
    $("#star2").css("color" , "yellow");
    $("#star1").css("color" , "yellow");
    $("#star4").css("color" , "white");
    $("#star5").css("color" , "white");
    document.getElementById("resultthanks").innerHTML = "حلو من زوقك ";
    $("#clicktovidio").fadeOut(10);
}

star4.onclick = function(){

    $("#star4").css("color" , "yellow");
    $("#star3").css("color" , "yellow");
    $("#star2").css("color" , "yellow");
    $("#star1").css("color" , "yellow");
    $("#star5").css("color" , "white");
    document.getElementById("resultthanks").innerHTML = "ياسيدى على الجمال";
    $("#clicktovidio").fadeOut(10);
}
star5.onclick = function(){

    $("#star5").css("color" , "yellow");
    $("#star4").css("color" , "yellow");
    $("#star3").css("color" , "yellow");
    $("#star2").css("color" , "yellow");
    $("#star1").css("color" , "yellow");
    document.getElementById("resultthanks").innerHTML = "لا كدا كتير والله وعشان التقييم الحلو دة الفيديو دة ليك  ";
    $("#clicktovidio").fadeIn(2000);

}



_img1.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx1").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}

_img2.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx2").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}


_img3.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx3").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}


_img4.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx4").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}

_img5.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx5").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}


_img6.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx6").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}

_img7.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx7").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}

_img8.onclick = function(){
    $("#row4").fadeOut(2000,function(){
        $("#row5").fadeIn(2000,function(){
            $("#zx8").fadeIn(2000,function(){
                $("#row5").fadeOut(2000,function(){
                    $("#row3").fadeIn(2000);
                });

            });

        });

    });
}


clicktovidio.onclick = function(){

    $("#row3").fadeOut(1000,  function(){
        $("#row6").fadeIn(2000);

    });

}

const musicfairose = new Audio('./images/videoplayback.mp4');
astart.onclick = function(){

    $("#row7").fadeOut(2000,  function(){
        musicfairose.play();
        $("#row8").fadeIn(2000);

    });


}

gahez.onclick = function(){

    $("#row8").fadeOut(2000,  function(){
        musicfairose.pause();
        $("#row9").fadeIn(2000,function(){
            $("#Ready").fadeIn(2000,function(){
                $("#Ready").fadeOut(2000,function(){
                    $("#Steady").fadeIn(2000,function(){
                        $("#Steady").fadeOut(2000,function(){
                            $("#Go").fadeIn(2000,function(){
                                $("#Go").fadeOut(2000,function(){
                                    $(".sec_fooooz").fadeOut(1000,function(){
                                        $("body").css("overflow-y" , "scroll");
                                    });

                                });
                            });

                        });

                    });

                });

            });
        });

    });   

}