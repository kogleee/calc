const nums: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");

let output: HTMLElement = document.querySelector("p")

for (let elem in nums){
    nums[elem].addEventListener("click", function calc(){
        if(this.textContent == "=") output.textContent = eval(output.textContent)
        else if (this.textContent == "C") output.textContent = ""
        else if (this.textContent == "<=") output.textContent = output.textContent.replace(/.$/, '')
        else  output.textContent += this.textContent
    })
}









