import { Component, Input } from '@angular/core';

@Component({
  selector: 'set',
  templateUrl: 'set.component.html'
})
export class SetComponent {
    public repCounter: number = 0;
    @Input() repGoal: number;
    private pressCounter: number = 0;
    private pressCounterId: number;

    constructor() {}

    public addRep(){
        this.repCounter += 1;
    }

    public clearRep(){
        this.repCounter = 0;
    }

    public resetCounterStart() {
        this.log("Press Start");
        this.pressCounter = 50;
        this.pressCounterId = setInterval(()=>{
            this.pressCounter += 50;
        }, 50);
    }

    public resetCounterEnd() {
        this.log("Press Ended");
        this.log(`Press Counter: ${this.pressCounter}`);
        if (this.pressCounter >= 1000) {
            this.clearRep();
        }
        this.pressCounter = 0;
        clearInterval(this.pressCounterId);
    }

    public log(message: string) {
        console.log(message);
    }
}