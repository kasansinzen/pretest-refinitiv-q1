import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pretest-refinitiv-q1';

  firstInput: number | string = "";
  secondInput: "isPrime" | "isFibonacci" = "isPrime";
  lastInput: boolean;

  handleKeyFirstInput() {
    const dataNumber = parseInt(<string>this.firstInput);
    const decimalInput: string = this.firstInput.toString().split(".")[1];
    
    if(isNaN(dataNumber)) this.firstInput = 1;
    if(parseInt(decimalInput) > 0) this.firstInput = Math.round(dataNumber);
    this.handleChangeSecondInput();
  }

  handleChangeSecondInput() {
    // if(isNaN(this.firstInput)) return undefined;
    const dataNum = parseInt(<string>this.firstInput);
    switch(this.secondInput) {
      case "isPrime":
        const isPrime = () => {
          for(let i = 2; i < dataNum; i++) if(dataNum % i === 0) return false;
          return dataNum > 1;
        }
        this.lastInput = isPrime();
        break;
      
      case "isFibonacci":
        let n1 = 0, n2 = 1, nextTerm, items = [];
        for(let i = 1; i <= (dataNum + 1); i++) {
          items = [...items, n1];
          nextTerm = n1 + n2;
          n1 = n2;
          n2 = nextTerm;
        }
        this.lastInput = items.includes(dataNum);
        break;
    }
  }
}
