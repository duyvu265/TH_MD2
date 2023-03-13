import {NY} from "./QLY_NY";

let input = require('readline-sync');
import {Ny_Manager} from "./QLY_NYManager";

let listny = new Ny_Manager();



function showallMenu() {
    let choise = -1;
    do {
        console.log(
            `-------MENU -------
          
          1.Hien thi danh sach 
          2.Tim kiem nguoi yeu
          3.Them 1 nguoi yeu moi
          4.Chinh sua thogn tin 
          5.Xoa nguoi yeu khoi danh sach
          0.Thoat khoi chuong trinh
          `);
        choise = +input.question(`Nhap vao lua chon :`);
        switch (choise) {
            case 1:
                showList();
                break;
            case 2:
                find();

                break;
            case 3:
                addNy();
                break;
            case 4:
                edit();

                break;
            case 5:
                deletaNy();

                break;

        }

    } while (choise != 0)

}

function showList() {
     console.table(listny.showNy())

}

function find() {
    let nameNy = input.question(`Nhap vao ten nguoi yeu :`);
    listny.search(nameNy);

}

function addNy() {
    let codeny = listny.count;
    let nameNy = input.question(`Nhap vao ten nguoi yeu :`);
    console.log(
        `-------MENU ZODIAC-------
          
         1.Cung Bạch Dương (21/3-20/4)
         2.Cung Kim Ngưu (21/4-20/5)
         3.Cung Song Tử (21/5-21/6)
         4.Cung Sư Tử (23/7-22/8)
         5.Cung Cự Giải (22/6-22/7)
         6.Cung Xử Nữ (23/8-22/9)
         7.Cung Thiên Bình (23/9 - 23/10)
         8.Cung Bọ Cạp (24/10 - 22/11)
         9.Cung Nhân Mã (23/11-21/12)
         10.Cung Ma Kết (22/12 - 19/01)
         11.Cung Bảo Bình (20/1-18/2)
         12.Cung Song Ngư 19/2-20/3)
          `);
    let choiceZodiac = +input.question("nhap vao so: ")
    let zodiacNy = choiceZodiacc(choiceZodiac);
    let home_townNy = input.question(`Nhap vao que nguoi yeu :`);
    let year_of_Ny = +input.question(`Nhap vao nam sinh cua nguoi yeu :`);
    let hobbyNy = input.question(`Nhap vao so thich nguoi yeu :`);
    let newNy = new NY(codeny, nameNy, zodiacNy, home_townNy, year_of_Ny, hobbyNy);
    listny.addNy(newNy);
    console.log("them thanh cong")


}

function choiceZodiacc(choice:number): string {
    let arrZodiac = ['Cung Bạch Dương (21/3-20/4)',
        'Cung Kim Ngưu (21/4-20/5)',
        'Cung Song Tử (21/5-21/6)',
        'Cung Sư Tử (23/7-22/8)',
        'Cung Cự Giải (22/6-22/7)',
        'Cung Xử Nữ (23/8-22/9)',
        'Cung Thiên Bình (23/9 - 23/10)',
        ' Cung Bọ Cạp (24/10 - 22/11)',
        ' Cung Nhân Mã (23/11-21/12)',
        'Cung Ma Kết (22/12 - 19/01)',
        'Cung Bảo Bình (20/1-18/2)',
        'Cung Song Ngư 19/2-20/3)']
    return arrZodiac[choice-1]
}

function edit() {
    let codeny = input.question(`Nhap vao ma cua nguoi yeu :`);
    let editIndext = listny.findByCode(codeny);
    if (editIndext != -1) {
        let name = input.question(`Nhap vao ten nguoi yeu :`);
        let choiceZodiac = +input.question("Enter choice of zodiac: ")
        let zodiacNy = choiceZodiacc(choiceZodiac);
        let home_town = input.question(`Nhap vao que cua nguoi yeu :`);
        let yaer_of_birth = +input.question(`Nhap vao nam sinh cua nguoi yeu :`);
        let hobby = input.question(`Nhap vao so thich cua nguoi yeu :`);
        // listny.list[editIndext].name = name;
        // listny.list[editIndext].zodiac = zodiacNy
        // listny.list[editIndext].home_town = home_town
        // listny.list[editIndext].year_of_birth = yaer_of_birth
        // listny.list[editIndext].hobby = hobby
        listny.editNy(editIndext,name,zodiacNy,codeny,home_town,yaer_of_birth,hobby)

    }
}

function deletaNy() {
    let deleteName = input.question(`Nhap vao ten can xoa`)
    let deleteIndext = listny.findNy(deleteName);
    if (deleteName != -1) {
        listny.list.splice(deleteIndext, 1);
        console.log("xoa thanh cong");
    } else console.log("xoa khong thanh cong")


}
showallMenu();
