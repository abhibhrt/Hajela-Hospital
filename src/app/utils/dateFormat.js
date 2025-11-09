/**
 * Safe date formatting utility that prevents hydration mismatches
 * Only formats dates on the client side
 */
export function formatDateSafe(date, options = {}) {
  if (typeof window === 'undefined') {
    // Return a placeholder during SSR
    return '';
  }
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) {
      return '';
    }
    return dateObj.toLocaleDateString(options.locale || 'en-GB', options);
  } catch (error) {
    console.error('Date formatting error:', error);
    return '';
  }
}

export function formatDateTimeSafe(date, options = {}) {
  if (typeof window === 'undefined') {
    // Return a placeholder during SSR
    return '';
  }
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) {
      return '';
    }
    return dateObj.toLocaleString(options.locale || 'en-IN', options);
  } catch (error) {
    console.error('Date formatting error:', error);
    return '';
  }
}

