var BankView = function(bank){
  this.bank = bank;
}


BankView.prototype = {

  // renderTotal: function(id){
  //   document.getElementById(id).innerText = "Total: £" + this.bank.totalCash();
  //     localStorage.setItem('myAccounts', JSON.stringify(this.bank));
  // },

  renderTotalsByType: function(id, type){
    document.getElementById(id).innerText = `Total ${type}: £` + this.bank.totalCash(type);
      localStorage.setItem('myAccounts', JSON.stringify(this.bank));
  },

  populateAccountList: function(id, accountsByType){
    for(account of accountsByType){
      var item = document.createElement('li');
        item.innerText = account.owner + ": £" + account.amount;
      document.getElementById(id).appendChild(item);
        localStorage.setItem('myAccounts', JSON.stringify(this.bank));
    }
  },

  addInterestButton: function(interest){
    var button = document.getElementById('button-place');
    button.onlick = function(){

      this.bank.chargeInterest(interest);
        localStorage.setItem('myAccounts', JSON.stringify(this.bank));
    }
  }

}



module.exports = BankView;
