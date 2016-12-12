var BankView = function(bank){
  this.bank = bank;
}


BankView.prototype = {

  renderTotal: function(id){
    document.getElementById(id).innerText = "Total: £" + this.bank.totalCash();
  },

  renderTotalsByType: function(id, type){
    document.getElementById(id).innerText = `Total ${type}: £` + this.bank.totalCash(type);

  },

  populateAccountList: function(id, accountsByType){
    for(account of accountsByType){
      var item = document.createElement('li');
        item.innerText = account.owner + ": £" + account.amount;
      document.getElementById(id).appendChild(item);
    }
  }

}



module.exports = BankView;
