<template>
  <div class="carousel-wrapper" >
   <div class="carousel-title-wrapper">
     <h2 class="carousel-title">Want to Build your dreams? <span>We got you covered!</span></h2>
   </div>
   <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80" />
      <q-carousel-slide :name="2" img-src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <q-carousel-slide :name="3" img-src="https://images.unsplash.com/photo-1529165980561-f19d4acc4f3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29hY2glMjB2cyUyMHBsYXllcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60" />
      <q-carousel-slide :name="4" img-src="https://images.unsplash.com/photo-1586084039069-a42a1d8bf8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGxheWVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" />
    </q-carousel>
  </div>
  
 </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
 name: 'IndexPage',
 setup() {
   const slide = ref(1)
   const autoplay = ref(true)

   return {
     slide,
     autoplay
   }
 }
})
</script>

<style scoped>

.carousel-title-wrapper {
 margin-bottom: 24px;
 margin-top: 24px;
 text-align: center;
}

.carousel-title {
 font-size: 32px;
 font-weight: bold;
 margin: 0;
}

.carousel-title span {
 color: #4b16af;
}

</style>