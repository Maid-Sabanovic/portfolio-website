import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public typingText: string = ''; // Add this property to hold the typing text

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.runTypingEffect();
  }

  private runTypingEffect() {
    const text = 'I am Max Mustermann.';
    const typingDelay = 100;
    this.typeText(text, typingDelay);
  }

  private typeText(text: string, delay: number) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        this.typingText += text.charAt(i);
      }, delay * i);
    }
  }
}
