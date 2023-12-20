export default class View {
    constructor (){
        this.app = document.querySelector('.root');
        this.elements = {};
        this.elements.root = View.createAppRoot();
        this.elements.passwordInput = this.elements.root.querySelector('input[type="text"]');
        this.elements.generateBtn = this.elements.root.querySelector('.generate');
        this.elements.strength = this.elements.root.querySelector('.strength');
        this.elements.slider = this.elements.root.querySelector('input[type="range"]');
        this.elements.passwordLength = this.elements.root.querySelector('.numberValue');
        this.elements.uppercaseCheckbox = this.elements.root.getElementById('uppercase');
        this.elements.lowercaseCheckbox = this.elements.root.getElementById('lowercase');
        this.elements.symbolsCheckbox = this.elements.root.getElementById('symbols');
        this.elements.numbersCheckbox = this.elements.root.getElementById('numbers');
        this.elements.passwordHistory = this.elements.root.querySelector('.history');
        this.elements.clearBtn = this.elements.root.querySelector(".clearHistory");
        this.elements.bigCopyBtn = this.elements.root.querySelector('.copyPassword');
    }

    static createAppRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
    <section>
        <h1 class="w-[24rem] mx-auto md:mx-0 mt-4 text-[#F8EF00] text-[2.5rem] font-[700] leading-[2.5rem] uppercase p-4">Jester Generator</h1>
    <div class="p-4">
        <div class="w-11/12 max-w-[36rem] p-[1.25rem] flex items-center gap-[.75rem] mt-4 border-2 border-[#00F0FF] bg-[rgba(0,240,255,0.10)]">
            <input type="text" class="w-full  bg-transparent text-[#00F0FF] outline-none" value="Click icon to Generate >">

            <div class="flex flex-col gap-[2px] strength">
            </div>
            <button class="generate w-[2rem] h-[2rem]">
                <img src="./images/retest.svg" alt="retest">
            </button>

        </div>
        <button type="button" class="bg-[#F8EF00] uppercase w-11/12 max-w-[21rem] h-[4rem] mt-4 text-[1rem] font-[600] leading-[1.5rem] flex items-center justify-around hover:bg-black hover:text-[#F8EF00] border-2 border-transparent hover:border-[#F8EF00] duration-[.5s] copyPassword"><span>copy Password_</span>
            <img src="./images/arrow.svg" alt="arrow">
        </button>
    </div>

  <div class="mt-4">
    <p class="text-[#F8EF00] text-[1.2rem]">Set Password Length</p>
    <div class="mt-2 flex items-center  gap-2">
        <input type="range" id="range" class="appearance-none bg-black border-2 border-[#F8EF00] cursor-pointer w-[15rem] h-2 range" min="10" max="20" step="1">
        <span class="numberValue text-black text-[1.7rem] leading-[1.7rem] bg-[#F8EF00] block p-[8px] font-semi-bold rounded-[.5rem]"></span>
    </div>
  </div>

  <div class="mt-[4rem] ml-2 flex items-center justify-start flex-wrap gap-[1rem]  max-w-[25rem]">
    <div class="flex gap-[.5rem] text-white">
        <input type="checkbox" id="uppercase" class="appearance-none flex items-center relative before:absolute before:content-[''] before:w-[1rem] before:h-[1rem] before:border-2 before:border-[#F8EF00] checked:before:bg-[#F8EF00]">
        <label for="uppercase" class="ml-4 cursor-pointer">Uppercase letters</label>
   </div>
    <div class="flex gap-[.5rem] text-white">
        <input type="checkbox" id="lowercase" class="appearance-none flex items-center relative before:absolute before:content-[''] before:w-[1rem] before:h-[1rem] before:border-2 before:border-[#F8EF00] checked:before:bg-[#F8EF00]">
        <label for="lowercase" class="ml-4 cursor-pointer">Lowercase letters</label>
   </div>
    <div class="flex gap-[.5rem] text-white">
        <input type="checkbox" id="symbols" class="appearance-none flex items-center relative before:absolute before:content-[''] before:w-[1rem] before:h-[1rem] before:bg-black before:border-2 before:border-[#F8EF00] checked:before:bg-[#F8EF00]">
        <label for="symbols" class="ml-4 cursor-pointer">Symbols</label>
   </div>
    <div class="flex gap-[.5rem] text-white">
        <input type="checkbox" id="numbers" class="appearance-none flex items-center relative before:absolute before:content-[''] before:w-[1rem] before:h-[1rem] before:bg-black before:border-2 before:border-[#F8EF00] checked:before:bg-[#F8EF00]">
        <label for="numbers" class="ml-4 cursor-pointer">Numbers</label>
   </div>

  </div>
</section>
<section class="mt-[4rem] text-white p-4 md:w-[24rem]">
<h1 class="text-[1.25rem] font-[600] leading-[1.5rem] pb-4 uppercase ">Password History</h1>

<p class="text-slate-500 font-[600] defaultMessage">No Password has been generated yet!</p>
<div class="passwordBox hidden">
    <div class="flex flex-col gap-[.5rem] history"></div>

    <button class="mt-[2rem] text-yellow-500 mx-auto block font-[600] text-[1rem] leading-[1.5rem] duration-[.5s] hover:bg-yellow-500 hover:text-black rounded-[.5rem] p-2 w-full mb-4 clearHistory">
        Clear history
    </button>
</div>
</section>
        `);
    }

    static historyBlockRoot(){
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(

            ` <div class="w-11/12 flex justify-between mx-auto historyBlock">
            <div class="flex flex-col">
                <input class="text-[1rem] font-[400] leading-[1.5rem] text-[#FAFAFA] bg-transparent text-white outline-none blockPassword"></input>
                <span class="text-[.75rem] text-[#BBB] font-[400] leading-[1rem] uppercase blockId"></span>
            </div>
    
            <button class="historyCopy flex">
                <img src="./images/copy.svg" alt="copy">
                <p class="hidden absolute translate-x-[2rem]">Copied</p>
            </button>
        </div> `
        )
    }

    static strengthRoot(){
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
        <div class="w-[20px] h-[3px] bg-[#00F0FF] testOne"></div>
        `).children[0];
    }

    copyPassword = (copyText) => {

        copyText.select();

        document.execCommand('copy');
    }
    
    handleCopyPassword = () => {
        this.elements.bigCopyBtn.addEventListener("click", (event)=> {
            let el = event.currentTarget.querySelector('span');

            event.currentTarget.querySelector('span').textContent = "COPIED";

            this.copyPassword(this.elements.passwordInput);

            setTimeout(()=>{
            el.textContent = "copy Password_";
             },4000)
        })
    }

    bindClearHistoryFunction = (handler) => {

        this.elements.clearBtn.addEventListener('click', () => {
            while(this.elements.passwordHistory.firstChild){
                this.elements.passwordHistory.firstChild.remove();
            }
            handler();
        })

    }

    observeMutation = () =>{
        const targetNode = this.elements.passwordHistory;

        const parent = document.querySelector('.passwordBox');

        const message = document.querySelector('.defaultMessage');


        const config = {
            childList:true
        };
        function mutated(mutationList){

            console.log(parent);
            for(let mutation of mutationList){
                if (mutation.type=='childList') {
                    if (targetNode.firstChild && parent.classList.contains('hidden')){
                        parent.classList.remove('hidden');

                        message.classList.add('hidden');
                    }else if(!targetNode.firstChild){
                        parent.classList.add('hidden');

                        message.classList.remove('hidden');
                    }
                }
            }
        }

        const observer = new MutationObserver(mutated);

        observer.observe(targetNode, config);

    }

    displayPasswordHistory = (data) => {

        let box = this.elements.passwordHistory.querySelectorAll(".historyBlock");

        if(!data){
            return;
        }

        //clear the current history.
        if(box.length > 0){
            box.forEach(box => {
                box.remove();
            });
        }

        //display the new data 
        data.forEach(item => {
            let boxRoot = View.historyBlockRoot();

            boxRoot.querySelector('.blockPassword').value = item[Object.keys(item)[0]];

            boxRoot.querySelector(".blockId").textContent = Object.keys(item)[0];

            console.log(boxRoot.querySelector(".historyCopy"));

            boxRoot.querySelector(".historyCopy").addEventListener("click", (event)=>{

                let pass = event.currentTarget.parentElement.querySelector('.blockPassword');
                let notification = event.currentTarget.querySelector('p');

                notification.classList.remove('hidden');

                this.copyPassword(pass);

                 setTimeout(()=>{
                    notification.classList.add('hidden');
                 },2000);

            });

            this.elements.passwordHistory.appendChild(boxRoot);

        });

    }

    determineStrength = (settings) => {

        settings = Object.keys(settings).map(key => settings[key]);
        
        let strengthNotification = this.elements.strength;

        while(strengthNotification.firstChild){

            strengthNotification.removeChild(strengthNotification.firstChild);
        }

        settings.forEach(setting => {
            let bar  = View.strengthRoot();
            bar.classList.add(setting ? 'bg-[#00F0FF]' : 'bg-[#FF003C]');

            console.log("the bar that has been added is there");

            strengthNotification.appendChild(bar);
        });




    }

    updatePasswordLength(){
        this.elements.passwordLength.textContent = this.elements.slider.value;
        this.elements.slider.addEventListener('input', (event)=>{
            this.elements.passwordLength.textContent = event.target.value;
        })
    }
    
    createApp(){
        this.app.appendChild(this.elements.root);
    }

    bindGeneratePasswordFunction = (handler)=> {

        this.elements.generateBtn.addEventListener("click", (event)=>{

            const button = event.currentTarget;
            let settings = {
                uppercase : this.elements.uppercaseCheckbox.checked,
                lowercase: this.elements.lowercaseCheckbox.checked,
                symbols: this.elements.symbolsCheckbox.checked,
                number:this.elements.numbersCheckbox.checked
            }

            let passwordLength = parseInt(this.elements.slider.value);
            button.classList.add('animate-spin-once');
            
            setTimeout((event)=>{
                this.elements.passwordInput.value = handler(passwordLength, settings);

                this.determineStrength(settings);

                button.classList.remove('animate-spin-once');
            },700);

        });
    }

}
