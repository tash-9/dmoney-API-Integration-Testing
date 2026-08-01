# dMoney API Testing
Automated Postman & Newman test suite covering the full DMoney transaction lifecycle — from user creation to cash-in, send money, and cashout.

## 📝 Project Description
DMoney API Testing is a Postman/Newman-based API testing project that validates the core financial flows of the DMoney application. It covers creating and activating users (customers, agent, merchant), system-to-agent deposits, agent-to-customer deposits with commission checks, peer-to-peer money transfers with service fee validation, cashout with fee assertions, and merchant payments — all backed by positive and negative test cases with automated assertions.

---

## 🛠️ Technology Used:
- **Postman** — Collection design, request chaining, and test scripting
- **Newman** — CLI test runner for automated collection execution
- **newman-reporter-htmlextra** — Rich, styled HTML test reports
- **Node.js** — Runtime for executing the report generation script

---

## ⚙️ How to Run
1. Clone the repository
```bash
   git clone https://github.com/tash-9/dmoney-API-Integration-Testing
   cd dmoney-api-testing
```
2. Install dependencies
```bash
   npm init -y
   npm install newman newman-reporter-htmlextra
```
3. Set up your `.env` file with the required base URL and credentials
4. Run the collection and generate the report
```bash
   node report.js
```
5. Open the generated HTML report from the `Reports/` folder

---

## 🔄 Test Flow Covered
1. **User Creation** — Create 2 customers, 1 agent, and 1 merchant via the User API
2. **User Activation** — Activate all created users using the Admin API
3. **System → Agent Deposit** — Deposit 5000 TK from the system account (`system@dmoney.com`) to the agent account
4. **Agent → Customer Deposit** — Agent deposits 2000 TK to a customer; deposit commission is asserted
5. **Customer → Customer Send Money** — Customer sends 1000 TK to another customer; service fee is asserted
6. **Customer Cashout** — Another customer cashes out 500 TK from the agent; service fee is asserted
7. **Customer → Merchant Payment** — Customer pays 400 TK to a merchant

---

## 📚 API Documentation:
[Click Here to see the API Documentation](https://documenter.getpostman.com/view/54614618/2sBXqQHJsA)

---

### 📊 Newman HTML Report
Run summary generated via `newman-reporter-htmlextra` — 30 requests, 22 assertions, 0 failed, 0 skipped.

<img width="423" height="390" alt="image" src="https://github.com/user-attachments/assets/ccd110fe-e80f-44bf-a69b-7701f9db990a" />

---

## 🙈 .gitignore
The following are excluded from version control:
```
node_modules/
Reports/
.env
```

---

## ✍️  Author
Tasfia Islam Raisha


