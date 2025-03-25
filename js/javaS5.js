document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    
    const container = document.createElement("div");
    container.className = "container";
    
    const totalLabel = document.createElement("h2");
    totalLabel.textContent = "Total";
    
    const totalCount = document.createElement("div");
    totalCount.textContent = "0";
    totalCount.className = "total-count";
    
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "↻";
    resetBtn.className = "reset-btn";
    resetBtn.onclick = () => {
        homensCount.textContent = mulheresCount.textContent = totalCount.textContent = "0";
    };
    
    const backLink = document.createElement("a");
    backLink.href = "../index.html";
    
    const backButton = document.createElement("button");
    backButton.textContent = "<-";
    backButton.className = "back-btn";
    
    backLink.appendChild(backButton);
    const beep = new Audio('../style/bolha.mp3');
    
    function somBtn(){
        beep.play();
    }
    const counterContainer = document.createElement("div");
    counterContainer.className = "counter";
    
    function createCounter(label) {
        const group = document.createElement("div");
        group.className = "group";
        
        const image = document.createElement("div");
        image.textContent = label === "Homens" ? "👨" : "👩";
        image.className = "icon";
        
        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.className = "btn";
        
        const subButton = document.createElement("button");
        subButton.textContent = "-";
        subButton.className = "btn";
        
        const countLabel = document.createElement("div");
        countLabel.textContent = "0";
        countLabel.className = "count";
        
        addButton.onclick = () => {
            countLabel.textContent = parseInt(countLabel.textContent) + 1;
            totalCount.textContent = parseInt(totalCount.textContent) + 1;
            somBtn()
        };
        
        subButton.onclick = () => {
            if (parseInt(countLabel.textContent) > 0) {
                countLabel.textContent = parseInt(countLabel.textContent) - 1;
                totalCount.textContent = parseInt(totalCount.textContent) - 1;
                somBtn()
            }
        };
        
        group.appendChild(image);
        group.appendChild(addButton);
        group.appendChild(subButton);
        group.appendChild(countLabel);
        group.appendChild(document.createTextNode(label));
        return { group, countLabel };
    }
    
    const { group: homensGroup, countLabel: homensCount } = createCounter("Homens");
    const { group: mulheresGroup, countLabel: mulheresCount } = createCounter("Mulheres");
    
    counterContainer.appendChild(homensGroup);
    counterContainer.appendChild(mulheresGroup);
    
    container.appendChild(totalLabel);
    container.appendChild(totalCount);
    container.appendChild(resetBtn);
    container.appendChild(counterContainer);
    container.appendChild(backLink);
    
    main.appendChild(container);
});
