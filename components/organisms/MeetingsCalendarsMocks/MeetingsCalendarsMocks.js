import styles from './MeetingsCalendarsMocks.module.css';

/**
 * Every mock below is markup extracted directly from the "AiEngage Meetings Calendars" design
 * source for that section's own visual (same tags, inline styles and text — not a hand-recreated
 * CSS approximation), so it matches the design exactly rather than an ongoing best-effort guess.
 */

export function UpcomingMeetingsMock() {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.3) 0px 24px 60px -26px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '460px', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgb(255, 243, 234)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
              event
            </span>
          </span>
          <span style={{ fontSize: '14px', fontWeight: '700' }}>
            Upcoming Meetings
          </span>
        </div>
        <span style={{ fontSize: '9.5px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '999px', padding: '4px 9px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgb(31, 175, 100)' }} />
          Live
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '9px', padding: '6px 0px', textAlign: 'center' }}>
          <div style={{ fontSize: '7px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            MON
          </div>
          <div style={{ fontSize: '11px', fontWeight: '700' }}>
            24
          </div>
        </div>
        <div style={{ background: 'rgb(255, 95, 56)', borderRadius: '9px', padding: '6px 0px', textAlign: 'center' }}>
          <div style={{ fontSize: '7px', color: 'rgb(255, 225, 214)', fontWeight: '600' }}>
            TUE
          </div>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgb(255, 255, 255)' }}>
            25
          </div>
        </div>
        <div style={{ background: 'rgb(255, 95, 56)', borderRadius: '9px', padding: '6px 0px', textAlign: 'center' }}>
          <div style={{ fontSize: '7px', color: 'rgb(255, 225, 214)', fontWeight: '600' }}>
            WED
          </div>
          <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgb(255, 255, 255)' }}>
            26
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '9px', padding: '6px 0px', textAlign: 'center' }}>
          <div style={{ fontSize: '7px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            THU
          </div>
          <div style={{ fontSize: '11px', fontWeight: '700' }}>
            27
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '9px', padding: '6px 0px', textAlign: 'center' }}>
          <div style={{ fontSize: '7px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            FRI
          </div>
          <div style={{ fontSize: '11px', fontWeight: '700' }}>
            28
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '9px', padding: '6px 0px', textAlign: 'center' }}>
          <div style={{ fontSize: '7px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            SAT
          </div>
          <div style={{ fontSize: '11px', fontWeight: '700' }}>
            29
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '9px', padding: '6px 0px', textAlign: 'center' }}>
          <div style={{ fontSize: '7px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            SUN
          </div>
          <div style={{ fontSize: '11px', fontWeight: '700' }}>
            30
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px', padding: '9px 11px' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(18, 140, 75)', flexShrink: '0' }}>
            RS
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: '700' }}>
              Rohan Sharma
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Tue · 3:00 PM
            </div>
          </div>
          <span style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(61, 110, 246)', borderRadius: '6px', padding: '3px 7px', display: 'flex', alignItems: 'center', gap: '3px', flexShrink: '0' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '11px' }}>
              videocam
            </span>
            Zoom
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px', padding: '9px 11px' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgb(255, 225, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(230, 74, 36)', flexShrink: '0' }}>
            SD
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: '700' }}>
              Sneha Deshmukh
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Wed · 11:00 AM
            </div>
          </div>
          <span style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(61, 110, 246)', borderRadius: '6px', padding: '3px 7px', display: 'flex', alignItems: 'center', gap: '3px', flexShrink: '0' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '11px' }}>
              videocam
            </span>
            Meet
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px', padding: '9px 11px' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(18, 140, 75)', flexShrink: '0' }}>
            AM
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: '700' }}>
              Arjun Mehta
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Wed · 3:00 PM
            </div>
          </div>
          <span style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(18, 140, 75)', background: 'rgb(228, 245, 236)', borderRadius: '6px', padding: '3px 7px', flexShrink: '0' }}>
            Confirmed
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', background: 'rgb(255, 243, 234)', border: '1px dashed rgb(255, 159, 128)', borderRadius: '10px', padding: '8px 11px' }}>
        <span className="material-symbols-rounded" style={{ fontSize: '14px', color: 'rgb(255, 95, 56)' }}>
          summarize
        </span>
        <span style={{ fontSize: '9.5px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
          AI summary ready for last call
        </span>
      </div>
    </div>
  );
}

