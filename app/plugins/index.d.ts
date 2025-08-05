declare module "#app" {
  interface NuxtApp {
    $env: {
      frontendURL: string;
      backendURL: string;
      appName: string;
      googleClientId: string;
    };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $env: {
      frontendURL: string;
      backendURL: string;
      appName: string;
      googleClientId: string;
    };
  }
}

export {};
