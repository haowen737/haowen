<template>
  <div class="page">
    <div id="container"></div>
    <div class="control-wrap">
      <div class="control">
        <div class="latlng-inputer">
          <span>lat:</span><input v-model="lat">
          <span>lng:</span><input v-model="lng">
          <a href="javascript:;" @click="addMarker">加一个覆盖物</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lat: null,
        lng: null
      }
    },
    created () {
      this.loadScript()
    },
    computed: {
      qmap: function () {
        return window.qq.maps
      }
    },
    methods: {
      loadScript () {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'http://map.qq.com/api/js?v=2.exp&callback=init'
        document.body.appendChild(script)
        window.init = () => { this.initMap() }
      },
      initMap () {
        let myOptions = {
          zoom: 11,
          mapTypeId: this.qmap.MapTypeId.ROADMAP
        }
        this.map = new this.qmap.Map(document.getElementById('container'), myOptions)
        this.getIplocation()
      },
      getIplocation () {
        this.citylocation = new this.qmap.CityService({
          map: this.map,
          complete: (results) => {
            this.map.setCenter(results.detail.latLng)
          }
        })
        this.citylocation.searchLocalCity()
      },
      addMarker () {
        let lat = this.lat
        let lng = this.lng
        let latlng = new this.qmap.LatLng(lat, lng)
        let marker = new this.qmap.Marker({})
        marker.setPosition(latlng)
        marker.setMap(this.map)
        this.map.setCenter(latlng)
        this.clearInput()
      },
      clearInput () {
        this.lat = null
        this.lng = null
      }
    }
  }
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}
.control-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 400px;
}
.control {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 5px 5px 2px rgba(0,0,0,0.2);
}
</style>