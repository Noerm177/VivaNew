// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  hmr: false,
  api: {
    url: 'http://ec2-54-67-30-121.us-west-1.compute.amazonaws.com:3000/v1',
    webUrl: 'http://ec2-54-67-30-121.us-west-1.compute.amazonaws.com'
  }
};
