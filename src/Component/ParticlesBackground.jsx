import Particles from 'react-tsparticles'
import particleConfig from './config/ParticleConfig'

function ParticlesBackground() {
  return (
    <div>
      <Particles params={particleConfig}/>
    </div>
  )
}

export default ParticlesBackground