export function ZoomMeetCreationMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '18px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: '12px', fontWeight: '700', marginBottom: '12px' }}>
        New Meeting
      </div>
      <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '6px' }}>
        PLATFORM
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
        <span style={{ flex: '1 1 0%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '10.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(61, 110, 246)', borderRadius: '9px', padding: '9px 0px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '15px' }}>
            videocam
          </span>
          Zoom
        </span>
        <span style={{ flex: '1 1 0%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '10.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '9px 0px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '15px' }}>
            videocam
          </span>
          Google Meet
        </span>
      </div>
      <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px', padding: '10px 12px', marginBottom: '11px' }}>
        <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '5px' }}>
          AUTO-GENERATED JOIN LINK
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '10px', color: 'rgb(62, 54, 44)' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
            link
          </span>
          meet.aiengage.io/rj-3fk-9pq
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '11px', padding: '9px 11px', marginBottom: '11px' }}>
        <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgb(255, 225, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
          AM
        </span>
        <div style={{ fontSize: '9.5px', color: 'rgb(62, 54, 44)' }}>
          <span style={{ fontWeight: '700' }}>
            Arjun Mehta
          </span>
          · Deal #4821 · linked customer
        </div>
      </div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '5px 10px' }}>
          + Meera Kapoor (owner)
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '5px 10px' }}>
          + Internal participant
        </span>
      </div>
    </div>
  );
}

