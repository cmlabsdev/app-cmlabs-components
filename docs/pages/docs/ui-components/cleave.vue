<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Cleaves</h1>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <p class="text-md text-dark-10 dark:text-gray-40">
        Cleave components are the wrapper for <a href="https://nosir.github.io/cleave.js/">cleave.js</a> library which formats an input value while inputting any text onto it. To learn more about <a href="https://nosir.github.io/cleave.js/">cleave.js</a>, please refer <a href="https://nosir.github.io/cleave.js/">here</a>. The component also specifies another options that could be configured through props. See the examples below to learn more of the use cases available.
      </p>

      <div>
        <h2>Basic Example</h2>
        <p>
          The cleave component is like an <router-link to="/docs/ui-components/input">input</router-link> element which should be wrapped with a <a href="/docs/ui-components/form-control">form control</a> component. This is to make sure the input element being accessible and has a size injected into it. Learn more about the <router-link to="/docs/ui-components/input">input</router-link> and <a href="/docs/ui-components/form-control">form control</a>.
        </p>
        
        <div class="mt-4">
          <h3>Credit Card Example</h3>
          <cm-form-control>
            <cm-cleave
              :options="{ creditCard: true, }"
              placeholder="Enter a credit card number"
            />
          </cm-form-control>

          <nuxt-content :document="creditExample" />
        </div>
        
        <div class="mt-4">
          <h3>Phone Number Example</h3>
          <cm-form-control>
            <cm-cleave
              :options="{ phone: true, phoneRegionCode: 'id', }"
              placeholder="0812 3456 7890"
            />
          </cm-form-control>

          <nuxt-content :document="phoneNumberExample" />
        </div>
        
        <div class="mt-4">
          <h3>Date Formatting Example</h3>
          <cm-form-control>
            <cm-cleave
              :options="{
                date: true,
                delimiter: '-',
                datePattern: ['Y', 'm', 'd']
              }"
              placeholder="2000 11 30"
            />
          </cm-form-control>

          <nuxt-content :document="dateFormattingExample" />
        </div>
        
        <div class="mt-4">
          <h3>Time Formatting Example</h3>
          <cm-form-control>
            <cm-cleave
              :options="{
                time: true,
                timePattern: ['h', 'm', 's']
              }"
              placeholder="hh:mm:ss"
            />
          </cm-form-control>

          <nuxt-content :document="timeFormattingExample" />
        </div>
        
        <div class="mt-4">
          <h3>Numeral Formatting Example</h3>
          <cm-form-control>
            <cm-cleave
              :options="{
                numeral: true,
                numeralThousandsGroupStyle: 'thousand'
              }"
              placeholder="Enter a number"
            />
          </cm-form-control>

          <nuxt-content :document="numeralFormattingExample" />
        </div>
      </div>

      <div>
        <h2>Additional Props</h2>
        <p>There are some additional props that you may pass. Below are the examples of each available props.</p>
        
        <div class="mt-4">
          <h3>Disabled</h3>
          <cm-form-control>
            <cm-cleave
              disabled
              :options="{ creditCard: true, }"
              placeholder="Enter a credit card number"
            />
          </cm-form-control>

          <nuxt-content :document="disabledExample" />
        </div>
        
        <div class="mt-4">
          <h3>Readonly</h3>
          <cm-form-control>
            <cm-cleave
              readonly
              :options="{ creditCard: true, }"
              placeholder="Enter a credit card number"
            />
          </cm-form-control>

          <nuxt-content :document="readonlyExample" />
        </div>
        
        <div class="mt-4">
          <h3>Error State</h3>
          <cm-form-group>
            <cm-form-control error>
              <cm-cleave
                error
                :options="{ creditCard: true }"
                placeholder="Enter a credit card number"
              />
            </cm-form-control>

            <template #error>
              <cm-form-error>An error occured!</cm-form-error>
            </template>
          </cm-form-group>

          <nuxt-content :document="errorExample" />
        </div>
      </div>
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/checkbox"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/data-table"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
require('cleave.js/dist/addons/cleave-phone.id');

export default {
  name: "DocsUiComponentsCleavePage",

  async asyncData({ $content }) {
    const creditExample = await $content("cleave/credit-example").fetch();
    const phoneNumberExample = await $content("cleave/phone-number-example").fetch();
    const dateFormattingExample = await $content("cleave/date-formatting-example").fetch();
    const timeFormattingExample = await $content("cleave/time-formatting-example").fetch();
    const numeralFormattingExample = await $content("cleave/numeral-formatting-example").fetch();
    const disabledExample = await $content("cleave/disabled-example").fetch();
    const readonlyExample = await $content("cleave/readonly-example").fetch();
    const errorExample = await $content("cleave/error-example").fetch();

    return {
      creditExample,
      phoneNumberExample,
      dateFormattingExample,
      timeFormattingExample,
      numeralFormattingExample,
      disabledExample,
      readonlyExample,
      errorExample,
    };
  }
}
</script>
