<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>



## Set up Inertia js in Laravel

### Server side setup
<br>
Install Inertia laravel

```
composer require inertiajs/inertia-laravel
```
Root template
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @vite('resources/js/app.js')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
```
Set Middleware
```
php artisan inertia:middleware
```
Register HandleInertiaRequests middleware in your App\Http\Kernel
```
'web' => [
    // ...
    \App\Http\Middleware\HandleInertiaRequests::class,
],
```

### Client-side setup

Install Vue Js
``` 
npm install vue@latest
```
Install Inertia Vue
``` 
npm install @inertiajs/vue3
```
Install Vue Vite Plugin
``` 
npm i @vitejs/plugin-vue
```
Configure vite.config.js file
``` 
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
}
```
Initialize the Inertia app
``` 
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
```