export function BookingSchedulerMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px', position: 'relative', left: '12px', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '13px', padding: '14px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
            calendar_month
          </span>
          <span style={{ fontSize: '11.5px', fontWeight: '700' }}>
            Book a Demo · Sales Team
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginBottom: '12px' }}>
          <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '7px 0px', textAlign: 'center', fontSize: '9.5px', fontWeight: '600' }}>
            24
          </div>
          <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '7px 0px', textAlign: 'center', fontSize: '9.5px', fontWeight: '600' }}>
            25
          </div>
          <div style={{ background: 'rgb(255, 95, 56)', borderRadius: '8px', padding: '7px 0px', textAlign: 'center', fontSize: '9.5px', fontWeight: '700', color: 'rgb(255, 255, 255)' }}>
            26
          </div>
          <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '7px 0px', textAlign: 'center', fontSize: '9.5px', fontWeight: '600' }}>
            27
          </div>
          <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '7px 0px', textAlign: 'center', fontSize: '9.5px', fontWeight: '600' }}>
            28
          </div>
        </div>
        <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '7px' }}>
          AVAILABLE SLOTS · WED 26
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginBottom: '14px' }}>
          <span style={{ textAlign: 'center', fontSize: '9.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '8px', padding: '7px 0px' }}>
            10:00 AM
          </span>
          <span style={{ textAlign: 'center', fontSize: '9.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '8px', padding: '7px 0px' }}>
            2:00 PM
          </span>
          <span style={{ textAlign: 'center', fontSize: '9.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '8px', padding: '7px 0px' }}>
            4:30 PM
          </span>
        </div>
        <div style={{ textAlign: 'center', fontSize: '10.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '9px', padding: '10px 0px' }}>
          Confirm Booking
        </div>
      </div>
    </div>
  );
}

export function ShareLinkMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '22px', position: 'relative', left: '12px', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '13px', padding: '18px', width: '100%' }}>
        <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '8px' }}>
          YOUR BOOKING LINK
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '10px 12px', marginBottom: '16px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
            link
          </span>
          <span style={{ flex: '1 1 0%', fontSize: '11px', color: 'rgb(62, 54, 44)' }}>
            book.aiengage.io/meera-kapoor
          </span>
          <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(255, 95, 56)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '6px', padding: '4px 9px' }}>
            Copy
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(31, 175, 100)' }}>
              chat
            </span>
            <span style={{ flex: '1 1 0%', fontSize: '10.5px', color: 'rgb(62, 54, 44)' }}>
              WhatsApp
            </span>
            <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(255, 95, 56)' }}>
              Share
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
              mail
            </span>
            <span style={{ flex: '1 1 0%', fontSize: '10.5px', color: 'rgb(62, 54, 44)' }}>
              Email
            </span>
            <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(255, 95, 56)' }}>
              Share
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
              handshake
            </span>
            <span style={{ flex: '1 1 0%', fontSize: '10.5px', color: 'rgb(62, 54, 44)' }}>
              Sales follow-up
            </span>
            <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(255, 95, 56)' }}>
              Share
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
              ads_click
            </span>
            <span style={{ flex: '1 1 0%', fontSize: '10.5px', color: 'rgb(62, 54, 44)' }}>
              Website CTA
            </span>
            <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(255, 95, 56)' }}>
              Share
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
              badge
            </span>
            <span style={{ flex: '1 1 0%', fontSize: '10.5px', color: 'rgb(62, 54, 44)' }}>
              Email signature
            </span>
            <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(255, 95, 56)' }}>
              Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AutoLinksMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '18px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '12px', fontWeight: '700' }}>
          Meeting Record · #M-1187
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(61, 110, 246)', borderRadius: '6px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '12px' }}>
            videocam
          </span>
          Zoom
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px 14px', marginBottom: '10px' }}>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 11px' }}>
          <div style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)', fontWeight: '700' }}>
            DATE
          </div>
          <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
            26 Aug 2026
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 11px' }}>
          <div style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)', fontWeight: '700' }}>
            TIME
          </div>
          <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
            3:00 PM IST
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 11px' }}>
          <div style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)', fontWeight: '700' }}>
            OWNER
          </div>
          <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
            Meera Kapoor
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 11px' }}>
          <div style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)', fontWeight: '700' }}>
            CUSTOMER
          </div>
          <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
            Rohan Sharma
          </div>
        </div>
      </div>
      <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 11px', marginBottom: '10px' }}>
        <div style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)', fontWeight: '700', marginBottom: '6px' }}>
          PARTICIPANTS
        </div>
        <div style={{ display: 'flex' }}>
          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(18, 140, 75)', border: '2px solid rgb(250, 247, 241)' }}>
            MK
          </span>
          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgb(255, 225, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(230, 74, 36)', border: '2px solid rgb(250, 247, 241)', marginLeft: '-8px' }}>
            RS
          </span>
        </div>
      </div>
      <div style={{ background: 'rgb(255, 243, 234)', border: '1px dashed rgb(255, 159, 128)', borderRadius: '11px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
          link
        </span>
        <div style={{ flex: '1 1 0%', fontSize: '9.5px', color: 'rgb(62, 54, 44)' }}>
          meet.aiengage.io/rj-3fk-9pq ·
          <span style={{ fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
            auto-generated
          </span>
        </div>
        <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
          content_copy
        </span>
      </div>
    </div>
  );
}

export function EmailNotificationMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '22px', position: 'relative', left: '12px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '13px', padding: '16px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '700', letterSpacing: '0.4px' }}>
            EMAIL TO CUSTOMER
          </span>
          <span style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '6px', padding: '2px 7px' }}>
            Sent
          </span>
        </div>
        <div style={{ fontSize: '9.5px', color: 'rgb(149, 136, 122)', marginBottom: '8px' }}>
          To: rohan.sharma@email.com
        </div>
        <div style={{ fontSize: '12px', fontWeight: '700', marginBottom: '10px' }}>
          Your meeting is confirmed — Demo Call
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
            <span style={{ color: 'rgb(149, 136, 122)' }}>
              Date
            </span>
            <span style={{ color: 'rgb(62, 54, 44)', fontWeight: '600' }}>
              26 Aug 2026
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
            <span style={{ color: 'rgb(149, 136, 122)' }}>
              Time
            </span>
            <span style={{ color: 'rgb(62, 54, 44)', fontWeight: '600' }}>
              3:00 PM IST
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
            <span style={{ color: 'rgb(149, 136, 122)' }}>
              Platform
            </span>
            <span style={{ color: 'rgb(62, 54, 44)', fontWeight: '600' }}>
              Zoom
            </span>
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: '10.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '9px', padding: '9px 0px' }}>
          Join Meeting
        </div>
      </div>
      <div>
        <div style={{ fontSize: '9.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', letterSpacing: '0.4px', marginBottom: '10px' }}>
          SIMPLE FLOW
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '9.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '7px 12px' }}>
            Meeting Created
          </span>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
            arrow_forward
          </span>
          <span style={{ fontSize: '9.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '7px 12px' }}>
            Link Generated
          </span>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
            arrow_forward
          </span>
          <span style={{ fontSize: '9.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '999px', padding: '7px 12px' }}>
            Customer Notified
          </span>
        </div>
        <div style={{ fontSize: '9px', color: 'rgb(149, 136, 122)', marginTop: '9px' }}>
          No manual email required.
        </div>
      </div>
    </div>
  );
}

export function GroupMeetingsMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '18px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '12px', fontWeight: '700' }}>
          Onboarding Call — Whitefield Accounts
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(18, 140, 75)', background: 'rgb(228, 245, 236)', borderRadius: '6px', padding: '3px 8px' }}>
          Group
        </span>
      </div>
      <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '8px' }}>
        PARTICIPANTS
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgb(255, 225, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
            RS
          </span>
          <span style={{ fontSize: '10px', color: 'rgb(62, 54, 44)' }}>
            Rohan Sharma
          </span>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(230, 74, 36)', background: 'rgb(255, 243, 234)', borderRadius: '5px', padding: '2px 6px' }}>
            Customer
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgb(255, 225, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
            SD
          </span>
          <span style={{ fontSize: '10px', color: 'rgb(62, 54, 44)' }}>
            Sneha Deshmukh
          </span>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(230, 74, 36)', background: 'rgb(255, 243, 234)', borderRadius: '5px', padding: '2px 6px' }}>
            Customer
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '700', color: 'rgb(18, 140, 75)' }}>
            MK
          </span>
          <span style={{ fontSize: '10px', color: 'rgb(62, 54, 44)' }}>
            Meera Kapoor
          </span>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(18, 140, 75)', background: 'rgb(228, 245, 236)', borderRadius: '5px', padding: '2px 6px' }}>
            Internal
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(61, 110, 246)', borderRadius: '6px', padding: '4px 9px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '12px' }}>
            videocam
          </span>
          Google Meet
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '6px', padding: '4px 9px' }}>
          Sales Demo
        </span>
      </div>
    </div>
  );
}

