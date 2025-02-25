import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Brainwave-Controlled UI Dashboard</h1>
    <div class="dashboard">
      <brainwave-control></brainwave-control>
      <wasm-brainwave-processing></wasm-brainwave-processing>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }