<script setup>
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
    <div class="header-container">
        <nav class="main-menu">
            <!-- <ul>
        <li><a href="#">Home</a></li>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener">Blog</a>
        </li>
      </ul> -->
        </nav>
        <ThemeToggle />
    </div>
    <div class="content-container">
        <div class="content">
            <p>
                <span>Hi, i'm Matt.</span><br />
                I am a developer focused on integration and web technologies.
            </p>
        </div>
    </div>
</template>
