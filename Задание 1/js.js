let num = 50;

if (num < 50) {
    console.log("Мало")
} else if (num > 50) {
    console.log("Много")
}    else {
        console.log("Верно")
    }

    (num == 50) ? console.log("Верно") : console.log("Неверно");

    switch (true) {
        case num < 50:
            console.log("Мало");
            break;
        case num > 50:
            console.log("Много");
            break;
        case num == 50:
            console.log("Верно");
            break;
        default:
            console.log("Какая-то дичь");
            break;
    }

    let a = 2;
    /*while (a<8) {
        console.log(a);
        a++;
    }*/
    /* do {
        console.log(a);
        ++a;
     } while (a < 7);*/

     for (i=1; i<8; ++i) {
         if (i==6) {
             continue;
         }
         console.log(i)
     }

