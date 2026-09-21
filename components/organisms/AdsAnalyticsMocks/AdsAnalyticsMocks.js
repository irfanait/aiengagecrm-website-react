/**
 * Every mock below is markup extracted directly from the "AiEngage Ads & Analytics" design
 * source for that section's own card (same tags, inline styles and text — not a hand-recreated
 * CSS approximation), so it matches the design exactly rather than an ongoing best-effort guess.
 */

export function AdsOverviewMock() {
  return (
    <div style={{ width: '100%', boxSizing: 'border-box', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.3) 0px 24px 60px -26px', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '700' }}>
          Advertising Overview
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '7px', padding: '4px 9px' }}>
          Last 30 days ▾
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px', marginBottom: '12px' }}>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 10px' }}>
          <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            SPEND
          </div>
          <div style={{ fontSize: '15px', fontWeight: '700' }}>
            ₹4.8L
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 10px' }}>
          <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            LEADS
          </div>
          <div style={{ fontSize: '15px', fontWeight: '700' }}>
            1,204
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 10px' }}>
          <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            CPL
          </div>
          <div style={{ fontSize: '15px', fontWeight: '700' }}>
            ₹399
          </div>
        </div>
        <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px', padding: '9px 10px' }}>
          <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '600' }}>
            ROAS
          </div>
          <div style={{ fontSize: '15px', fontWeight: '700', color: 'rgb(31, 175, 100)' }}>
            4.6x ▲
          </div>
        </div>
      </div>
      <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '12px', padding: '11px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '10px', fontWeight: '700' }}>
            Leads by Platform
          </span>
          <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
            Daily
          </span>
        </div>
        <svg viewBox="0 0 220 70" preserveAspectRatio="none" style={{ width: '100%', height: '70px' }}>
          <g fill="#FF5F38">
            <rect x="4" y="30" width="9" height="40" />
            <rect x="27" y="20" width="9" height="50" />
            <rect x="50" y="34" width="9" height="36" />
            <rect x="73" y="16" width="9" height="54" />
            <rect x="96" y="26" width="9" height="44" />
            <rect x="119" y="12" width="9" height="58" />
            <rect x="142" y="22" width="9" height="48" />
            <rect x="165" y="8" width="9" height="62" />
            <rect x="188" y="18" width="9" height="52" />
          </g>
          <g fill="#FFD3BE">
            <rect x="15" y="46" width="9" height="24" />
            <rect x="38" y="40" width="9" height="30" />
            <rect x="61" y="50" width="9" height="20" />
            <rect x="84" y="42" width="9" height="28" />
            <rect x="107" y="48" width="9" height="22" />
            <rect x="130" y="38" width="9" height="32" />
            <rect x="153" y="44" width="9" height="26" />
            <rect x="176" y="36" width="9" height="34" />
            <rect x="199" y="46" width="9" height="24" />
          </g>
        </svg>
        <div style={{ display: 'flex', gap: '14px', marginTop: '6px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8.5px', color: 'rgb(101, 90, 78)' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '2px', background: 'rgb(255, 95, 56)' }} />
            Meta
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8.5px', color: 'rgb(101, 90, 78)' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '2px', background: 'rgb(255, 211, 190)' }} />
            Google
          </span>
        </div>
      </div>
    </div>
  );
}

export function MetaLeadAdsMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '13px', fontWeight: '700' }}>
          Meta Lead Ads
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '7px', padding: '4px 9px' }}>
          Connected
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
            description
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10px', fontWeight: '600' }}>
              Whitefield Launch Form
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Facebook · 312 leads
            </div>
          </div>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '5px', padding: '2px 6px' }}>
            Active
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
            description
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10px', fontWeight: '600' }}>
              Free Consultation Form
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Instagram · 198 leads
            </div>
          </div>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '5px', padding: '2px 6px' }}>
            Active
          </span>
        </div>
      </div>
      <div style={{ background: 'rgb(250, 247, 241)', border: '1px solid rgb(239, 232, 220)', borderRadius: '12px', padding: '10px 12px' }}>
        <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)', fontWeight: '700', letterSpacing: '0.4px', marginBottom: '8px' }}>
          LIVE LEAD CAPTURE
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: '1 1 0%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '8px 10px' }}>
            <div style={{ fontSize: '9.5px', fontWeight: '600' }}>
              Kavya Reddy
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Whitefield Launch Form · just now
            </div>
          </div>
          <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(149, 136, 122)' }}>
            arrow_forward
          </span>
          <div style={{ flex: '1 1 0%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: '700', color: 'rgb(18, 140, 75)' }}>
              KR
            </span>
            <div style={{ fontSize: '9px', fontWeight: '600' }}>
              New Contact
            </div>
            <span style={{ fontSize: '7px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '5px', padding: '2px 5px', marginLeft: 'auto' }}>
              Synced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GoogleLeadAdsMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px', position: 'relative', left: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '11px' }}>
        <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
          ads_click
        </span>
        <span style={{ fontSize: '13px', fontWeight: '700' }}>
          Google Lead Form — Field Mapping
        </span>
      </div>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', borderBottom: '1px solid rgb(232, 224, 210)', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', letterSpacing: '0.4px', background: 'rgb(251, 248, 242)' }}>
          <span style={{ flex: '1 1 0%' }}>
            GOOGLE FORM FIELD
          </span>
          <span style={{ flex: '0.4 1 0%', textAlign: 'center' }} />
          <span style={{ flex: '1 1 0%' }}>
            CRM FIELD
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9.5px' }}>
          <span style={{ flex: '1 1 0%' }}>
            Full name
          </span>
          <span style={{ flex: '0.4 1 0%', textAlign: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '14px', color: 'rgb(255, 95, 56)' }}>
              arrow_forward
            </span>
          </span>
          <span style={{ flex: '1 1 0%', fontWeight: '600' }}>
            Contact Name
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9.5px' }}>
          <span style={{ flex: '1 1 0%' }}>
            Phone number
          </span>
          <span style={{ flex: '0.4 1 0%', textAlign: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '14px', color: 'rgb(255, 95, 56)' }}>
              arrow_forward
            </span>
          </span>
          <span style={{ flex: '1 1 0%', fontWeight: '600' }}>
            Mobile
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9.5px' }}>
          <span style={{ flex: '1 1 0%' }}>
            Email
          </span>
          <span style={{ flex: '0.4 1 0%', textAlign: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '14px', color: 'rgb(255, 95, 56)' }}>
              arrow_forward
            </span>
          </span>
          <span style={{ flex: '1 1 0%', fontWeight: '600' }}>
            Email
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', fontSize: '9.5px' }}>
          <span style={{ flex: '1 1 0%' }}>
            Preferred city
          </span>
          <span style={{ flex: '0.4 1 0%', textAlign: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '14px', color: 'rgb(255, 95, 56)' }}>
              arrow_forward
            </span>
          </span>
          <span style={{ flex: '1 1 0%', fontWeight: '600' }}>
            Location
          </span>
        </div>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '9px', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px', padding: '8px 11px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(31, 175, 100)' }} />
        <span style={{ fontSize: '9px', color: 'rgb(62, 54, 44)' }}>
          Synced 4 minutes ago · 86 leads today
        </span>
      </div>
    </div>
  );
}

