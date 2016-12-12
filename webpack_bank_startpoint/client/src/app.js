var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');
var BankView = require('./views/bank_views.js')

window.onload = function() {
  console.log('loaded');
  var bank = new Bank();
  for(accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }
  console.log("we created a new bank", bank);

  var bankView = new BankView(bank);

  bankView.addInterestButton(10);

  bankView.renderTotal("total");
  bankView.renderTotalsByType("business-total", "business");
  bankView.renderTotalsByType("personal-total", "personal");


  bankView.populateAccountList("business-accounts", bank.filteredAccounts('business'));
  bankView.populateAccountList("personal-accounts", bank.filteredAccounts('personal'));

  

};