export function AiNotesMock() {
  return (
    <div className={styles.aiNotesRow} style={{ width: '95%', background: 'rgb(11, 21, 48)', border: '1px solid rgb(30, 43, 77)', borderRadius: '18px', padding: '16px', position: 'relative', left: '12px', minHeight: '400px' }}>
      <div style={{ flex: '1 1 0%', minWidth: '0px', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '13px', padding: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
            description
          </span>
          <span style={{ fontSize: '11px', fontWeight: '700' }}>
            Meeting Transcript
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
                Rep
              </span>
              <span style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)' }}>
                00:10
              </span>
            </div>
            <div style={{ fontSize: '9.5px', color: 'rgb(62, 54, 44)', lineHeight: '1.45' }}>
              Let&apos;s start with your current CRM setup.
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(18, 140, 75)' }}>
                Rohan
              </span>
              <span style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)' }}>
                00:26
              </span>
            </div>
            <div style={{ fontSize: '9.5px', color: 'rgb(62, 54, 44)', lineHeight: '1.45' }}>
              We use spreadsheets —
              <span style={{ background: 'rgb(255, 243, 234)', borderBottom: '1.5px solid rgb(255, 159, 128)', padding: '0px 2px' }}>
                need automated follow-ups
              </span>
              .
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
                Rep
              </span>
              <span style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)' }}>
                00:48
              </span>
            </div>
            <div style={{ fontSize: '9.5px', color: 'rgb(62, 54, 44)', lineHeight: '1.45' }}>
              Understood. Can we do onboarding by Monday?
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(18, 140, 75)' }}>
                Rohan
              </span>
              <span style={{ fontSize: '7.5px', color: 'rgb(149, 136, 122)' }}>
                01:05
              </span>
            </div>
            <div style={{ fontSize: '9.5px', color: 'rgb(62, 54, 44)', lineHeight: '1.45' }}>
              Yes, that works for our team.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aiNotesSummary} style={{ background: 'rgb(255, 95, 56)', borderRadius: '13px', padding: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 255, 255)' }}>
            summarize
          </span>
          <span style={{ fontSize: '10.5px', fontWeight: '700', color: 'rgb(255, 255, 255)' }}>
            AI Meeting Summary
          </span>
        </div>
        <div style={{ fontSize: '7.5px', color: 'rgb(255, 225, 214)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '3px' }}>
          KEY POINTS
        </div>
        <div style={{ fontSize: '9px', color: 'rgb(255, 255, 255)', lineHeight: '1.5', marginBottom: '8px' }}>
          Current setup: spreadsheets. Wants automated follow-ups.
        </div>
        <div style={{ fontSize: '7.5px', color: 'rgb(255, 225, 214)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '3px' }}>
          DECISIONS
        </div>
        <div style={{ fontSize: '9px', color: 'rgb(255, 255, 255)', lineHeight: '1.5', marginBottom: '8px' }}>
          Onboarding scheduled for Monday.
        </div>
        <div style={{ fontSize: '7.5px', color: 'rgb(255, 225, 214)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '3px' }}>
          NEXT STEPS
        </div>
        <div style={{ fontSize: '9px', color: 'rgb(255, 255, 255)', lineHeight: '1.5' }}>
          Send onboarding checklist & automation setup guide.
        </div>
      </div>
    </div>
  );
}

const TEAM_CALENDARS = [
  {
    stripe: 'rgb(255, 95, 56)',
    name: 'Sales Team',
    badge: 'Book a Demo',
    badgeColor: 'rgb(230, 74, 36)',
    badgeBg: 'rgb(255, 243, 234)',
    tags: ['Mon–Fri', '9am–6pm'],
    link: 'book.aiengage.io/sales-demo',
  },
  {
    stripe: 'rgb(31, 175, 100)',
    name: 'Customer Success',
    badge: 'Onboarding',
    badgeColor: 'rgb(18, 140, 75)',
    badgeBg: 'rgb(228, 245, 236)',
    tags: ['Mon–Sat', '10am–5pm'],
    link: 'book.aiengage.io/onboarding',
  },
  {
    stripe: 'rgb(61, 110, 246)',
    name: 'Support Team',
    badge: 'Support Call',
    badgeColor: 'rgb(101, 90, 78)',
    badgeBg: 'rgb(250, 247, 241)',
    badgeBorder: '1px solid rgb(232, 224, 210)',
    tags: ['All days', '24/7'],
    link: 'book.aiengage.io/support',
  },
];

export function TeamBookingCalendarsMock() {
  return (
    <div style={{ width: '95%', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '400px', justifyContent: 'center' }}>
      {TEAM_CALENDARS.map((cal) => (
        <div key={cal.name} style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', display: 'flex' }}>
          <div style={{ width: '6px', background: cal.stripe, flexShrink: '0' }} />
          <div style={{ flex: '1 1 0%', padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '9px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700' }}>{cal.name}</span>
              <span style={{ fontSize: '8px', fontWeight: '700', color: cal.badgeColor, background: cal.badgeBg, border: cal.badgeBorder, borderRadius: '6px', padding: '3px 8px' }}>
                {cal.badge}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '9px' }}>
              {cal.tags.map((tag) => (
                <span key={tag} style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '4px 10px' }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: 'rgb(149, 136, 122)' }}>
              <span className="material-symbols-rounded" style={{ fontSize: '14px', color: cal.stripe }}>
                link
              </span>
              {cal.link}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AvailabilityHoursMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '22px', position: 'relative', left: '12px', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '13px', padding: '16px', width: '100%' }}>
        <div style={{ fontSize: '11.5px', fontWeight: '700', marginBottom: '12px' }}>
          Working Hours & Availability
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '52px repeat(7, 1fr)', gap: '4px', marginBottom: '10px' }}>
          <span />
          <span style={{ textAlign: 'center', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)' }}>
            Mon
          </span>
          <span style={{ textAlign: 'center', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)' }}>
            Tue
          </span>
          <span style={{ textAlign: 'center', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)' }}>
            Wed
          </span>
          <span style={{ textAlign: 'center', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)' }}>
            Thu
          </span>
          <span style={{ textAlign: 'center', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)' }}>
            Fri
          </span>
          <span style={{ textAlign: 'center', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)' }}>
            Sat
          </span>
          <span style={{ textAlign: 'center', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)' }}>
            Sun
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '52px repeat(7, 1fr)', gap: '4px', marginBottom: '4px' }}>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
            9 – 11am
          </span>
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(240, 233, 220)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(240, 233, 220)', borderRadius: '5px', height: '16px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '52px repeat(7, 1fr)', gap: '4px', marginBottom: '4px' }}>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
            11 – 2pm
          </span>
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(240, 233, 220)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(240, 233, 220)', borderRadius: '5px', height: '16px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '52px repeat(7, 1fr)', gap: '4px', marginBottom: '14px' }}>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
            2 – 6pm
          </span>
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(255, 95, 56)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(240, 233, 220)', borderRadius: '5px', height: '16px' }} />
          <span style={{ background: 'rgb(240, 233, 220)', borderRadius: '5px', height: '16px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8.5px', color: 'rgb(101, 90, 78)' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '2px', background: 'rgb(255, 95, 56)' }} />
            Bookable
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8.5px', color: 'rgb(101, 90, 78)' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '2px', background: 'rgb(240, 233, 220)' }} />
            Blocked
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgb(228, 245, 236)', borderRadius: '10px', padding: '9px 11px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(18, 140, 75)' }}>
            check_circle
          </span>
          <span style={{ fontSize: '9.5px', color: 'rgb(15, 107, 57)' }}>
            Bookable only within set hours
          </span>
        </div>
      </div>
    </div>
  );
}

export function UnifiedCalendarMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '12px', fontWeight: '700' }}>
          Week of 24 – 30 Aug
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '7px', padding: '4px 9px' }}>
          Week ▾
        </span>
      </div>
      <div className={styles.calendarGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0px, 1fr))', gap: '5px' }}>
        <div className={styles.calendarDay} style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '6px', minHeight: '150px', minWidth: '0px', overflow: 'hidden' }}>
          <div style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(149, 136, 122)', marginBottom: '5px' }}>
            MON 24
          </div>
          <div style={{ fontSize: '7.5px', background: 'rgb(255, 243, 234)', color: 'rgb(230, 74, 36)', borderRadius: '4px', padding: '2px 4px', marginBottom: '3px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            10:00 Demo
          </div>
        </div>
        <div className={styles.calendarDay} style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '6px', minHeight: '150px', minWidth: '0px', overflow: 'hidden' }}>
          <div style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(149, 136, 122)', marginBottom: '5px' }}>
            TUE 25
          </div>
        </div>
        <div className={styles.calendarDay} style={{ background: 'rgb(255, 243, 234)', border: '1px solid rgb(255, 159, 128)', borderRadius: '8px', padding: '6px', minHeight: '150px', minWidth: '0px', overflow: 'hidden' }}>
          <div style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(230, 74, 36)', marginBottom: '5px' }}>
            WED 26
          </div>
          <div style={{ fontSize: '7.5px', background: 'rgb(255, 255, 255)', color: 'rgb(230, 74, 36)', borderRadius: '4px', padding: '2px 4px', marginBottom: '3px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            3:00 Demo
          </div>
          <div style={{ fontSize: '7.5px', background: 'rgb(255, 255, 255)', color: 'rgb(61, 110, 246)', borderRadius: '4px', padding: '2px 4px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            4:30 Sync
          </div>
        </div>
        <div className={styles.calendarDay} style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '6px', minHeight: '150px', minWidth: '0px', overflow: 'hidden' }}>
          <div style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(149, 136, 122)', marginBottom: '5px' }}>
            THU 27
          </div>
          <div style={{ fontSize: '7.5px', background: 'rgb(228, 245, 236)', color: 'rgb(18, 140, 75)', borderRadius: '4px', padding: '2px 4px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            11:00 Onboarding
          </div>
        </div>
        <div className={styles.calendarDay} style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '6px', minHeight: '150px', minWidth: '0px', overflow: 'hidden' }}>
          <div style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(149, 136, 122)', marginBottom: '5px' }}>
            FRI 28
          </div>
        </div>
        <div className={styles.calendarDay} style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '6px', minHeight: '150px', minWidth: '0px', overflow: 'hidden' }}>
          <div style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(176, 168, 153)', marginBottom: '5px' }}>
            SAT 29
          </div>
        </div>
        <div className={styles.calendarDay} style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '8px', padding: '6px', minHeight: '150px', minWidth: '0px', overflow: 'hidden' }}>
          <div style={{ fontSize: '8px', fontWeight: '700', color: 'rgb(176, 168, 153)', marginBottom: '5px' }}>
            SUN 30
          </div>
        </div>
      </div>
    </div>
  );
}

