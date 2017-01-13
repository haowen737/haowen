<template lang="html">
  <transition name="fade">
    <div id="particlesJs" v-show="showNav">
      <logo></logo>
    </div>
  </transition>
</template>

<script>
import Particle from 'particles.js'
import Logo from './logo'
export default {
  data  () {
    return {
      showNav: true
    }
  },
  computed: {},
  mounted  () {
    window.particlesJS('particlesJs', {
      'particles': {
        'number': {
          'value': 50,
          'density': {
            'enable': true,
            'value_area': 1000
          }
        },
        'color': {
          'value': '#3d3d3d'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
          'image': {
            'src': 'img/github.svg',
            'width': 100,
            'height': 100
          }
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 2,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#3d3d3d',
          'opacity': 0.4,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 2,
          'direction': 'none',
          'random': true,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'grab'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 140,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true
    })
  },
  methods: {},
  components: {
    Particle, Logo
  }
}
</script>

<style lang="css" scoped>
#particlesJs {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /*background-image: url('');*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
}
.logo {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  text-align: center;
}
</style>
