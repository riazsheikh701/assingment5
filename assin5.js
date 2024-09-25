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

const historyTab = document.getElementById("History-Tab");
const donationTab = document.getElementById('Donation-Tab');
    historyTab.addEventListener('click' , function () {
        
        historyTab.classList.add( 'bg-lime-600',
        'btn-md', 'rounded-xl',  'm-2','font-bold'

        );
        donationTab.classList.remove(
                'bg-lime-600',
        );

        document.getElementById('main-tab').classList.add('hidden');
        document.getElementById('History-Bar').classList.remove('hidden');
});

const historyItem = document.createElement("div");
historyItem.className = 
"bg-blue p-3 rounded";

historyItem.innerHTML = `
    <p>$${receivedMoney.toFixed(2)} taka is Donated for famine 2024 at Feni, Bangladesh.</p>
    <p>${new Date().toLocaleDateString()}</p>
    <p>$${receivedMoney2.toFixed(2)} taka is Donated for famine 2024 at Noakhali, Bangladesh.</p>
    <p>${new Date().toLocaleDateString()}</p>
    <p>$${receivedMoney3.toFixed(2)} taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.</p>
    <p>${new Date().toLocaleDateString()} ${new Date().toTimeString()}</p>
`;
const historyContainer = document .getElementById('history-list');

historyContainer.appendChild()