export function KanbanViewMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '20px', position: 'relative', left: '12px', display: 'flex', gap: '10px', minHeight: '400px', alignItems: 'center' }}>
      <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
        <div style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', marginBottom: '9px' }}>
          SCHEDULED
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '9px 10px', marginBottom: '8px' }}>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '5px' }}>
            Whitefield Demo
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              10:00 AM
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgb(255, 225, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
              RS
            </span>
          </div>
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '9px 10px' }}>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '5px' }}>
            ERP Discovery
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              2:00 PM
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: 'rgb(18, 140, 75)' }}>
              RV
            </span>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
        <div style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', marginBottom: '9px' }}>
          IN PROGRESS
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '9px 10px' }}>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '5px' }}>
            Clinic Onboarding
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              11:00 AM
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: 'rgb(18, 140, 75)' }}>
              PN
            </span>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
        <div style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', marginBottom: '9px' }}>
          DONE
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '9px 10px', marginBottom: '8px' }}>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '5px' }}>
            Campus LMS Call
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              9:00 AM
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: 'rgb(18, 140, 75)' }}>
              MK
            </span>
          </div>
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '9px 10px' }}>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '5px' }}>
            Support Sync
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              4:30 PM
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgb(255, 225, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: 'rgb(230, 74, 36)' }}>
              JC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImportHistoryMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '22px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
            upload_file
          </span>
          <span style={{ fontSize: '12px', fontWeight: '700' }}>
            Importing Meeting History
          </span>
        </div>
        <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(176, 125, 11)', background: 'rgb(255, 240, 214)', borderRadius: '7px', padding: '4px 9px' }}>
          In progress
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '7px' }}>
        <span style={{ fontSize: '9.5px', fontWeight: '700' }}>
          68% complete
        </span>
        <span style={{ fontSize: '9px', color: 'rgb(149, 136, 122)' }}>
          412 of 600 meetings
        </span>
      </div>
      <div style={{ height: '9px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden', marginBottom: '16px' }}>
        <div style={{ height: '100%', width: '68%', background: 'rgb(255, 95, 56)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(31, 175, 100)' }}>
            check_circle
          </span>
          <span style={{ flex: '1 1 0%', fontSize: '10px', color: 'rgb(62, 54, 44)' }}>
            Past meetings imported
          </span>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
            Just now
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(31, 175, 100)' }}>
            check_circle
          </span>
          <span style={{ flex: '1 1 0%', fontSize: '10px', color: 'rgb(62, 54, 44)' }}>
            Historical meeting notes imported
          </span>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
            2m ago
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 11px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(176, 125, 11)' }}>
            sync
          </span>
          <span style={{ flex: '1 1 0%', fontSize: '10px', color: 'rgb(62, 54, 44)' }}>
            Customer meeting history importing
          </span>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
            In progress
          </span>
        </div>
      </div>
    </div>
  );
}

