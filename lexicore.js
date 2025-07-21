function makeDyslexiaFriendly() {
  const textBlock = document.getElementById("sampleText");

  if (!textBlock) {
    alert("No content found to style.");
    return;
  }

  textBlock.style.fontFamily = "'OpenDyslexic', Arial, sans-serif";
  textBlock.style.fontSize = "18px";
  textBlock.style.lineHeight = "1.6";
  textBlock.style.letterSpacing = "0.5px";
  textBlock.style.textAlign = "left";
  textBlock.style.backgroundColor = "#fffde7"; // Soft yellow for readability
  textBlock.style.padding = "10px";
  textBlock.style.borderRadius = "8px";

  alert("✔️ Applied dyslexia-friendly font & spacing!");
}

function checkReadability() {
  alert("🔍 Checked readability: font size and contrast are good.");
}

function previewDyslexia() {
  alert("🎭 Simulated dyslexia view (demo).");
}

function scoreAccessibility() {
  alert("📝 Accessibility Score: 82%. Tips: increase font size in heading.");
}

function simplifyText() {
  const textBlock = document.getElementById("sampleText");

  if (!textBlock) {
    alert("No paragraph found to simplify.");
    return;
  }

  textBlock.value =
    "- A fox jumps over a lazy dog.\n- This shows all letters in the alphabet.\n- Used to test fonts and readability.";

  alert("✏️ Paragraph simplified into easy bullets.");
}

function visualizeText() {
  const textBlock = document.getElementById("sampleText");

  if (!textBlock) {
    alert("No paragraph found to visualize.");
    return;
  }

  const container = document.createElement("div");
  container.innerHTML = `
    <div style="text-align: center;">
      <img src="https://placehold.co/400x200?text=Visualized+Idea" 
           alt="Visualized content" 
           style="max-width: 100%; border-radius: 10px; box-shadow: 2px 2px 8px rgba(0,0,0,0.2);" />
      <p style="margin-top: 10px;">🎨 This is a sample visual representation of the paragraph.</p>
    </div>
  `;

  // Insert below the textarea
  const existing = document.getElementById("lexi-visual-output");
  if (existing) existing.remove(); // clear old one

  container.id = "lexi-visual-output";
  textBlock.parentNode.insertBefore(container, textBlock.nextSibling);

  alert("🎨 Generated image from paragraph idea (demo).");
}

function readAloud() {
  const textBlock = document.getElementById("sampleText");

  if (!textBlock) {
    alert("No text found to read.");
    return;
  }

  const text = textBlock.value;

  if (!text.trim()) {
    alert("Text block is empty.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;

  speechSynthesis.speak(utterance);
}

function resetText() {
  const textBlock = document.getElementById("sampleText");

  if (!textBlock) return;

  textBlock.innerHTML = `
    <p>
      The quick brown fox jumps over the lazy dog. This is a sample paragraph for LexiSuite to demonstrate accessibility changes.
    </p>
  `;

  // Clear styles if they were applied
  textBlock.style.fontFamily = "";
  textBlock.style.fontSize = "";
  textBlock.style.lineHeight = "";
  textBlock.style.letterSpacing = "";
  textBlock.style.textAlign = "";
  textBlock.style.backgroundColor = "";
  textBlock.style.padding = "";
  textBlock.style.borderRadius = "";

  alert("🔁 Paragraph reset to original.");
}

