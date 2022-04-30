export default function() {
  const buttonPressAudio = new Audio("/sounds/audios_button-press.wav")
  const kitchenTimer = new Audio("/sounds/audios_kichen-timer.mp3")
  const bgAudio = new Audio("/sounds/audios_bg-audio.mp3")

  bgAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudio
  }
}