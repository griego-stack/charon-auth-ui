<script setup lang="ts"></script>

<template>
  <NuxtLayout name="auth" title="Create Account">
    <div class="flex w-full flex-col gap-8">
      <div class="flex w-full flex-col items-center justify-center gap-1">
        <SocialGoogle class="w-full" />
        <SocialGithub class="w-full" />
      </div>

      <Divider>or</Divider>

      <div class="flex w-full flex-col items-center justify-center gap-1"></div>
    </div>

    <template #footer>
      <p>
        Do you already have an account?
        <NuxtLink to="/auth/signin" class="text-blue-500 underline">
          Sign In
        </NuxtLink>
      </p>
    </template>
  </NuxtLayout>
</template>
