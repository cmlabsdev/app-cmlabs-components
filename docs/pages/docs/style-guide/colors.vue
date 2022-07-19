<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">
        Colors
      </h1>
      <p class="text-md text-dark-10 dark:text-gray-40">
        Theme and CMLABS colors guidelines.
      </p>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <p class="text-md text-dark-10 dark:text-gray-40">
        All classes are applicable for use with <code>background-colors</code>,
        <code>color</code>, <code>border-color</code>, and any specific tailwind
        classes which support colors utility.
      </p>

      <h2 class="text-dark-60 dark:text-gray-10"> Example Usage </h2>

      <p v-highlight>
        <pre class="language-html"><code>&ltdiv class="bg-danger-60"&gt; Renders red background &lt;/div&gt;</code>
<code>&ltp class="text-primary-40"&gt; Display blue text &lt;/p&gt;</code>
<code>&ltarticle class="border border-dark-10"&gt; Show dark border &lt;/article&gt;</code></pre>
      </p>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Danger Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFF3E5 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFE7D5 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFC9AB </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFA481 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FF8061 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FF433D </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #DB2820 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #B7161D </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #930E1E </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #7A081F </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-danger-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #570424 </span>
          </div>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Dark Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #929396 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #858689 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #797A7D </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #66676A </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #4C4D50 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #393A3D </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #2C2D30 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #232427 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #191A1D </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #111215 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-dark-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #0B0C0F </span>
          </div>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Gray Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FCFCFC </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FAFAFC </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #F6F6F8 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #F1F1F3 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #EDEDEF </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #E6E6E6 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #CDCDCD </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #C0C0C0 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #B2B2B2 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #AAAAAA </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-gray-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #989A9F </span>
          </div>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Info Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-info-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #ECF0FF </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #E0E5FF </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #C2CAFF </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #A4AFFF </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #8D9AFF </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #6877FF </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #4C58DB </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #343EB7 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #212893 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #13197A </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-info-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #090D57 </span>
          </div>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Primary Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #E3FEFE </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #D0F7FE </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #A2E9FE </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #74D6FD </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #51C1FC </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #18A0FB </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #117CD7 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #0C5DB4 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #074191 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #042E78 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-primary-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #021A56 </span>
          </div>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Secondary Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #F9EAFE </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #F1DCFD </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #E0BAFC </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #CA96F8 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #B47AF2 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #9450EA </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #733AC9 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #5528A8 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #3B1987 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #280F70 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-secondary-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #160750 </span>
          </div>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Success Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-success-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #E9FDE1 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #D2FBCD </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #9EF89C </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #69EA74 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #42D65D </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #0FBB3F </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #0AA043 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #078643 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #046C3F </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #02593C </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-success-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #014037 </span>
          </div>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Warning Colors </h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-10" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 10 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFFCE2 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-20" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 20 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFF9D0 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-30" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 30 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFF0A1 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-40" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 40 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFE673 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-50" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 50 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFDC50 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-60" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 60 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #FFCC16 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-70" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 70 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #DBAA10 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-80" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 80 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #B78A0B </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-90" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 90 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #936B07 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-100" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 100 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #7A5504 </span>
          </div>
        </div>
        <div>
          <div class="w-full h-16 rounded-lg bg-warning-110" />
          <div class="flex items-center justify-between">
            <span class="dark:text-gray-40"> 110 </span>
            <span class="dark:text-gray-40" style="font-family: 'Courier New', Courier, monospace;"> #573702 </span>
          </div>
        </div>
      </div>
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/getting-started/upgrade-guide"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/style-guide/typography"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsStyleGuideColorsPage"
}
</script>
