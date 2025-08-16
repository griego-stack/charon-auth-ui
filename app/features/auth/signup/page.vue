<script setup lang="ts">
import z4 from "zod/v4";
import { emailSchema } from "~/schemas/string";

const usernameSchema = z4.string().min(1, "Required").max(5, "Max 5");
</script>

<template>
  <NuxtLayout name="auth" title="Create Account">
    <div class="flex w-full flex-col gap-8 px-2">
      <div class="flex w-full flex-col items-center justify-center gap-1">
        <SocialGoogle class="w-full" />
        <SocialGithub class="w-full" />
      </div>

      <Divider>or</Divider>

      <form class="flex w-full flex-col items-center justify-center gap-4 px-2">
        <FormInputText label="Username" :schema="usernameSchema" />
        <FormInputText label="Email" :schema="emailSchema" />
      </form>
    </div>

    <template #footer>
      <div class="px-2">
        <p>
          Do you already have an account?
          <NuxtLink to="/auth/signin" class="text-blue-500 underline">
            Sign In
          </NuxtLink>
        </p>
      </div>
    </template>
  </NuxtLayout>
</template>
