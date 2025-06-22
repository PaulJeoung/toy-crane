function getDateRange(start, end) {
  const result = [];
  const current = new Date(start);
  const last = new Date(end);

  while (current <= last) {
    const yyyy = current.getFullYear();
    const mm = String(current.getMonth() + 1).padStart(2, '0');
    const dd = String(current.getDate()).padStart(2, '0');
    result.push(`${yyyy}-${mm}-${dd}`); // ex: 2025-05-15
    current.setDate(current.getDate() + 1);
  }
  return result;
}

module.exports = { getDateRange };