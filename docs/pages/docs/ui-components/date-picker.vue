<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Date Pickers</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">
				Date Pickers component ^^
			</p>
		</header>

		<hr class="text-gray-60" />

		<section
			class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none"
		>
			<p class="text-md text-dark-10 dark:text-gray-40">
				We use <a href="https://vcalendar.io" target="_blank">v-calendar</a> as
				our library for building a calendar UI. Please visit the docs for more
				explanation of the API that can be used. Below are the very basic
				example and common usecases. Also, the other component accept the exact
				same props and slots for <code>cm-date-time-picker</code> and
				<code>cm-time-picker</code>.
			</p>

			<h2>Basic Usage</h2>

			<p>
				By default, we use the <strong>cm-form-control</strong> and
				<strong>cm-input</strong> component as our calendar toggler. You may
				create you own toggler as well by utilizing the
				<code>default</code> slot.
			</p>

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded shadow">
				<div class="w-full">
					<strong>Today: {{ today }}</strong>
					<cm-date-picker v-model="today" />
				</div>
				<div class="w-full">
					<strong>Birthday: {{ birthday }}</strong>
					<cm-date-picker v-model="birthday" />
				</div>
				<div class="w-full">
					<strong>Custom Formatter: {{ customFormat }}</strong>
					<cm-date-picker v-model="customFormat" formatter="MMMM Do YYYY" />
				</div>
			</div>

			<nuxt-content :document="basicExample" />

			<h2>Max and Min Date Usage</h2>

			<p>
				You can force the calendar to only allow some specific date of range. To
				do that, you will need to pass in the <code>min-date</code> and
				<code>max-date</code> Date props.
			</p>

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded shadow">
				<div class="w-full">
					<strong>Today: {{ today }}</strong>
					<cm-date-picker v-model="today" :min-date="new Date()" />
				</div>
				<div class="w-full">
					<strong>Birthday: {{ birthday }}</strong>
					<cm-date-picker v-model="birthday" :max-date="new Date()" />
				</div>
			</div>

			<nuxt-content :document="minAndMaxDateExample" />

			<h2>Date Range</h2>

			<p>
				By default, the picker is a single date selector. To force range
				functionality, use the <code>is-range</code> props. However, there are
				some changes that you must define. First, formatter becomes a required
				value. Then, the v-model will change its format to
				<code>${start}:${end}</code> as a string. You will need to handle this
				format when an object is your specification instead.
			</p>

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded shadow">
				<div class="w-full">
					<strong>Booking For: {{ bookingFor }}</strong>
					<cm-date-picker
						v-model="bookingFor"
						formatter="YYYY-MM-DD"
						:min-date="new Date()"
						is-range
					/>
				</div>
			</div>

			<nuxt-content :document="rangeExample" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/data-table"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>

			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/date-picker"
			>
				<span>Continue</span>
				<cm-icon class="rotate-180" icon="bx-arrow-back" />
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsDatePickerPage",

	async asyncData({ $content }) {
		const basicExample = await $content("date-picker/basic-example").fetch();
		const minAndMaxDateExample = await $content(
			"date-picker/min-and-max-example"
		).fetch();
		const rangeExample = await $content("date-picker/range-example").fetch();
		return {
			basicExample,
			minAndMaxDateExample,
			rangeExample,
		};
	},

	data() {
		return {
			today: new Date(),
			birthday: null,
			customFormat: this.$moment().format("YYYY-MM-DD"),
			bookingFor: {
				start: this.$moment().format("YYYY-MM-DD"),
				end: this.$moment().format("YYYY-MM-DD"),
			},
		};
	},
};
</script>
