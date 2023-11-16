var nums = document.querySelectorAll("li");
var output = document.querySelector("p");
for (var elem in nums) {
    nums[elem].addEventListener("click", function calc() {
        if (this.textContent == "=")
            output.textContent = eval(output.textContent);
        else if (this.textContent == "C")
            output.textContent = "";
        else if (this.textContent == "<=")
            output.textContent = output.textContent.replace(/.$/, '');
        else
            output.textContent += this.textContent;
    });
}
//# sourceMappingURL=script.js.map