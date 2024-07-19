console.log("Content script executed!");

function changeLabelColor() {
  try {
    const labels = document.querySelectorAll(
      "div.invoiceInfoBlock div.invoiceInfo label"
    );
    const spans = document.querySelectorAll(
      "div.invoiceInfoBlock div.invoiceInfo > span"
    );
    const atag = document.querySelectorAll(
      "div.invoiceInfoBlock div.invoiceInfo > span a"
    );
    const atagInvoice = document.querySelectorAll("div.invoiceInfoBlock a");
    const h4tag = document.querySelectorAll("h4");
    const h1tag = document.querySelectorAll("h1");
    const h3tag = document.querySelectorAll("h3");
    const tdtag = document.querySelectorAll("td");

    const spanspan = document.querySelectorAll(
      "div.invoiceInfoBlock div.invoiceInfo > span span"
    );
    const thbottom = document.querySelectorAll("#approvalLog TH");

    const th = document.querySelectorAll("table#invoiceLines th");
    labels.forEach((label) => {
      label.style.color = "blue";
      label.style.fontSize = "19px";
      label.style.width = "195px";
    });
    spans.forEach((spanss) => {
      spanss.style.margin = "10px";
    });
    th.forEach((thh) => {
      thh.style.color = "blue";
      thh.style.fontSize = "19px";
    });
    atag.forEach((atagg) => {
      atagg.style.color = "blue";
      atagg.style.fontSize = "19px";
    });
    h4tag.forEach((h4tagg) => {
      h4tagg.style.color = "blue";
      h4tagg.style.fontSize = "19px";
    });
    h1tag.forEach((h1tagg) => {
      h1tagg.style.color = "blue";
      h1tagg.style.fontSize = "30px";
    });
    h3tag.forEach((h3tagg) => {
      h3tagg.style.color = "blue";
      h3tagg.style.fontSize = "19px";
    });
    atagInvoice.forEach((atagInvoicee) => {
      atagInvoicee.style.color = "blue";
      atagInvoicee.style.fontSize = "15px";
    });
    thbottom.forEach((thbottomm) => {
      thbottomm.style.color = "blue";
      thbottomm.style.fontSize = "17px";
    });
    spanspan.forEach((spanspans) => {
      spanspans.style.fontSize = "14px";
    });

    tdtag.forEach((tdtagg) => {
      tdtagg.style.fontSize = "14px";
    });
  } catch (error) {
    console.error("Error changing label color:", error);
  }
}
changeLabelColor();
