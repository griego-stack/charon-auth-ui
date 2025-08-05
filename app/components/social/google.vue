<script setup lang="ts">
import { googleSdkLoaded } from "vue3-google-login";

const {
  public: { apiURL, googleClientId },
} = useRuntimeConfig();

const { $router } = useNuxtApp();

const sendCodeToBackend = async (code: string) => {
  try {
    await $fetch(`${apiURL}/auth/social/google`, {
      method: "POST",
      body: code,
    });

    $router.push("/app");
  } catch (error) {
    console.error("Failed to send authorization code:", error);
  }
};

const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: googleClientId,
        scope: "email profile openid",
        callback: (response) => {
          if (response.code) sendCodeToBackend(response.code);
        },
      })
      .requestCode();
  });
};
</script>

<template>
  <Button @click="login" icon="mdi:google">Sign in with Google</Button>
</template>
