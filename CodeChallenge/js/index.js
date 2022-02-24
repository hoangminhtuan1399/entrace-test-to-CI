const mainBtn = document.querySelector("#main-button");
const inputNumber = document.querySelectorAll("input");
const box = document.querySelector(".box");

for (const item of inputNumber) {
    item.addEventListener("input", function(e){
    if (parseInt(e.target.value)>10 || parseInt(e.target.value)<1) {
        alert("Vui lòng chọn số từ 1 đến 10");
        e.target.value = '';
    }
})
}

mainBtn.addEventListener("click", function(){
    if (
        inputNumber[0].value == "" &&
        inputNumber[1].value == "" &&
        inputNumber[2].value == ""
    ) {
        alert("Vui lòng nhập số của bạn");
    } else {
        let result = Math.floor(Math.random()*10) + 1;
        let find = false;
        for (let i = 0; i < inputNumber.length; i++) {
            const item = inputNumber[i];
            if (parseInt(item.value) === result) {
                find = true;
                break;
            }
        }
        if (find==true) {
            box.innerHTML = `
                <div class="box-header">
                    <h2>Bạn đã trúng thưởng !!!</h2>
                </div>
                <div class="box-content">
                    <h3>Con số may mắn của chương trình: ${result} </h3>
                    <h3>Con số may mắn của bạn: ${inputNumber[0].value} ${inputNumber[1].value} ${inputNumber[2].value}</h3>
                </div>
                <div class="box-button">
                    <button id="box-button" onClick="window.location.reload();">CHƠI LẠI</button>
                </div>`
                box.style.display = "block";
        } else {
            box.innerHTML = `
                <div class="box-header">
                    <h2>Chúc bạn may mắn lần sau!</h2>
                </div>
                <div class="box-content">
                    <h3>Con số may mắn của chương trình: ${result}</h3>
                    <h3>Con số may mắn của bạn: ${inputNumber[0].value} ${inputNumber[1].value} ${inputNumber[2].value}</h3>
                </div>
                <div class="box-button">
                    <button id="box-button" onClick="window.location.reload();">CHƠI LẠI</button>
                </div>
            `
            box.style.display = "block";
        }    
    } 
})

const boxBtn = document.querySelector("#box-button");

