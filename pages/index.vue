<template>
  <div>
    <NavBar/>
    <div class="bg-half">
      <HomeBody/>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/Footer'
import HomeBody from '../components/HomeBody'
export default {
  components: { 
    NavBar ,
    FooterComponent,
    HomeBody, 
  },
  name: 'IndexPage'
}
</script>
