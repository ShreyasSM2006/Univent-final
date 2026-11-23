// Shared mock-data filtering used by both the Events page and the
// landing-page discovery section, so both views always agree.
export function filterEvents(events, { query = '', category = 'All' } = {}) {
  const q = query.trim().toLowerCase()
  return (events || []).filter((e) => {
    const matchesCategory = category === 'All' || e.category === category
    const searchableText = [
      e.title,
      e.venue,
      e.description,
      e.organizer,
      e.orgName,
      e.category,
    ].join(' ').toLowerCase()
    const matchesQuery = !q || searchableText.includes(q)
    return matchesCategory && matchesQuery
  })
}

export function sortByDate(events) {
  return [...(events || [])].sort((a, b) => String(a.date).localeCompare(String(b.date)))
}
