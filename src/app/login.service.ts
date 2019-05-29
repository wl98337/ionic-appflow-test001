import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loginName: string = "";
  islogin: boolean = false;

  returnedFaqListMain = [
    { id: 1, question: "Where is the nearest ATM", answer: "This is just the dummy answer for the above question. Please just skip the content here."},
    { id: 2, question: "How to become the citi gold member", answer: "This is just the dummy answer for the above question. Please just skip the content here."},
    { id: 3, question: "What shall I do if the ATM eat my card", answer: "This is just the dummy answer for the above question. Please just skip the content here."},
    { id: 4, question: "What is the qualification to active the Credit card", answer: "This is just the dummy answer for the above question. Please just skip the content here."},
    { id: 5, question: "Where to find the open/close time for the branches", answer: "This is just the dummy answer for the above question. Please just skip the content here."},
    { id: 6, question: "How much is the cost the open an account", answer: "This is just the dummy answer for the above question. Please just skip the content here."},
    { id: 7, question: "How much the rate to loan", answer: "This is just the dummy answer for the above question. Please just skip the content here."},
    { id: 8, question: "Pay your credit card transactions with Points or Miles", answer: "This is just the dummy answer for the above question. Please just skip the content here. Go to our bank to active a credit card" },
    { id: 9, question: "If my cards are locked, will my recurring bill payments be affected? For example, the auto-debiting of my Citibank Credit Card/ Ready Credit Account for monthly phone bills", answer: "This is just the dummy answer for the above question. Please just skip the content here. Click trade now link, and choose the type of your payment" },
    { id: 10, question: "After successfully activating my card, can I use it immediately", answer: "This is just the dummy answer for the above question. Please just skip the content here. In the login page, click the change password link under the login form" },
    { id: 11, question: "If my card is locked, can I pay outstanding Citibank bills on my Citibank Credit Card/Ready Credit Account?", answer: "This is just the dummy answer for the above question. Please just skip the content here. Citi password has strict rule, please go to our website to check the details" },
    { id: 12, question: "If my Citibank Credit Card or Ready Credit ATM Card is locked, will I still be able to log in to Citibank Online? What online functions can I still access if my card is de-activated?", answer: "This is just the dummy answer for the above question. Please just skip the content here. When you spend the money with our card or by Citi products" },
    { id: 13, question: "Without enabling overseas use on my ATM/debit/credit card, will I be able to perform Overseas Transactions?", answer: "This is just the dummy answer for the above question. Please just skip the content here. To see the pre-request to be a Citi Vip, please go to our website to see the details list" },
    { id: 14, question: "How do enanle/disable overseas use on my ATM/debit/credit card?", answer: "This is just the dummy answer for the above question. Please just skip the content here. In the menu under the investment part." },
    { id: 15, question: "Do I have to re-enable my ATM/debit/credit card for overseas use each time I travel?", answer: "This is just the dummy answer for the above question. Please just skip the content here. In the menu under the investment part." }
  ]

  login(name) {
    this.loginName = name;
    this.islogin = true;
  }

  getFaqsMain(packageName): Observable<any[]> {
    
    let arr = [];
    if (packageName == "") {
      arr = this.returnedFaqListMain;
      return of(arr);
    }
    for (let i = 0; i < this.returnedFaqListMain.length; i++) {

      if (this.returnedFaqListMain[i].question.toLowerCase().indexOf(packageName.toLowerCase()) > -1) {
        let faq = { id:0, question: "", answer: "" };
        let texts = this.returnedFaqListMain[i].question;
        if (packageName) {
          let allVal = this.returnedFaqListMain[i].question.match(new RegExp(packageName, 'ig'));
          if (allVal) {
            for (let j = 0; j < allVal.length; j++) {
              texts = texts.replace(allVal[j], '[*' + j + '*]');
              // console.log(allVal[j],'[*' + j + '*]',texts)
            }
            for (let i = 0; i < allVal.length; i++) {
              texts = texts.replace('[*' + i + '*]', '<span style="font-weight:bold;">' + allVal[i] + '</span>');
            }
          }
        }
        faq.question = texts;
        faq.id = this.returnedFaqListMain[i].id;
        faq.answer = this.returnedFaqListMain[i].answer;
        arr.push(faq);
      }
    }

    return of(arr);
  }
}
