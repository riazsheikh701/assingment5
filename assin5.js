const donateMoneyButton = document.getElementById('donate-money-button');
const donateMoneyButton2 = document.getElementById('donate-money-button-2');
const donateMoneyButton3 = document.getElementById('donate-money-button-3');

        function openModal(){
                const modalButton = document.getElementById('my_modal_5');
                modalButton.showModal();
        }
        let mainBalance = parseFloat (document.getElementById('main-balance').innerText);
        console.log(mainBalance);

        donateMoneyButton.addEventListener('click' , function(){

        let receivedMoney = parseFloat (document.getElementById('Received-Money').innerText);
        console.log(receivedMoney);

        

        let donateMoney = parseFloat (document.getElementById('Donate-Money').value);
        console.log(donateMoney);

        if( 0<donateMoney ){
                mainBalance = mainBalance - donateMoney;
        document.getElementById('main-balance').innerText = mainBalance;

        receivedMoney = receivedMoney + donateMoney;
        document.getElementById('Received-Money').innerText =receivedMoney;

        openModal();
        }
        else{
                window.alert( 'Not allowed');
        }
        
})

donateMoneyButton2.addEventListener('click' , function(){

        let receivedMoney2 = parseFloat (document.getElementById('Received-Money-2').innerText);
        console.log(receivedMoney2);

        

        let donateMoney2 = parseFloat (document.getElementById('Donate-Money-2').value);
        console.log(donateMoney2);

        if( 0<donateMoney2 ){
                mainBalance = mainBalance - donateMoney2;
        document.getElementById('main-balance').innerText = mainBalance;

        receivedMoney2 = receivedMoney2 + donateMoney2;
        document.getElementById('Received-Money-2').innerText =receivedMoney2;

        openModal();
        }
        else{
                window.alert( 'Not allowed');
        }
        
})

donateMoneyButton3.addEventListener('click' , function(){

        let receivedMoney3 = parseFloat (document.getElementById('Received-Money-3').innerText);
        console.log(receivedMoney3);

        

        let donateMoney3 = parseFloat (document.getElementById('Donate-Money-3').value);
        console.log(donateMoney3);

        if( 0<donateMoney3 ){
                mainBalance = mainBalance - donateMoney3;
        document.getElementById('main-balance').innerText = mainBalance;

        receivedMoney3 = receivedMoney3 + donateMoney3;
        document.getElementById('Received-Money-3').innerText =receivedMoney3;

        openModal();
        }
        else{
                window.alert( 'Not allowed');
        }
        
});

const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById('donation-tab');
    historyTab.addEventListener('click' , function () {
        
        historyTab.classList.add(
            "bg-[#B4F461]",
            'btn-md','rounded-xl','m-1','font-bold')
        donationTab.classList.remove(
            'bg-[#B4F461]');
});