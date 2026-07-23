import React from 'react';

export default function Masthead() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header className="bg-paper pt-[18px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Newspaper Sub-header Bar */}
        <div className="flex items-center justify-between gap-4 pb-[9px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <div className="flex-1">Jaipur, Rajasthan</div>
          <div className="flex-1 text-center hidden sm:block">The Investigation Edition</div>
          <div className="flex-1 text-right">Est. 2026</div>
        </div>

        {/* Main Masthead Headline */}
        <h1 className="m-0 border-t-2 border-ink px-0 pb-1 pt-2 text-center font-display text-[clamp(38px,8vw,98px)] font-normal leading-[0.92] tracking-[-0.01em]">
          Rishit Kumar
          <small className="mt-3 block font-gothic text-[clamp(9px,1.6vw,13px)] font-semibold uppercase tracking-[0.18em] text-ink-soft sm:tracking-[0.35em]">
            The Personal Record of an AWS DevOps Engineer
          </small>
        </h1>

        {/* Newspaper Date & Edition Bar */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-[18px] gap-y-1 border-y-2 border-ink py-[7px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <span>{currentDate}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-ink-soft"></span>
          <span>Vol. III</span>
          <span className="h-[3px] w-[3px] rounded-full bg-ink-soft"></span>
          <span className="hidden min-[600px]:inline">Infrastructure &amp; CI/CD Evidence</span>
          <span className="h-[3px] w-[3px] rounded-full bg-ink-soft hidden min-[600px]:inline"></span>
          <span>Price: One Coffee</span>
        </div>
      </div>
    </header>
  );
}