export function OfflineCampaignsMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '13px', fontWeight: '700' }}>
          Custom Advertising Sources
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(255, 95, 56)', background: 'rgb(255, 243, 234)', borderRadius: '7px', padding: '4px 9px', display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '13px' }}>
            add
          </span>
          Add Source
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'rgb(255, 243, 234)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
              newspaper
            </span>
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
              Times of India — Print
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Newspaper · manually tracked
            </div>
          </div>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(101, 90, 78)', background: 'rgb(243, 238, 228)', borderRadius: '5px', padding: '2px 6px' }}>
            42 leads
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(18, 140, 75)' }}>
              radio
            </span>
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
              Radio City Spot
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Radio · manually tracked
            </div>
          </div>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(101, 90, 78)', background: 'rgb(243, 238, 228)', borderRadius: '5px', padding: '2px 6px' }}>
            17 leads
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'rgb(255, 243, 234)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(255, 95, 56)' }}>
              signpost
            </span>
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
              ORR Hoarding — Site 4
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Outdoor · manually tracked
            </div>
          </div>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(101, 90, 78)', background: 'rgb(243, 238, 228)', borderRadius: '5px', padding: '2px 6px' }}>
            9 leads
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(18, 140, 75)' }}>
              event
            </span>
          </span>
          <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
            <div style={{ fontSize: '10.5px', fontWeight: '600' }}>
              Property Expo 2026
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Event · manually tracked
            </div>
          </div>
          <span style={{ fontSize: '7.5px', fontWeight: '700', color: 'rgb(101, 90, 78)', background: 'rgb(243, 238, 228)', borderRadius: '5px', padding: '2px 6px' }}>
            63 leads
          </span>
        </div>
      </div>
    </div>
  );
}

export function AdIntegrationsMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px', position: 'relative', left: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '11px', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px', padding: '8px 11px' }}>
        <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(149, 136, 122)' }}>
          search
        </span>
        <span style={{ flex: '1 1 0%', fontSize: '9.5px', color: 'rgb(149, 136, 122)' }}>
          Search integrations…
        </span>
        <span style={{ fontSize: '8px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(250, 247, 241)', borderRadius: '6px', padding: '3px 7px' }}>
          Advertising ▾
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '11px', padding: '10px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgb(255, 243, 234)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '7px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
              group
            </span>
          </span>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '3px' }}>
            Meta Ads
          </div>
          <span style={{ fontSize: '7px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '5px', padding: '2px 6px' }}>
            Connected
          </span>
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '11px', padding: '10px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '7px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(18, 140, 75)' }}>
              ads_click
            </span>
          </span>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '3px' }}>
            Google Ads
          </div>
          <span style={{ fontSize: '7px', fontWeight: '700', color: 'rgb(31, 175, 100)', background: 'rgb(228, 245, 236)', borderRadius: '5px', padding: '2px 6px' }}>
            Connected
          </span>
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '11px', padding: '10px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgb(255, 240, 214)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '7px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(176, 125, 11)' }}>
              sync
            </span>
          </span>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '3px' }}>
            Custom Source
          </div>
          <span style={{ fontSize: '7px', fontWeight: '700', color: 'rgb(176, 125, 11)', background: 'rgb(255, 240, 214)', borderRadius: '5px', padding: '2px 6px' }}>
            Syncing
          </span>
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px dashed rgb(216, 205, 189)', borderRadius: '11px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgb(243, 238, 228)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '7px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(149, 136, 122)' }}>
              add
            </span>
          </span>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '3px', color: 'rgb(149, 136, 122)' }}>
            Request New
          </div>
          <span style={{ fontSize: '7px', color: 'rgb(149, 136, 122)' }}>
            Integration
          </span>
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '11px', padding: '10px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgb(255, 243, 234)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '7px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
              tune
            </span>
          </span>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '3px' }}>
            Conversion Settings
          </div>
          <span style={{ fontSize: '7px', fontWeight: '700', color: 'rgb(101, 90, 78)', background: 'rgb(243, 238, 228)', borderRadius: '5px', padding: '2px 6px' }}>
            Configured
          </span>
        </div>
        <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '11px', padding: '10px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgb(228, 245, 236)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '7px' }}>
            <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(18, 140, 75)' }}>
              menu_book
            </span>
          </span>
          <div style={{ fontSize: '9.5px', fontWeight: '700', marginBottom: '3px' }}>
            Docs
          </div>
          <span style={{ fontSize: '7px', color: 'rgb(149, 136, 122)' }}>
            View guides
          </span>
        </div>
      </div>
    </div>
  );
}

