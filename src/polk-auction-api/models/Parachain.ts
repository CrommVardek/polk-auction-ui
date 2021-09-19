interface Parachain {
  paraId: number;
  parachainLifeCycle: string;
  onboardingAs: string;
}

export interface ParachainExtended {
  parachain: Parachain;
  parachainName: string;
}
