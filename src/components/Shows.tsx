import { useState, useEffect } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

interface CalendarEvent {
  id: string;
  summary: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
}

interface Show {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  description?: string;
}

export function Shows() {
  //const [events, setEvents] = useState<Show[]>([]);
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const CALENDAR_ID = 'YOUR_CALENDAR_ID@group.calendar.google.com';
  const API_KEY = 'YOUR_GOOGLE_API_KEY';

  useEffect(() => {
    fetchCalendarEvents();
  }, []);

  const fetchCalendarEvents = async (): Promise<void> => {
    try {
      setLoading(true);
      setError('');

      if (API_KEY === 'YOUR_GOOGLE_API_KEY' || !API_KEY) {
        setError('Google Calendar API key not configured. Please see setup instructions.');
        setLoading(false);
        return;
      }

      if (CALENDAR_ID === 'YOUR_CALENDAR_ID@group.calendar.google.com' || !CALENDAR_ID) {
        setError('Google Calendar ID not configured. Please see setup instructions.');
        setLoading(false);
        return;
      }

      const now = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now}&maxResults=20&orderBy=startTime&singleEvents=true`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch calendar events');
      }

      const data = await response.json();
      const events: CalendarEvent[] = data.items || [];

      const transformedShows: Show[] = events
        .filter(event => event.start?.dateTime || event.start?.date)
        .map(event => {
          const startDateTime = event.start?.dateTime || event.start?.date || '';
          const date = new Date(startDateTime);

          return {
            id: event.id,
            title: event.summary || 'Untitled Event',
            date: date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }),
            time: event.start?.dateTime
              ? date.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })
              : '',
            venue: event.summary || 'Show',
            location: event.location || '',
            description: event.description || '',
          };
        });

      setShows(transformedShows);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load calendar events');
      console.error('Calendar fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const refreshEvents = (): void => {
    fetchCalendarEvents();
  };

  if (loading) {
    return (
      <section id="shows" className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16 text-center pb-4">Upcoming Gigs</h2>
          <div className="p-12 text-center backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading tour dates...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="shows" className="px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-black text-white mb-16 text-center pb-4">Upcoming Gigs</h2>
          <div className="p-12 backdrop-blur-sm bg-red-500/10 border border-red-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-300 mb-2">Setup Required</h3>
                <p className="text-red-200 mb-4">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shows" className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl font-black text-white">Tour Dates</h2>
          <button
            onClick={refreshEvents}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition transform hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Refresh
          </button>
        </div>

        {shows.length === 0 ? (
          <div className="p-12 text-center backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300 text-lg">No upcoming shows scheduled. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {shows.map(show => (
              <div
                key={show.id}
                className="group p-6 backdrop-blur-sm bg-white/10 border border-white/20 hover:border-orange-400/50 rounded-xl transition-all hover:bg-white/15"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-start">
                      <time className="text-orange-300 font-mono text-lg font-bold">
                        {show.date}
                      </time>
                      {show.time && (
                        <span className="text-gray-400 text-sm mt-1">{show.time}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-1">{show.title}</h3>
                    {show.location && (
                      <p className="text-gray-300 mb-2">{show.location}</p>
                    )}
                    {show.description && (
                      <p className="text-gray-400 text-sm">{show.description}</p>
                    )}
                  </div>

                  {show.location && (
                    <div className="flex-shrink-0">
                      <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(show.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold rounded-lg transition text-sm"
                      >
                        Map
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 backdrop-blur-sm bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="text-blue-200 text-sm">
            💡 <strong>Tip:</strong> Add events to your Google Calendar and they'll automatically appear here!
          </p>
        </div>
      </div>
    </section>
  );
}