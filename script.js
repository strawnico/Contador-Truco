let count1 = 0;
let count2 = 0;

function somar(event) {
    let id = event.target.id;
    if (id == "mais1") {
        if (count1 < 12) {
            count1++;
            document.getElementById("nosPts").innerHTML = count1;
        }
    } else {
        if (count2 < 12) {
            count2++;
            document.getElementById("elesPts").innerHTML = count2;
        }
    }
    if (count1 == 12 || count2 == 12) {
        setTimeout(() => {
            return ganhador();
        }, 200);
    }
}

function subtrair(event) {

    let id = event.target.id;
    console.log(id)

    if (id == "menos1") {
        if (count1 > 0) {
            count1--;
            document.getElementById("nosPts").innerHTML = count1;
        }
    } else {
        if (count2 > 0) {
            count2--;
            document.getElementById("elesPts").innerHTML = count2;
        }
    }
}

function ganhador() {

    if (count1 == 12) {
        alert('O grupo "Nós" ganhou!')
        count1 = 0;
        document.getElementById("nosPts").innerHTML = count1;

        count2 = 0;
        document.getElementById("elesPts").innerHTML = count2;
    } else {
        alert('O grupo "Eles" ganhou!')
        count1 = 0;
        document.getElementById("nosPts").innerHTML = count1;

        count2 = 0;
        document.getElementById("elesPts").innerHTML = count2;
    }
}