document.getElementById('btn-add-money')
        .addEventListener('click', function(event){
                event.preventDefault();
                console.log('addded the event handler');
                const addMoney = document.getElementById('Input-Add-Money').value ;
                console.log(addMoney);

                const balance = document.getElementById('account-balance').innerText;
                console.log(balance);
                const balanceNumber = parseFloat(balance);
                const addmoneyTk =document.getElementById(addMoney);

                newbalance = balanceNumber - addmoneyTk;

                document.getElementById('account-balance').innerText = newbalance;
});