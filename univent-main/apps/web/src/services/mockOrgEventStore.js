const ORG_EVENTS_KEY = 'univent.org-events.v1'

function seedOrgEvents() {
  const now = '2026-10-14T10:00:00.000Z'
  return [
    {
      eventId: 'org-e1',
      title: 'CodeCell Hack Night',
      description: 'Overnight campus hackathon hosted by CodeCell. Form a team, build something, demo at dawn.',
      category: 'Technical',
      bannerUrl: '',
      date: '2026-11-02',
      startTime: '18:00',
      endTime: '23:59',
      venue: 'Seminar Hall A',
      regDeadline: '2026-11-01',
      capacity: 100,
      status: 'published',
      orgEmail: 'codecell@ves.ac.in',
      orgName: 'CodeCell',
      createdAt: now,
      updatedAt: now,
    },
    {
      eventId: 'org-e2',
      title: 'Intro to Git & GitHub',
      description: 'Hands-on workshop covering commits, branches, pull requests, and collaborative workflows.',
      category: 'Technical',
      bannerUrl: '',
      date: '2026-11-09',
      startTime: '10:00',
      endTime: '13:00',
      venue: 'CSE Lab 3',
      regDeadline: '2026-11-08',
      capacity: 60,
      status: 'pending',
      orgEmail: 'codecell@ves.ac.in',
      orgName: 'CodeCell',
      createdAt: now,
      updatedAt: now,
    },
    {
      eventId: 'org-e3',
      title: 'Design Systems 101',
      description: 'Draft workshop on tokens, components, and documentation for consistent UI.',
      category: 'Technical',
      bannerUrl: '',
      date: '2026-11-16',
      startTime: '11:00',
      endTime: '14:00',
      venue: 'Seminar Hall B',
      regDeadline: '2026-11-15',
      capacity: 50,
      status: 'draft',
      orgEmail: 'codecell@ves.ac.in',
      orgName: 'CodeCell',
      createdAt: now,
      updatedAt: now,
    },
    {
      eventId: 'org-e4',
      title: 'Late-Night LAN Party',
      description: 'Submitted without a venue booking — returned by the admin team.',
      category: 'Technical',
      bannerUrl: '',
      date: '2026-11-23',
      startTime: '20:00',
      endTime: '23:00',
      venue: 'Open Yard',
      regDeadline: '2026-11-22',
      capacity: 80,
      status: 'rejected',
      orgEmail: 'codecell@ves.ac.in',
      orgName: 'CodeCell',
      createdAt: now,
      updatedAt: now,
    },
  ]
}

function readStoredOrgEvents() {
  try {
    const raw = localStorage.getItem(ORG_EVENTS_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return Array.isArray(parsed) ? parsed : null
  } catch {
    return null
  }
}

export function writeOrgEvents(events) {
  try {
    localStorage.setItem(ORG_EVENTS_KEY, JSON.stringify(events))
  } catch {
    // private mode / quota — mock keeps working in memory for this load
  }
}

export function loadOrgEvents() {
  const stored = readStoredOrgEvents()
  if (stored) return stored
  const seeded = seedOrgEvents()
  writeOrgEvents(seeded)
  return seeded
}
