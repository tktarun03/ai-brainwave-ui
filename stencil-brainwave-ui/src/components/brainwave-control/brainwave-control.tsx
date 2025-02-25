import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'brainwave-control',
  styleUrl: 'brainwave-control.css',
  shadow: true
})
export class BrainwaveControl {
  @State() brainwaveState: string = "Reading brain activity...";

  processBrainwave() {
    const states = [
      "High Focus Mode 🔥 - Enhancing productivity",
      "Relaxed State 🌊 - Adjusting UI for comfort",
      "Deep Thought 🤔 - Enabling silent mode",
      "Sleep Mode 💤 - Dimming screen & reducing notifications",
      "Alert State ⚡ - Activating high contrast UI"
    ];
    this.brainwaveState = states[Math.floor(Math.random() * states.length)];
  }

  render() {
    return (
      <div class="brainwave-box">
        <h2>AI Brainwave-Controlled UI</h2>
        <button onClick={() => this.processBrainwave()}>Analyze Brainwave</button>
        <p>{this.brainwaveState}</p>
      </div>
    );
  }
}
