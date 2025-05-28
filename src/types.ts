export interface PdfFieldDefinition {
    type: 'text-field' | 'checkbox';
    name: string;
    getValue: (data: IPdfData) => string | number | boolean | undefined;
}

export interface IPdfData {
    calendarYear: number;
    correct: boolean;
    void: boolean;
    payer: {
        name: string;
        address: string;
        tin: string;
        phone: string;
    };
    winner: {
        name: string;
        streetAddress: string;
        address: string;
        tin: string;
    };
    reportableWinnings: number;
    dateWon: string;
    wagerType: string;
    federalTaxWithheld: number;
    transaction: string;
    race: string;
    identicalWinnings: number;
    cashier: string;
    window: string;
    identification: {
        firstId: string;
        secondId: string;
    };
    state: {
        payerStateId: string;
        winnings: number;
        taxWithheld: number;
    };
    local: {
        winnings: number;
        taxWithheld: number;
        localityName: string;
    };
    signature: {
        name: string;
        date: string;
    };
}
