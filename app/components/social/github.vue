<script setup lang="ts">
const {
  public: { githubClientId, githubRedirectUri },
} = useRuntimeConfig();

const rootURL = "https://github.com/login/oauth/authorize";
const options = {
  client_id: githubClientId,
  redirect_uri: `${githubRedirectUri}`,
  scope: "user:email read:user",
  state: "/",
};

const qs = new URLSearchParams(options);

const githubAuthUrl = `${rootURL}?${qs.toString()}`;
</script>

<template>
  <Button :to="githubAuthUrl" icon="mdi:github">Sign in with GitHub</Button>
</template>
