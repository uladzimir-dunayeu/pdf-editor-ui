import { PDFDocument } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="pdf-generate" type="button">Generate PDF</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
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

    const form = pdfDoc.getForm();
    const fields = form.getFields();

    fields.forEach((field) => {
        const type = field.constructor.name;

        if (type !== 'PDFCheckBox2' && !field.getName().includes('f1_01')) {
            if (
                field.getName().includes('f1_03') ||
                field.getName().includes('f1_04') ||
                field.getName().includes('f1_16') ||
                field.getName().includes('f1_21')
            ) {
                const lastDotIndex = field.getName().lastIndexOf('.');
                const result = field.getName().slice(lastDotIndex + 1);

                form.getTextField(field.getName()).setText(result);
            } else {
                form
                    .getTextField(field.getName())
                    .setText(
                        'Do Not Cut or Separate Forms on This Page Do Not Cut or Separate Forms on This Page Do Not Cut or Separate Forms on This Page Do Not Cut or Separate Forms on This Page Do Not Cut or Separate Forms on This Page Do Not Cut or Separate Forms on This Page Do Not Cut or Separate Forms on This Page '
                    );
                field.defaultUpdateAppearances(customFont);
            }
        }
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filled_form.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
