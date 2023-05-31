import { DUMMY_BASEBALL_TEAM, DUMMY_FOOTBALL_TEAM } from "./dummy-team-data";

const DUMMY_EVENTS = [
  {
    id: '0',
    type: 'football',
    title: 'English Premier League',
    description:
      'Tour England & Watch the EPL',
    location: '782 High Rd, London N17 0BX England',
    date: '2023-10-12',
    image: 'images/football-event.jpg',
    schedule: [DUMMY_FOOTBALL_TEAM[Math.floor(Math.random() * DUMMY_FOOTBALL_TEAM.length)], DUMMY_FOOTBALL_TEAM[Math.floor(Math.random() * DUMMY_FOOTBALL_TEAM.length)]],
    isRecommend: true,
  },
  {
    id: '1',
    type: 'baseball',
    title: 'Major League Baseball',
    description:
      "Tour Canada & Watch the MLB",
    location: '1 Blue Jays Way, Toronto, ON M5V 1J1 Canada',
    date: '2023-06-30',
    image: 'images/baseball-event.jpg',
    // schedule: [DUMMY_BASEBALL_TEAM.random(), DUMMY_BASEBALL_TEAM.random()],
    isRecommend: true,
  },
  {
    id: '2',
    type: 'tennis',
    title: 'Australia Open',
    description:
      'Tour Australia & Watch the AO',
    location: 'Melbourne VIC 3004 Australia',
    date: '2024-01-29',
    image: 'images/tennis-event.jpg',
    isRecommend: true,
  },
  {
    id: '3',
    type: 'basketball',
    title: 'National Basketball Associaiton',
    description:
      'Tour United States & Watch the NBA',
    location: '1 Warriors Way, San Francisco, CA 94158 United States',
    date: '2023-12-30',
    image: 'images/basketball-event.png',
    isRecommend: false,
  },
  {
    id: '4',
    type: 'football',
    title: 'K-League Football',
    description: "Tour Korea & Watch K-League",
    location: 'Seoul, South Korea',
    date: '2023-11-01',
    image: 'images/k-football-event.jpg',
    isRecommend: false,
  },
  {
    id: '5',
    type: 'baseball',
    title: 'Korea Baseball League',
    description: "Enjoy K-Baseball",
    location: 'Seoul, South Korea',
    date: '2023-07-10',
    image: 'images/k-baseball-event.jpg',
    isRecommend: true,
  },
  {
    id: '6',
    type: 'tennis',
    title: 'Roland-Garros Open',
    description: 'Tour France & Watch Tennis',
    location: 'France',
    date: '2023-05-30',
    image: 'images/tennis-event2.jpg',
    isRecommend: true,
  }
];

export function getRecommendEvents() {
  return DUMMY_EVENTS.filter((event) => event.isRecommend);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(type) {
  let filteredEvents = DUMMY_EVENTS.filter((data) => {
    return type ? data.type === type : data;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}