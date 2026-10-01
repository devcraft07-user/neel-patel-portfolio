import * as React from "react";

export interface MobileIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// ── Low-latency / Performance Bolt Zap Icon ──
export function BoltZapIcon({ className = "size-4 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-6 10.49z" />
    </svg>
  );
}

// ── Real-time Sync / Refresh Arrows Icon ──
export function SyncRefreshIcon({ className = "size-4 text-[#AEC6FF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
    </svg>
  );
}

// ── Event Hub / Architecture Tree Icon ──
export function EventHubIcon({ className = "size-4 text-[#D0BCFF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 3a3 3 0 0 0-3 3c0 .34.06.66.17.95l-3.32 3.32A3 3 0 0 0 2 12a3 3 0 1 0 4.95.83l3.32-3.32c.29.11.61.17.95.17.34 0 .66-.06.95-.17l3.32 3.32A3 3 0 1 0 22 12a3 3 0 0 0-4.95-.83l-3.32-3.32c.11-.29.17-.61.17-.95a3 3 0 0 0-3-3z" />
    </svg>
  );
}

// ── Shield Check / Type-Safe Verified Icon ──
export function ShieldCheckIcon({ className = "size-4 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

// ── Desktop / Next.js UI Display Icon ──
export function DesktopUIIcon({ className = "size-4 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
    </svg>
  );
}

// ── Server / NestJS API Engine Icon ──
export function ServerApiIcon({ className = "size-4 text-[#AEC6FF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 13H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm-1 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-15H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

// ── Database / Redis/PG Storage Icon ──
export function StorageDbIcon({ className = "size-4 text-[#D0BCFF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
    </svg>
  );
}

// ── Socket.IO / Sensors Realtime Stream Hub Icon ──
export function SocketStreamIcon({ className = "size-4 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-8c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0-4c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
    </svg>
  );
}

// ── Arrow Diagram Flow Icon ──
export function DiagramFlowArrowIcon({ className = "size-3 text-[#8B90A0]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12l-4-4v3H3v2h15v3z" />
    </svg>
  );
}

// ── Eye Visibility Case Study Icon ──
export function EyeVisibilityIcon({ className = "size-4", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  );
}

// ── Briefcase Work Role Status Icon ──
export function BriefcaseWorkIcon({ className = "size-5 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  );
}

// ── Mail / Envelope Inbox Icon ──
export function MailEnvelopeIcon({ className = "size-5 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

// ── Send Plane Connect Icon ──
export function SendPlaneIcon({ className = "size-4", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

// ── Content Copy / Duplicate Icon ──
export function CopyDocIcon({ className = "size-4", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  );
}

// ── Schedule / Clock SLA Icon ──
export function ClockScheduleIcon({ className = "size-5 text-[#AEC6FF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2-11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

// ── Location Map Pin Icon ──
export function LocationPinIcon({ className = "size-5 text-[#D0BCFF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

// ── External Link Diagonal Arrow ──
export function ExternalLinkArrowIcon({ className = "size-3.5", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
    </svg>
  );
}

// ── Check Circle Milestone Icon ──
export function CheckCircleIcon({ className = "size-4 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

// ── History / Experience Timeline Icon ──
export function HistoryEduIcon({ className = "size-5 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.12 1.36V16H7v2h8v-2h-2v-3.27c1.15-.05 2.26-.5 3.12-1.36v-1.11h1.11l3.33-3.33C19.19 5.56 17.4 4.88 15.61 4.88c-.89 0-1.78.17-2.61.5V4H9zm2 3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.27c-.47-.17-.97-.27-1.5-.27s-1.03.1-1.5.27V7.5z" />
    </svg>
  );
}

// ── Rocket Launch / Production Deployments Icon ──
export function RocketLaunchIcon({ className = "size-5 text-[#AEC6FF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89-.18.42-.03.91.34 1.18.38.27.89.21 1.21-.13l1.82-1.92 1.41 1.41-1.92 1.82c-.34.32-.4.83-.13 1.21.27.37.76.52 1.18.34.31-.13 3.6-1.53 5.89-3.57 2.29-2.04 3.73-5.26 3.97-5.83.21-.49.02-1.06-.44-1.31-.46-.25-1.03-.13-1.36.27-.47.57-2.66 2.87-4.89 3.23l-1.41-1.41c.36-2.23 2.66-4.42 3.23-4.89.4-.33.52-.9.27-1.36-.25-.46-.82-.65-1.31-.44-.57.24-3.79 1.68-5.83 3.97zM2.41 19.17l3.54-3.54 2.12 2.12-3.54 3.54c-.59.59-1.54.59-2.12 0-.59-.58-.59-1.53 0-2.12z" />
    </svg>
  );
}

// ── Domain / Architecture Buildings Icon ──
export function DomainBuildingIcon({ className = "size-5 text-[#D0BCFF]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </svg>
  );
}

// ── Groups / Mentorship Users Icon ──
export function GroupsUsersIcon({ className = "size-5 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.74 1.17-.52 2.61-.9 4.24-.9zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm16 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7.5 5.5v1.5H1v-1.5c0-.88.51-1.67 1.3-2.05.65-.32 1.41-.57 2.26-.74-.35.65-.56 1.43-.56 2.29zm15 0c0-.86-.21-1.64-.56-2.29.85.17 1.61.42 2.26.74.79.38 1.3 1.17 1.3 2.05V18h-3.5v-1.5z" />
    </svg>
  );
}

// ── Speed Gauge / Performance Metric Icon ──
export function SpeedGaugeIcon({ className = "size-4 text-[#00D7F4]", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.28-10.43zM10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
    </svg>
  );
}

// ── Close X Modal Icon ──
export function CloseXIcon({ className = "size-4", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

// ── Arrow Forward Next Icon ──
export function ArrowForwardIcon({ className = "size-4", ...props }: MobileIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}
