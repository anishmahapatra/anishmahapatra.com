// Employer marks, in brand colour on a transparent ground, sized to sit beside the company name.
// Toast and Mu Sigma use the emblem cut from their official logos; SAP and 7-Eleven are the full marks.
export const companyMarks: Record<string, { src: string; ratio: number }> = {
  Toast: { src: '/marks/toast-icon.svg', ratio: 4.95 / 4.753 },
  SAP: { src: '/marks/sap.svg', ratio: 412.38 / 204 },
  '7-Eleven': { src: '/marks/7-eleven.svg', ratio: 45 / 60 },
  'Mu Sigma': { src: '/marks/mu-sigma-emblem.webp', ratio: 164 / 160 },
};