export function OfflineReportingMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px' }}>
      <div style={{ fontSize: '13px', fontWeight: '700', marginBottom: '11px' }}>
        Offline Channel Report
      </div>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', borderBottom: '1px solid rgb(232, 224, 210)', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', letterSpacing: '0.4px', background: 'rgb(251, 248, 242)' }}>
          <span style={{ flex: '1.6 1 0%' }}>
            CHANNEL
          </span>
          <span style={{ flex: '1 1 0%', textAlign: 'right' }}>
            SPEND
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            LEADS
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            CPL
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9.5px' }}>
          <span style={{ flex: '1.6 1 0%', fontWeight: '600' }}>
            Newspapers
          </span>
          <span style={{ flex: '1 1 0%', textAlign: 'right' }}>
            ₹85,000
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            42
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', fontWeight: '700' }}>
            ₹2,024
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9.5px' }}>
          <span style={{ flex: '1.6 1 0%', fontWeight: '600' }}>
            Radio
          </span>
          <span style={{ flex: '1 1 0%', textAlign: 'right' }}>
            ₹40,000
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            17
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', fontWeight: '700' }}>
            ₹2,353
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9.5px' }}>
          <span style={{ flex: '1.6 1 0%', fontWeight: '600' }}>
            Hoardings
          </span>
          <span style={{ flex: '1 1 0%', textAlign: 'right' }}>
            ₹1,20,000
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            9
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', fontWeight: '700', color: 'rgb(192, 80, 58)' }}>
            ₹13,333
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9.5px' }}>
          <span style={{ flex: '1.6 1 0%', fontWeight: '600' }}>
            Events & Exhibitions
          </span>
          <span style={{ flex: '1 1 0%', textAlign: 'right' }}>
            ₹2,10,000
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            63
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', fontWeight: '700' }}>
            ₹3,333
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 12px', fontSize: '9.5px' }}>
          <span style={{ flex: '1.6 1 0%', fontWeight: '600' }}>
            Referral Partnerships
          </span>
          <span style={{ flex: '1 1 0%', textAlign: 'right' }}>
            ₹0
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            28
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', fontWeight: '700', color: 'rgb(31, 175, 100)' }}>
            ₹0
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 12px', borderTop: '2px solid rgb(232, 224, 210)', fontSize: '9.5px', background: 'rgb(0, 9, 35)' }}>
          <span style={{ flex: '1.6 1 0%', fontWeight: '700', color: 'rgb(255, 255, 255)' }}>
            Total Offline
          </span>
          <span style={{ flex: '1 1 0%', textAlign: 'right', fontWeight: '700', color: 'rgb(255, 122, 82)' }}>
            ₹4,55,000
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', color: 'rgb(152, 163, 190)' }}>
            159
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', color: 'rgb(152, 163, 190)' }}>
            ₹2,862
          </span>
        </div>
      </div>
    </div>
  );
}

