
export interface RelayChain extends Blockchain {
    mainColor: string,
    secondaryColor?: string,
    website?: string,
}

export interface ParaChain extends Blockchain {
    paraId: number,
}

export type Blockchain = {
    name: string,
    unit: string,
}