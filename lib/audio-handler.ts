export function initializeAudio() {
  const audioElement = document.getElementById('background-music') as HTMLAudioElement
  if (!audioElement) return

  audioElement.volume = 0.4
  
  const playPromise = audioElement.play()
  
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log('[v0] Audio playing successfully')
      })
      .catch(() => {
        console.log('[v0] Audio autoplay prevented, waiting for user interaction')
        
        const playOnInteraction = () => {
          audioElement.play().catch(err => console.log('[v0] Audio play error:', err))
          document.removeEventListener('click', playOnInteraction)
          document.removeEventListener('touchstart', playOnInteraction)
        }
        
        document.addEventListener('click', playOnInteraction, { once: true })
        document.addEventListener('touchstart', playOnInteraction, { once: true })
      })
  }
}

export function setAudioVolume(volume: number) {
  const audioElement = document.getElementById('background-music') as HTMLAudioElement
  if (audioElement) {
    audioElement.volume = Math.max(0, Math.min(1, volume))
  }
}
