import landCss from "./landing.module.scss";

const PdfView = () => (
    <div className={landCss.pdf_main}>
        <iframe src="../brochure.pdf#view=fitH" height="100%" width="100%"/>
    </div>
);

export { PdfView };