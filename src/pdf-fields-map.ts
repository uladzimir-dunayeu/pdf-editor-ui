import type {PdfFieldDefinition} from './types.ts';

export const pdfFieldsMap: Record<string, PdfFieldDefinition> = {
    'f1_01[0]': {
        type: 'text-field',
        name: 'calendarYear',
        getValue: (data) => data.calendarYear.toString().slice(-2),
    },
    'c1_1[0]': {
        type: 'checkbox',
        name: 'correct',
        getValue: (data) => data.correct,
    },
    'c1_1[1]': {
        type: 'checkbox',
        name: 'void',
        getValue: (data) => data.void,
    },
    'f1_02[0]': {
        type: 'text-field',
        name: 'payer-address',
        getValue: (data) => data.payer?.address,
    },
    'f1_03[0]': {
        type: 'text-field',
        name: 'payer-tin',
        getValue: (data) => data.payer?.tin,
    },
    'f1_04[0]': {
        type: 'text-field',
        name: 'payer-phone',
        getValue: (data) => data.payer?.phone,
    },
    'f1_05[0]': {
        type: 'text-field',
        name: 'winner-name',
        getValue: (data) => data.winner?.name,
    },
    'f1_06[0]': {
        type: 'text-field',
        name: 'winner-street-address',
        getValue: (data) => data.winner?.streetAddress,
    },
    'f1_07[0]': {
        type: 'text-field',
        name: 'winner-address',
        getValue: (data) => data.winner?.address,
    },
    'f1_08[0]': {
        type: 'text-field',
        name: 'reportable-winnings',
        getValue: (data) => data.reportableWinnings,
    },
    'f1_09[0]': {
        type: 'text-field',
        name: 'date-won',
        getValue: (data) => data.dateWon,
    },
    'f1_10[0]': {
        type: 'text-field',
        name: 'type-of-wager',
        getValue: (data) => data.wagerType,
    },
    'f1_11[0]': {
        type: 'text-field',
        name: 'federal-income-tax-withheld',
        getValue: (data) => data.federalTaxWithheld,
    },
    'f1_12[0]': {
        type: 'text-field',
        name: 'transaction',
        getValue: (data) => data.transaction,
    },
    'f1_13[0]': {
        type: 'text-field',
        name: 'race',
        getValue: (data) => data.race,
    },
    'f1_14[0]': {
        type: 'text-field',
        name: 'winnings-from-identical-wagers',
        getValue: (data) => data.identicalWinnings,
    },
    'f1_15[0]': {
        type: 'text-field',
        name: 'cashier',
        getValue: (data) => data.cashier,
    },
    'f1_16[0]': {
        type: 'text-field',
        name: 'winners-tin',
        getValue: (data) => data.winner?.tin,
    },
    'f1_17[0]': {
        type: 'text-field',
        name: 'window',
        getValue: (data) => data.window,
    },
    'f1_18[0]': {
        type: 'text-field',
        name: 'first-identification-number',
        getValue: (data) => data.identification?.firstId,
    },
    'f1_19[0]': {
        type: 'text-field',
        name: 'second-identification-number',
        getValue: (data) => data.identification?.secondId,
    },
    'f1_20[0]': {
        type: 'text-field',
        name: 'state-payers-state-identification-number',
        getValue: (data) => data.state?.payerStateId,
    },
    'f1_21[0]': {
        type: 'text-field',
        name: 'state-winnings',
        getValue: (data) => data.state?.winnings,
    },
    'f1_22[0]': {
        type: 'text-field',
        name: 'state-income-tax-withheld',
        getValue: (data) => data.state?.taxWithheld,
    },
    'f1_23[0]': {
        type: 'text-field',
        name: 'local-winnings',
        getValue: (data) => data.local?.winnings,
    },
    'f1_24[0]': {
        type: 'text-field',
        name: 'local-income-tax-withheld',
        getValue: (data) => data.local?.taxWithheld,
    },
    'f1_25[0]': {
        type: 'text-field',
        name: 'name-of-locality',
        getValue: (data) => data.local?.localityName,
    },
};
