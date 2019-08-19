<template>
  <div id="app-vue"> <!-- elkaput 20-Aug-2019: previous id="app" which clashes with one in index.html -->
    <header class="site-header">
      <b-navbar type="dark" fixed="top">
        <b-navbar-brand href="/">World War of Ants</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="DevLogs">Devloper Logs</b-nav-item>
            <b-nav-item to="About">About Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
</style>
