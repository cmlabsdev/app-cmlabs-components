<template>
  <notificationGroup group="master">
    <div class="fixed z-[1001] inset-0 flex items-start justify-end pointer-events-none">
      <div class="flex flex-col gap-4 max-w-md w-full px-4">
        <notification v-slot="{ notifications, close }">
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="flex items-start justify-between gap-4 w-full first:mt-4 mb-4 last:mb-0 p-4 shadow-md rounded overflow-hidden pointer-events-auto"
            :class="getBackgroundColor(notification.variant)"
          >
            <cm-icon
              class="text-xl mt-1"
              :icon="getIcon(notification.icon || notification.variant)"
            />

            <div class="flex-1 flex flex-col gap-2">
              <p class="font-bold text-md">
                {{ notification.title }}
              </p>
              <p v-html="notification.text" />
              <a
                v-if="notification.hasLink"
                class="mt-1"
                :class="getColor(notification.variant)"
                target="_blank"
                :href="notification.toLink"
              >
                {{ notification.textLink }}
              </a>
            </div>

            <button
              class="flex items-center justify-center mt-1"
              @click="close(notification.id)"
            >
              <cm-icon class="text-2xl" icon="bx-x" />
            </button>
          </div>
        </notification>
      </div>
    </div>
  </notificationGroup>
</template>

<script>
export default {
  name: 'CmToast',

  methods: {
    /**
     * Returns the background color for the toast.
     * @param {String} variant - The toast item variant
     */
    getBackgroundColor (variant) {
      switch (variant) {
        case 'primary':
          return 'bg-primary-20 dark:bg-primary-80'
        case 'success':
          return 'bg-success-20 dark:bg-success-80'
        case 'warning':
          return 'bg-warning-20 dark:bg-warning-80'
        case 'danger':
          return 'bg-danger-20 dark:bg-danger-80'
        case 'info':
          return 'bg-info-20 dark:bg-info-80'
      }
    },
    /**
     * Returns the text color for the toast.
     * @param {String} variant - The toast item variant
     */
    getColor (variant) {
      switch (variant) {
        case 'primary':
          return 'text-primary-70 dark:text-primary-90'
        case 'success':
          return 'text-success-70 dark:text-success-90'
        case 'warning':
          return 'text-warning-70 dark:text-warning-90'
        case 'danger':
          return 'text-danger-70 dark:text-danger-90'
        case 'info':
          return 'text-info-70 dark:text-info-90'
      }
    },
    /**
     * Returns the icon for the toast.
     * @param {String} variant - The toast item variant
     */
    getIcon (icon) {
      if (icon.startsWith('bx')) { return icon }

      switch (icon) {
        case 'primary':
          return 'bxs-info-circle'
        case 'success':
          return 'bxs-check-circle'
        case 'warning':
          return 'bxs-error'
        case 'danger':
          return 'bxs-error-alt'
        case 'info':
          return 'bxs-help-circle'
      }
    }
  }
}
</script>
