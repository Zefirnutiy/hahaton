import React from 'react'

export default function BgAnimated () {
  return (
    <video className="bg_anim" loop="loop" autoPlay="autoplay" muted="muted">
        <source src="src\Media\Image\Aura.mp4" type='video/mp4; codecs="avc1.42E030, mp4a.40.2"'></source>
    </video>
  )
}
