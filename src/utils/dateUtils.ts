/**
 * Date utility helpers for Bageshree Home Stay
 * Ensures strict validation against past dates and enforces Check-Out > Check-In.
 */

// Returns today's date in local YYYY-MM-DD format (browser local timezone)
export const getLocalToday = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Returns date string for N days after a given date (default tomorrow / next day)
export const getNextDay = (dateStr?: string, daysToAdd = 1): string => {
  let base: Date;
  if (dateStr && dateStr.includes('-')) {
    const parts = dateStr.split('-').map(Number);
    base = new Date(parts[0], parts[1] - 1, parts[2]);
  } else {
    base = new Date();
  }
  base.setDate(base.getDate() + daysToAdd);
  const year = base.getFullYear();
  const month = String(base.getMonth() + 1).padStart(2, '0');
  const day = String(base.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Ensures check-in date is never in the past (locks all previous dates)
export const clampCheckInDate = (dateStr?: string): string => {
  const today = getLocalToday();
  if (!dateStr || dateStr < today) {
    return today;
  }
  return dateStr;
};

// Ensures check-out date is strictly at least 1 day after check-in
export const clampCheckOutDate = (checkInStr?: string, checkOutStr?: string): string => {
  const validCheckIn = clampCheckInDate(checkInStr);
  const minCheckOut = getNextDay(validCheckIn, 1);
  if (!checkOutStr || checkOutStr < minCheckOut) {
    return minCheckOut;
  }
  return checkOutStr;
};

// Calculates number of nights between check-in and check-out
export const calculateNightsBetween = (checkInStr?: string, checkOutStr?: string): number => {
  if (!checkInStr || !checkOutStr) return 1;
  const start = new Date(checkInStr);
  const end = new Date(checkOutStr);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
};
