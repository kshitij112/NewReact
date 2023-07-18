export class ToastUtility {
  /**
   * Constructs a new ToastUtility instance.
   *
   * @param {function} toast - The `toast` function from Chakra UI.
   */
  constructor(toast) {
    this.toast = toast;
  }

  /**
   * Displays a success toast notification.
   *
   * @param {string} title - The title to display in the toast notification.
   * @param {string} message - The message to display in the toast notification.
   * @param {number} duration - The duration in milliseconds to show the toast (default: 3000ms).
   */
  showSuccess(title, message, duration = 3000) {
    this.toast({
      title: title,
      description: message,
      status: "success",
      duration,
      isClosable: true,
      position: "top",
    });
  }

  /**
   * Displays an error toast notification.
   *
   * @param {string} title - The title to display in the toast notification.
   * @param {string} message - The message to display in the toast notification.
   * @param {number} duration - The duration in milliseconds to show the toast (default: 3000ms).
   */
  showError(title, message, duration = 3000) {
    this.toast({
      title: title,
      description: message,
      status: "error",
      duration,
      isClosable: true,
      position: "top",
    });
  }

  /**
   * Displays a warning toast notification.
   *
   * @param {string} title - The title to display in the toast notification.
   * @param {string} message - The message to display in the toast notification.
   * @param {number} duration - The duration in milliseconds to show the toast (default: 3000ms).
   */
  showWarning(title, message, duration = 3000) {
    this.toast({
      title: title,
      description: message,
      status: "error",
      duration,
      isClosable: true,
      position: "top",
    });
  }

  /**
   * Displays a custom toast notification.
   *
   * @param {object} toastValues - The configuration object for the toast notification.
   * @param {string} toastValues.title - The title of the toast notification.
   * @param {string} toastValues.status - The status/color of the toast notification.
   * @param {number} toastValues.duration - The duration in milliseconds to show the toast (default: 3000ms).
   * @param {boolean} toastValues.isClosable - Whether the toast notification is closable (default: true).
   * @param {any} toastValues.description - The description/content of the toast notification.
   */
  showCustom(toastValues) {
    this.toast({
      title: toastValues.title,
      status: toastValues.status,
      duration: toastValues.duration || 3000,
      isClosable: toastValues.isClosable || true,
      description: toastValues.description,
      position: "top"
    });
  }
}


export const TOASTS = {
  USER_NOT_LOGGED_IN: {
    title: 'Login Required',
    status: 'error',
    duration: 3000,
    isClosable: true,
    description: 'You must be logged in to access this feature'
  },
  LOGIN_SUCCESS: {
    title: 'Login Successful',
    status: 'success',
    duration: 3000,
    isClosable: true,
    description: 'Welcome back! You have successfully logged in'
  },
  LOGIN_FAILED: {
    title: 'Wrong Credentials',
    status: 'error',
    duration: 3000,
    isClosable: true,
    description: 'Login error please check email and password'
  },
  FILE_ADD_FAILED: {
    title: 'Failed to Add File',
    status: 'warning',
    duration: 3000,
    isClosable: true,
    description: 'Oops! We couldn\'t add the file you selected'
  },

}