export function WebsiteEmbedMock() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '14px' }}>
        <div style={{ border: '1px solid rgb(232, 224, 210)', borderRadius: '10px 10px 0px 0px', padding: '7px 10px', background: 'rgb(250, 247, 241)', display: 'flex', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(224, 201, 188)' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(224, 201, 188)' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(224, 201, 188)' }} />
          <span style={{ flex: '1 1 0%', textAlign: 'center', fontSize: '8.5px', color: 'rgb(149, 136, 122)' }}>
            yourcompany.com/book-a-demo
          </span>
        </div>
        <div style={{ borderWidth: 'medium 1px 1px', borderStyle: 'none solid solid', borderColor: 'currentcolor rgb(232, 224, 210) rgb(232, 224, 210)', borderImage: 'none', borderRadius: '0px 0px 10px 10px', padding: '16px 14px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', marginBottom: '3px' }}>
            Book a Free Demo
          </div>
          <div style={{ fontSize: '9px', color: 'rgb(149, 136, 122)', marginBottom: '12px' }}>
            See AiEngage in action — pick a time that works for you.
          </div>
          <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px', padding: '11px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '9px' }}>
              <span style={{ textAlign: 'center', fontSize: '9px', fontWeight: '600', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '7px', padding: '6px 0px' }}>
                Mon
              </span>
              <span style={{ textAlign: 'center', fontSize: '9px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '7px', padding: '6px 0px' }}>
                Tue
              </span>
              <span style={{ textAlign: 'center', fontSize: '9px', fontWeight: '600', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '7px', padding: '6px 0px' }}>
                Wed
              </span>
              <span style={{ textAlign: 'center', fontSize: '9px', fontWeight: '600', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '7px', padding: '6px 0px' }}>
                Thu
              </span>
            </div>
            <div style={{ textAlign: 'center', fontSize: '9.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '8px', padding: '8px 0px' }}>
              View Available Times
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '95%', marginTop: '16px', background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '14px', padding: '16px 18px' }}>
        <div style={{ fontSize: '9.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', letterSpacing: '0.4px', marginBottom: '12px' }}>
          VISITOR JOURNEY
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '10.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '7px 14px' }}>
            Visitor lands on website
          </span>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)', padding: '2px 0px 2px 16px' }}>
            arrow_downward
          </span>
          <span style={{ fontSize: '10.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '7px 14px' }}>
            Views available slots
          </span>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)', padding: '2px 0px 2px 16px' }}>
            arrow_downward
          </span>
          <span style={{ fontSize: '10.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '7px 14px' }}>
            Selects a time
          </span>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)', padding: '2px 0px 2px 16px' }}>
            arrow_downward
          </span>
          <span style={{ fontSize: '10.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '7px 14px' }}>
            Meeting booked
          </span>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(31, 175, 100)', padding: '2px 0px 2px 16px' }}>
            arrow_downward
          </span>
          <span style={{ fontSize: '10.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(31, 175, 100)', borderRadius: '999px', padding: '7px 14px' }}>
            Added to AiEngage CRM
          </span>
        </div>
      </div>
    </div>
  );
}

const FLOW_STEPS = [
  { icon: 'person', label: 'Customer Books' },
  { icon: 'event', label: 'Meeting Created' },
  { icon: 'videocam', label: 'Zoom / Google Meet Link' },
  { icon: 'notifications', label: 'Customer Notified' },
  { icon: 'groups', label: 'Meeting Happens' },
  { icon: 'summarize', label: 'Transcript + AI Summary' },
  { icon: 'task_alt', label: 'Follow-Up' },
];

export function MeetingFlowMock() {
  const items = [];
  FLOW_STEPS.forEach((step, i) => {
    const isLast = i === FLOW_STEPS.length - 1;
    items.push(
      <span
        key={step.label}
        style={
          isLast
            ? { display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '999px', padding: '13px 22px' }
            : { display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '999px', padding: '13px 22px' }
        }
      >
        <span className="material-symbols-rounded" style={{ fontSize: '17px', color: isLast ? 'rgb(255, 255, 255)' : 'rgb(255, 95, 56)' }}>
          {step.icon}
        </span>
        {step.label}
      </span>
    );
    if (!isLast) {
      items.push(
        <span key={`${step.label}-arrow`} className="material-symbols-rounded" style={{ fontSize: '18px', color: 'rgb(255, 95, 56)' }}>
          arrow_forward
        </span>
      );
    }
  });
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px 12px', flexWrap: 'wrap' }}>{items}</div>;
}
