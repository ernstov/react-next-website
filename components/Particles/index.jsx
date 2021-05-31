import styles from './particles.module.scss'
import Particles from 'react-particles-js'
import particlesConfig from "./particlesConfig.json"
import particlesLightConfig from "./particlesLightConfig.json"

const ParticlesC = ({ variant }) => {

  return  <div className={`${styles.particles} ${variant ? variant : ""}`}>
    <Particles params={variant == "light" ? particlesLightConfig : particlesConfig}/>
    </div>
}

export default ParticlesC;