export function CostPerLeadMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px', position: 'relative', left: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '13px', fontWeight: '700' }}>
          Cost Per Lead by Campaign
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '7px', padding: '4px 8px' }}>
          ₹ INR
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '4px' }}>
            <span style={{ fontWeight: '600' }}>
              Whitefield Launch (Meta)
            </span>
            <span style={{ fontWeight: '700', color: 'rgb(31, 175, 100)' }}>
              ₹287
            </span>
          </div>
          <div style={{ height: '10px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '32%', background: 'rgb(31, 175, 100)', borderRadius: '5px' }} />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '4px' }}>
            <span style={{ fontWeight: '600' }}>
              Free Consultation (Meta)
            </span>
            <span style={{ fontWeight: '700' }}>
              ₹410
            </span>
          </div>
          <div style={{ height: '10px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '46%', background: 'rgb(255, 95, 56)', borderRadius: '5px' }} />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '4px' }}>
            <span style={{ fontWeight: '600' }}>
              Search — Home Loans (Google)
            </span>
            <span style={{ fontWeight: '700' }}>
              ₹512
            </span>
          </div>
          <div style={{ height: '10px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '58%', background: 'rgb(255, 95, 56)', borderRadius: '5px' }} />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '4px' }}>
            <span style={{ fontWeight: '600' }}>
              Display Retargeting (Google)
            </span>
            <span style={{ fontWeight: '700', color: 'rgb(192, 80, 58)' }}>
              ₹889
            </span>
          </div>
          <div style={{ height: '10px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '100%', background: 'rgb(192, 80, 58)', borderRadius: '5px' }} />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '4px' }}>
            <span style={{ fontWeight: '600' }}>
              Property Expo (Offline)
            </span>
            <span style={{ fontWeight: '700' }}>
              ₹3,333
            </span>
          </div>
          <div style={{ height: '10px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '70%', background: 'rgb(255, 144, 104)', borderRadius: '5px' }} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '11px', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '10px', padding: '9px 11px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="material-symbols-rounded" style={{ fontSize: '16px', color: 'rgb(31, 175, 100)' }}>
          lightbulb
        </span>
        <div style={{ fontSize: '9px', color: 'rgb(62, 54, 44)', lineHeight: '1.4' }}>
          <span style={{ fontWeight: '700' }}>
            Whitefield Launch
          </span>
          has the lowest CPL this month — consider reallocating budget.
        </div>
      </div>
    </div>
  );
}

export function RevenueRoasMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '9px' }}>
        <span style={{ fontSize: '13px', fontWeight: '700' }}>
          Revenue From Ads
        </span>
        <span style={{ fontSize: '14px', fontWeight: '700', color: 'rgb(31, 175, 100)' }}>
          4.6x ROAS ▲
        </span>
      </div>
      <svg viewBox="0 0 400 90" preserveAspectRatio="none" style={{ width: '100%', height: '90px' }}>
        <polyline points="4,70 44,64 84,58 124,52 164,44 204,40 244,30 284,26 324,16 364,10 396,6" fill="none" stroke="#FF5F38" strokeWidth="3" />
        <polygon points="4,70 44,64 84,58 124,52 164,44 204,40 244,30 284,26 324,16 364,10 396,6 396,90 4,90" fill="#FFEFE7" />
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px', marginBottom: '12px' }}>
        <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
          Mar
        </span>
        <span style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
          Aug
        </span>
      </div>
      <div style={{ fontSize: '10px', fontWeight: '700', marginBottom: '9px' }}>
        Revenue by Platform
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '56px', fontSize: '8.5px', color: 'rgb(101, 90, 78)', flexShrink: '0' }}>
            Meta
          </span>
          <div style={{ flex: '1 1 0%', height: '9px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '66%', background: 'rgb(255, 95, 56)', borderRadius: '5px' }} />
          </div>
          <span style={{ width: '52px', fontSize: '8.5px', fontWeight: '700', textAlign: 'right' }}>
            ₹86.4L
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '56px', fontSize: '8.5px', color: 'rgb(101, 90, 78)', flexShrink: '0' }}>
            Google
          </span>
          <div style={{ flex: '1 1 0%', height: '9px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '44%', background: 'rgb(255, 144, 104)', borderRadius: '5px' }} />
          </div>
          <span style={{ width: '52px', fontSize: '8.5px', fontWeight: '700', textAlign: 'right' }}>
            ₹57.1L
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '56px', fontSize: '8.5px', color: 'rgb(101, 90, 78)', flexShrink: '0' }}>
            Offline
          </span>
          <div style={{ flex: '1 1 0%', height: '9px', borderRadius: '5px', background: 'rgb(232, 224, 210)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '18%', background: 'rgb(0, 9, 35)', borderRadius: '5px' }} />
          </div>
          <span style={{ width: '52px', fontSize: '8.5px', fontWeight: '700', textAlign: 'right' }}>
            ₹23.8L
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlatformComparisonMock() {
  return (
    <div style={{ width: '97%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px' }}>
      <div style={{ fontSize: '13px', fontWeight: '700', marginBottom: '11px' }}>
        Platform Comparison · July FY26
      </div>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', borderBottom: '1px solid rgb(232, 224, 210)', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', letterSpacing: '0.3px', background: 'rgb(251, 248, 242)' }}>
          <span style={{ flex: '1.3 1 0%' }}>
            PLATFORM
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            SPEND
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            LEADS
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            CPL
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            REVENUE
          </span>
          <span style={{ flex: '0.7 1 0%', textAlign: 'right' }}>
            ROAS
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9px' }}>
          <span style={{ flex: '1.3 1 0%', fontWeight: '600' }}>
            Meta Ads
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            ₹2.1L
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            510
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            ₹412
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right', fontWeight: '700' }}>
            ₹86.4L
          </span>
          <span style={{ flex: '0.7 1 0%', textAlign: 'right', color: 'rgb(31, 175, 100)', fontWeight: '700' }}>
            4.1x
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9px' }}>
          <span style={{ flex: '1.3 1 0%', fontWeight: '600' }}>
            Google Ads
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            ₹2.3L
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            535
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            ₹430
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right', fontWeight: '700' }}>
            ₹57.1L
          </span>
          <span style={{ flex: '0.7 1 0%', textAlign: 'right', color: 'rgb(31, 175, 100)', fontWeight: '700' }}>
            2.5x
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', fontSize: '9px' }}>
          <span style={{ flex: '1.3 1 0%', fontWeight: '600' }}>
            Offline Sources
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            ₹4.6L
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            159
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            ₹2,862
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right', fontWeight: '700' }}>
            ₹23.8L
          </span>
          <span style={{ flex: '0.7 1 0%', textAlign: 'right', color: 'rgb(192, 80, 58)', fontWeight: '700' }}>
            0.5x
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 11px', borderTop: '2px solid rgb(232, 224, 210)', fontSize: '9px', background: 'rgb(0, 9, 35)' }}>
          <span style={{ flex: '1.3 1 0%', fontWeight: '700', color: 'rgb(255, 255, 255)' }}>
            Total
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right', fontWeight: '700', color: 'rgb(255, 122, 82)' }}>
            ₹9.0L
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', color: 'rgb(152, 163, 190)' }}>
            1,204
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right', color: 'rgb(152, 163, 190)' }}>
            ₹748
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right', fontWeight: '700', color: 'rgb(255, 122, 82)' }}>
            ₹1.67Cr
          </span>
          <span style={{ flex: '0.7 1 0%', textAlign: 'right', color: 'rgb(152, 163, 190)' }}>
            4.6x
          </span>
        </div>
      </div>
    </div>
  );
}

export function ReportingSourcesMock() {
  return (
    <div style={{ width: '95%', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px' }}>
      <div style={{ fontSize: '13px', fontWeight: '700', marginBottom: '11px' }}>
        Reporting Sources
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '11px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ fontSize: '10px', fontWeight: '600' }}>
              Meta Ads
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Facebook + Instagram account
            </div>
          </div>
          <span style={{ width: '34px', height: '19px', borderRadius: '999px', background: 'rgb(255, 95, 56)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '2px', right: '2px', width: '15px', height: '15px', borderRadius: '50%', background: 'rgb(255, 255, 255)' }} />
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ fontSize: '10px', fontWeight: '600' }}>
              Google Ads
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Lead form + search account
            </div>
          </div>
          <span style={{ width: '34px', height: '19px', borderRadius: '999px', background: 'rgb(255, 95, 56)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '2px', right: '2px', width: '15px', height: '15px', borderRadius: '50%', background: 'rgb(255, 255, 255)' }} />
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ fontSize: '10px', fontWeight: '600' }}>
              Radio City Spot
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Manually tracked · offline
            </div>
          </div>
          <span style={{ width: '34px', height: '19px', borderRadius: '999px', background: 'rgb(232, 224, 210)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '2px', left: '2px', width: '15px', height: '15px', borderRadius: '50%', background: 'rgb(255, 255, 255)' }} />
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', border: '1px solid rgb(239, 232, 220)', borderRadius: '11px' }}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ fontSize: '10px', fontWeight: '600' }}>
              2024 Print Campaign
            </div>
            <div style={{ fontSize: '8px', color: 'rgb(149, 136, 122)' }}>
              Manually tracked · offline
            </div>
          </div>
          <span style={{ width: '34px', height: '19px', borderRadius: '999px', background: 'rgb(232, 224, 210)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '2px', left: '2px', width: '15px', height: '15px', borderRadius: '50%', background: 'rgb(255, 255, 255)' }} />
          </span>
        </div>
      </div>
      <div style={{ background: 'rgb(255, 243, 234)', border: '1px dashed rgb(255, 159, 128)', borderRadius: '10px', padding: '9px 11px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="material-symbols-rounded" style={{ fontSize: '15px', color: 'rgb(255, 95, 56)' }}>
          history
        </span>
        <div style={{ fontSize: '9px', color: 'rgb(62, 54, 44)', lineHeight: '1.4' }}>
          Hidden sources keep their historical data in past reports.
        </div>
      </div>
    </div>
  );
}

export function CampaignReportsMock() {
  return (
    <div style={{ width: '97%', background: 'rgb(250, 247, 241)', border: '1px solid rgb(232, 224, 210)', borderRadius: '18px', boxShadow: 'rgba(40, 24, 10, 0.28) 0px 24px 55px -30px', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <div style={{ flex: '1 1 0%', display: 'flex', alignItems: 'center', gap: '7px', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '9px', padding: '7px 10px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '14px', color: 'rgb(149, 136, 122)' }}>
            search
          </span>
          <span style={{ fontSize: '9px', color: 'rgb(149, 136, 122)' }}>
            Search campaigns, accounts…
          </span>
        </div>
        <span style={{ fontSize: '8.5px', fontWeight: '600', color: 'rgb(101, 90, 78)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '7px', padding: '6px 9px', display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '13px' }}>
            view_column
          </span>
          Columns
        </span>
        <span style={{ fontSize: '8.5px', fontWeight: '700', color: 'rgb(255, 255, 255)', background: 'rgb(255, 95, 56)', borderRadius: '7px', padding: '6px 11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span className="material-symbols-rounded" style={{ fontSize: '13px' }}>
            download
          </span>
          Export
        </span>
      </div>
      <div style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', borderBottom: '1px solid rgb(232, 224, 210)', fontSize: '7.5px', fontWeight: '700', color: 'rgb(149, 136, 122)', letterSpacing: '0.3px', background: 'rgb(251, 248, 242)' }}>
          <span style={{ flex: '1.4 1 0%', display: 'flex', alignItems: 'center', gap: '3px' }}>
            CAMPAIGN
            <span className="material-symbols-rounded" style={{ fontSize: '11px' }}>
              arrow_upward
            </span>
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            SPEND
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            LEADS
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            CPL
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9px' }}>
          <span style={{ flex: '1.4 1 0%', fontWeight: '600' }}>
            Whitefield Launch
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            ₹90K
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            312
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            ₹287
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', borderBottom: '1px solid rgb(243, 237, 226)', fontSize: '9px' }}>
          <span style={{ flex: '1.4 1 0%', fontWeight: '600' }}>
            Free Consultation
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            ₹81K
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            198
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            ₹410
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 11px', fontSize: '9px' }}>
          <span style={{ flex: '1.4 1 0%', fontWeight: '600' }}>
            Search — Home Loans
          </span>
          <span style={{ flex: '0.9 1 0%', textAlign: 'right' }}>
            ₹1.1L
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            214
          </span>
          <span style={{ flex: '0.8 1 0%', textAlign: 'right' }}>
            ₹512
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '9px', fontSize: '8.5px', color: 'rgb(149, 136, 122)' }}>
        <span>
          Showing 3 of 24 campaigns
        </span>
        <span style={{ display: 'flex', gap: '5px' }}>
          <span style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(232, 224, 210)', borderRadius: '5px', padding: '3px 8px' }}>
            25 / page
          </span>
        </span>
      </div>
    </div>
  );
}
