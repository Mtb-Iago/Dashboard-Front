<template>
   <div class="main">
       <div class="sidebar">
           <SidebarComponent />
       </div>
       <div class="content-right">
           <div class="navbar">
               <NavbarComponent />
           </div>
           <div class="pages">

           </div>

       </div>
   </div>
</template>

<script>
    import SidebarComponent from './components/SidebarComponents'
    import NavbarComponent from './components/NavbarComponents'
    export default {
        name: 'DashboardComponent',

        components: {
            SidebarComponent,
            NavbarComponent,
        }

    }
</script>

<style lang="scss" src="./style.scss" scoped />