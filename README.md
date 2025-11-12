# STAR-CHITS
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>⭐ STAR CHITS Management Dashboard</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: #f7f9fc;
    }
    header {
      background: #004080;
      color: white;
      text-align: center;
      padding: 12px;
      font-size: 22px;
    }
    nav {
      background: #dbe8ff;
      display: flex;
      justify-content: space-around;
      padding: 10px;
      flex-wrap: wrap;
    }
    nav button {
      background: #004080;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
    }
    nav button:hover {
      background: #007bff;
    }
    section {
      display: none;
      padding: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
      background: white;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: center;
    }
    th {
      background: #e6f0ff;
    }
    .hidden { display: none; }
    .btn-blue {
      background: #004080;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-blue:hover { background: #007bff; }
    .btn-red {
      background: red;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
    .details-container {
      width: 85%;
      margin: 0 auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      position: relative;
    }
    .top-right {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .filter-row {
      margin: 15px 0;
      text-align: center;
    }
    .filter-row input, .filter-row select {
      margin: 0 5px;
      padding: 5px;
    }
    .action-buttons {
      text-align: right;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <header>⭐ STAR CHITS MANAGEMENT DASHBOARD</header>

  <nav>
    <button onclick="showPage('home')">Home</button>
    <button onclick="showPage('monthly')">Monthly</button>
    <button onclick="showPage('clientLogin')">Client Login</button>
    <button onclick="showPage('loans')">Loans</button>
    <button onclick="showPage('deposits')">Deposits</button>
    <button onclick="showPage('payments')">Payments</button>
    <button onclick="showPage('expenses')">Expenses</button>
    <button onclick="showPage('profitLoss')">Profit & Loss</button>
  </nav>

  <!-- HOME -->
  <section id="home" style="display:block;">
    <h2 style="text-align:center;">Welcome to STAR CHITS Dashboard</h2>
  </section>

  <!-- MONTHLY -->
  <section id="monthly" class="hidden">
    <h2 style="text-align:center;">Monthly Collection</h2>
    <div class="filter-row">
      <label>Month:</label>
      <select id="monthInput">
        <option value="0">January</option><option value="1">February</option><option value="2">March</option>
        <option value="3">April</option><option value="4">May</option><option value="5">June</option>
        <option value="6">July</option><option value="7">August</option><option value="8">September</option>
        <option value="9">October</option><option value="10">November</option><option value="11">December</option>
      </select>
      <label>Year:</label>
      <input type="number" id="yearInput" value="2025" min="2000" max="2050"/>
      <button class="btn-blue">Search</button>
    </div>
    <table>
      <thead><tr><th>S.No</th><th>A/C No.</th><th>Name</th><th>Installment No.</th><th>Balance</th><th>Phone No.</th></tr></thead>
      <tbody id="monthlyTableBody"></tbody>
    </table>
  </section>

  <!-- CLIENT LOGIN -->
  <section id="clientLogin" class="hidden">
    <h2 style="text-align:center;">Client Login</h2>
    <div class="filter-row">
      <input type="text" placeholder="Enter Name or ID" />
      <button class="btn-blue">Login</button>
    </div>
  </section>

  <!-- LOANS -->
  <section id="loans" class="hidden">
    <h2 style="text-align:center;">Loans</h2>
    <p style="text-align:center;">Loan details module coming soon...</p>
  </section>

  <!-- ✅ DEPOSITS SECTION -->
  <section id="deposits" class="hidden">
    <h2 style="text-align:center;">Deposits</h2>

    <div id="deposit-list" style="text-align:center;">
      <p>Select a depositor:</p>
      <div><b>Standard Traders</b> — <button onclick="openReferencePage('Standard Traders','9966696366')">9966696366</button></div>
      <div><b>Elite Agencies</b> — <button onclick="openReferencePage('Elite Agencies','9876543210')">9876543210</button></div>
    </div>

    <div id="reference-page" style="display:none; text-align:center;">
      <h3 id="ref-title"></h3>
      <p>Click reference number:</p>
      <button id="ref-number" onclick="openTraderDetails()">JL24C20-6</button><br><br>
      <button class="btn-blue" onclick="goBackToDeposits()">⬅ Back</button>
    </div>

    <div id="details-page" style="display:none;">
      <div class="details-container">
        <button class="btn-red top-right" onclick="goBackToReference()">⬅ Back</button>
        <h2>Depositor Details</h2>
        <table>
          <tr><th>NAME</th><td id="td-name"></td></tr>
          <tr><th>PHONE</th><td id="td-phone"></td></tr>
          <tr><th>REFERENCE</th><td id="td-ref"></td></tr>
        </table>

        <div class="filter-row">
          <label>Start Month:</label>
          <select id="startMonth">
            <option>JAN</option><option>FEB</option><option>MAR</option><option>APR</option>
            <option>MAY</option><option>JUN</option><option>JUL</option><option>AUG</option>
            <option>SEP</option><option>OCT</option><option>NOV</option><option>DEC</option>
          </select>
          <label>Year:</label>
          <input type="number" id="startYear" value="2024" min="2020" max="2035" />
          <label>Tenure (months):</label>
          <input type="number" id="tenureMonths" min="1" max="60" value="12"/>
          <label>Interest (%):</label>
          <input type="number" id="interestRate" min="0" step="0.1" value="1"/>
          <button class="btn-blue" onclick="generateDepositTable()">Generate</button>
        </div>

        <div class="action-buttons">
          <button class="btn-blue" onclick="printDeposit()">🖨️ Print</button>
          <button class="btn-blue" onclick="downloadDeposit()">⬇️ Download</button>
        </div>

        <table id="depositTable">
          <tr>
            <th>S.No.</th><th>MONTH</th><th>DEPOSIT AMT</th><th>OLD DEPOSIT BAL</th><th>TOTAL DEPOSIT</th>
            <th>INTEREST</th><th>OLD INT BAL</th><th>TOTAL INTEREST</th><th>TOTAL AMOUNT</th>
          </tr>
        </table>
      </div>
    </div>
  </section>

  <!-- OTHER SECTIONS -->
  <section id="payments" class="hidden"><h2 style="text-align:center;">Payments</h2></section>
  <section id="expenses" class="hidden"><h2 style="text-align:center;">Expenses</h2></section>
  <section id="profitLoss" class="hidden"><h2 style="text-align:center;">Profit & Loss</h2></section>

  <script>
    function showPage(id) {
      document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
      document.getElementById(id).style.display = "block";
    }

    // Navigation for Deposits
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

    // ✅ Deposit Table Generator
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
        <th>S.No.</th><th>MONTH</th><th>DEPOSIT AMT</th><th>OLD DEPOSIT BAL</th><th>TOTAL DEPOSIT</th>
        <th>INTEREST</th><th>OLD INT BAL</th><th>TOTAL INTEREST</th><th>TOTAL AMOUNT</th>
      </tr>`;
      let month = startMonth, year = startYear;

      for (let i = 0; i < tenure; i++) {
        const totalDeposit = oldDeposit + depositAmt;
        const interest = oldDeposit * interestRate;
        const totalInterest = oldInterest + interest;
        const totalAmount = totalDeposit + totalInterest;
        const row = `
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
          </tr>`;
        table.innerHTML += row;
        oldDeposit = totalDeposit;
        oldInterest = totalInterest;
        month++;
        if (month > 11) { month = 0; year++; }
      }
    }

    // ✅ Print
    function printDeposit() {
      const printContent = document.querySelector(".details-container").innerHTML;
      const w = window.open("", "_blank");
      w.document.write("<html><head><title>Deposit Report</title></head><body>");
      w.document.write(printContent);
      w.document.write("</body></html>");
      w.document.close();
      w.print();
    }

    // ✅ Download as CSV
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
  </script>
</body>
</html>
