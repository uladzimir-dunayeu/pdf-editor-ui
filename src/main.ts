import {PDFDocument} from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

import {pdfFieldsMap} from './pdf-fields-map.ts';
import {mockData} from './mock-data.ts';

import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="card">
      <button id="pdf-generate" type="button">Generate PDF</button>
    </div>
`;

document.querySelector<HTMLDivElement>('#pdf-generate')!.addEventListener('click', async () => {
    const existingPdfBytes = await fetch('../public/fw2g.pdf').then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    pdfDoc.registerFontkit(fontkit);

    const fontBytes = await fetch('../fonts/Courier-Prime-Sans.ttf').then((res) =>
        res.arrayBuffer()
    );
    const customFont = await pdfDoc.embedFont(fontBytes);

    const pdfForm = pdfDoc.getForm();
    const pdfFields = pdfForm.getFields();

    pdfFields.forEach((field) => {
        const fieldName = field.getName();
        const shortFieldName = fieldName.slice(fieldName.lastIndexOf('.') + 1);

        const fieldDef = pdfFieldsMap[shortFieldName];

        if (!fieldDef) return;

        const value = fieldDef.getValue(mockData);

        if (fieldDef.type === 'text-field' && value !== undefined) {
            pdfForm.getTextField(fieldName).setText(value.toString());
            field.defaultUpdateAppearances(customFont);
        }

        if (fieldDef.type === 'checkbox') {
            const checkbox = pdfForm.getCheckBox(fieldName);
            if (value) checkbox.check();
            else checkbox.uncheck();
        }
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], {type: 'application/pdf'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filled_form.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
