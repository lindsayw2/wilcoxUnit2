
import { MusicTools } from './MusicTools.js';

// midi to freq
document.getElementById('midiToFreq').addEventListener('click', () => {
  const midiInput = parseFloat(document.getElementById('midiInput').value);
  if (!isNaN(midiInput)) {
    const freq = MusicTools.midiPitchToFrequency(midiInput).toFixed(2);
    document.getElementById('freqResult').textContent = freq;
  }
});

// freq to midi
document.getElementById('freqToMidi').addEventListener('click', () => {
  const freqInput = parseFloat(document.getElementById('freqInput').value);
  if (!isNaN(freqInput) && freqInput > 0) {
    const midi = MusicTools.frequencyToMidiPitch(freqInput).toFixed(2);
    document.getElementById('midiResult').textContent = midi;
  }
});

// dBFS to linear amp
document.getElementById('dbfsToLinear').addEventListener('click', () => {
  const dbfsInput = parseFloat(document.getElementById('dbfsInput').value);
  if (!isNaN(dbfsInput)) {
    const linear = MusicTools.dbfsToLinearAmplitude(dbfsInput).toFixed(5);
    document.getElementById('linearResult').textContent = linear;
  }
});

// linear amp dbfs
document.getElementById('linearToDbfs').addEventListener('click', () => {
  const linearInput = parseFloat(document.getElementById('linearInput').value);
  if (!isNaN(linearInput) && linearInput > 0) {
    const dbfs = MusicTools.linearAmplitudeTodBFS(linearInput).toFixed(2);
    document.getElementById('dbfsResult').textContent = dbfs;
  }
});
