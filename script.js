function showPage(id) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// 🏦 Deposits Navigation
function openReferencePage(name, phone) {
  document.getElementById("deposit-list").style.display = "none";
  document.getElementById("reference-page").style.display = "block";
  document.getElementById("ref-title").innerText = `${name} (${phone})`;

  const refBtn = document.getElementById("ref-number");
  refBtn.dataset.name = name;
  refBtn.dataset.phone = phone;
}

function goBackToDeposits() {
  document.getElementById("reference-page").style.display = "none";
  document.getElementById("deposit-list").style.display = "block";
}

function openTraderDetails() {
  document.getElementById("reference-page").style.display = "none";
  document.getElementById("details-page").style.display = "block";

  const refBtn = document.getElementById("ref-number");
  document.getElementById("td-name").innerText = refBtn.dataset.name;
  document.getElementById("td-phone").innerText = refBtn.dataset.phone;
  document.getElementById("td-ref").innerText = refBtn.innerText;
}

function goBackToReference() {
  document.getElementById("details-page").style.display = "none";
  document.getElementById("reference-page").style.display = "block";
}

// 💹 Deposit Table Generator
function generateDepositTable() {
  const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const startMonth = monthNames.indexOf(document.getElementById("startMonth").value);
  const startYear = parseInt(document.getElementById("startYear").value);
  const tenure = parseInt(document.getElementById("tenureMonths").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  const depositAmt = 100000;

  let oldDeposit = 0, oldInterest = 0;
  const table = document.getElementById("depositTable");

  table.innerHTML = `<tr>
    <th>S.No.</th><th>MONTH</th><th>DEPOSIT AMT</th><th>OLD DEPOSIT BAL</th>
    <th>TOTAL DEPOSIT</th><th>INTEREST</th><th>OLD INT BAL</th>
    <th>TOTAL INTEREST</th><th>TOTAL AMOUNT</th>
  </tr>`;

  let month = startMonth, year = startYear;

  for (let i = 0; i < tenure; i++) {
    const totalDeposit = oldDeposit + depositAmt;
    const interest = oldDeposit * interestRate;
    const totalInterest = oldInterest + interest;
    const totalAmount = totalDeposit + totalInterest;

    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${monthNames[month]}-${year}</td>
        <td>${depositAmt.toLocaleString()}</td>
        <td>${oldDeposit.toLocaleString()}</td>
        <td>${totalDeposit.toLocaleString()}</td>
        <td>${interest.toFixed(2)}</td>
        <td>${oldInterest.toFixed(2)}</td>
        <td>${totalInterest.toFixed(2)}</td>
        <td>${totalAmount.toLocaleString()}</td>
      </tr>
    `;

    oldDeposit = totalDeposit;
    oldInterest = totalInterest;
    month++;
    if (month > 11) { month = 0; year++; }
  }
}

// 🖨️ Print Table
function printDeposit() {
  const printContent = document.querySelector(".details-container").innerHTML;
  const w = window.open("", "_blank");
  w.document.write("<html><head><title>Deposit Report</title></head><body>");
  w.document.write(printContent);
  w.document.write("</body></html>");
  w.document.close();
  w.print();
}

// 💾 Download CSV
function downloadDeposit() {
  const table = document.getElementById("depositTable");
  let csv = [];
  for (let row of table.rows) {
    const cols = Array.from(row.cells).map(td => td.innerText);
    csv.push(cols.join(","));
  }
  const blob = new Blob([csv.join("\n")], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Deposit_Report.csv";
  a.click();
}
