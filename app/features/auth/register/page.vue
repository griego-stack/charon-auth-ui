<script setup lang="ts"></script>

<template>
  <NuxtLayout name="auth" title="Create Account">
    <div class="flex w-full flex-col items-center justify-center gap-1">
      <SocialGoogle class="w-full" />
      <SocialGithub class="w-full" />
    </div>

    <Divider>or</Divider>
  </NuxtLayout>
</template>
