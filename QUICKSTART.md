# 🚀 Quick Start Guide

Get up and running with the Tokenized Academic Credential System in 5 minutes!

## Prerequisites

- Node.js v18+ installed
- MetaMask browser extension installed
- Basic understanding of blockchain/Web3

## Installation Steps

### 1. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Start Local Blockchain

Open a terminal and run:

```bash
npm run node
```

Keep this terminal running. It will display 20 test accounts with private keys and ETH.

### 3. Deploy Contract

Open a **new terminal** and run:

```bash
npm run deploy:local
```

Copy the contract address from the output. It will look like:
```
✅ AcademicCredential deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### 4. Configure Frontend

Create `frontend/.env` file:

```bash
cd frontend
cp .env.example .env
```

Edit `frontend/.env` and paste your contract address:

```env
VITE_CONTRACT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3
VITE_NETWORK_ID=31337
VITE_NETWORK_NAME=localhost

# IPFS Configuration (Pinata)
VITE_IPFS_GATEWAY=https://gateway.pinata.cloud/ipfs/

# Optional: Add Pinata API credentials for real IPFS uploads
# Leave empty for local development (uses localStorage simulation)
# Get free API key from https://app.pinata.cloud/
VITE_PINATA_API_KEY=
VITE_PINATA_API_SECRET=
```

**Note**: For local testing, Pinata credentials are optional. The app will simulate IPFS using localStorage. For production or real IPFS uploads, see [Configure Pinata IPFS](#optional-configure-pinata-ipfs) below.

### 5. Configure MetaMask

1. Open MetaMask
2. Click network dropdown → "Add Network" → "Add a network manually"
3. Enter details:
   - **Network Name**: Localhost 8545
   - **RPC URL**: http://127.0.0.1:8545
   - **Chain ID**: 31337
   - **Currency Symbol**: ETH
4. Click "Save"

### 6. Import Test Account

From the Hardhat node terminal, copy **Account #0's private key**.

In MetaMask:
1. Click account icon → "Import Account"
2. Paste private key
3. Click "Import"

You should now have ~10,000 ETH for testing!

### 7. Start Frontend

```bash
cd frontend
npm run dev
```

Open browser to `http://localhost:3000`

### 8. Connect Wallet

1. Click "Connect Wallet"
2. Approve connection in MetaMask
3. Make sure "Localhost 8545" network is selected

## Test the Application

### Issue a Credential

1. Navigate to "Issue Credential" page (you have issuer role by default)
2. Fill in the form:
   - **Student Address**: Use your connected wallet address (or create another test account)
   - **Student Name**: John Doe
   - **Institution**: MIT
   - **Degree**: Bachelor of Science in Computer Science
   - **Grade**: A
   - **Issue Date**: Select today's date
3. Click "Issue Credential"
4. Confirm transaction in MetaMask
5. Wait for success message with Token ID

### View Credentials

1. Navigate to "Dashboard"
2. See your issued credential
3. Notice the "Valid" badge

### Verify a Credential

1. Navigate to "Verify" page
2. Enter Token ID: **0** (your first credential)
3. Click "Verify"
4. See full credential details and verification status

## Next Steps

### Issue to Another User

1. In MetaMask, create a new account (or use Account #1 from Hardhat)
2. Copy the new account address
3. Go to "Issue Credential"
4. Paste the address in "Student Wallet Address"
5. Fill other details and issue
6. Switch to that account in MetaMask
7. Go to Dashboard to see the credential

### Revoke a Credential

1. Go to Dashboard
2. Find a credential
3. Click "Revoke" (only visible if you have issuer role)
4. Confirm transaction
5. Credential status changes to "Revoked"

### Test Non-Transferability

1. Go to Dashboard
2. Try to send/transfer the NFT using MetaMask
3. Transaction will fail with "Credentials are non-transferable"

## Troubleshooting

### "Please connect your wallet"
- Make sure MetaMask is unlocked
- Click "Connect Wallet" in the app
- Approve connection in MetaMask popup

### "Wrong network"
- Switch to "Localhost 8545" in MetaMask
- Or deploy to Sepolia and use Sepolia network

### "Transaction failed"
- Make sure you have ETH in your account
- Check if contract address in `.env` matches deployed address
- Try refreshing the page

### "Credential does not exist"
- Make sure you're using the correct Token ID
- Token IDs start from 0
- Check if any credentials were issued

## Optional: Configure Pinata IPFS

For local testing, metadata is stored in localStorage (no Pinata needed). For production or to use real IPFS:

### 1. Get Pinata API Credentials

1. Go to [https://app.pinata.cloud/](https://app.pinata.cloud/)
2. Sign up for a free account
3. Go to "API Keys" → "New Key"
4. Enable "pinFileToIPFS" and "pinJSONToIPFS" permissions
5. Name it (e.g., "Credential System")
6. Copy the **API Key** and **API Secret**

### 2. Update Frontend .env

Edit `frontend/.env` and add your credentials:

```env
VITE_PINATA_API_KEY=your_api_key_here
VITE_PINATA_API_SECRET=your_secret_here
```

### 3. Verify Gateway URL Format

Ensure your gateway URL follows this structure:

```
https://gateway.pinata.cloud/ipfs/QmHash...
       ↑         ↑         ↑     ↑
   Subdomain  Domain    Path   Hash
```

The `.env` should have the base URL without the hash:
```env
VITE_IPFS_GATEWAY=https://gateway.pinata.cloud/ipfs/
```

**The hash is automatically appended** when accessing files. For example:
- Stored URI: `ipfs://QmVRB68NojYsbVhPZvzniRVN2UTyhiS1GRgghuiouyu6Nbs8`
- Access URL: `https://gateway.pinata.cloud/ipfs/QmVRB68NojYsbVhPZvzniRVN2UTyhiS1GRgghuiouyu6Nbs8`

### 4. Test IPFS Upload

After adding credentials:
1. Issue a new credential
2. Check the browser console for "Uploaded to Pinata:" message
3. View the credential in Dashboard
4. Click the "Metadata URI" link to verify it's accessible via IPFS

## Deploy to Testnet (Optional)

See full instructions in main [README.md](README.md#deploy-to-sepolia-testnet)

Quick steps:
1. Get Sepolia ETH from faucet
2. Add Sepolia RPC URL to `.env`
3. Run `npm run deploy:sepolia`
4. Update `frontend/.env` with new contract address and network ID

## Resources

- [Full README](README.md) - Complete documentation
- [Hardhat Docs](https://hardhat.org/docs)
- [ethers.js Docs](https://docs.ethers.org/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

## Need Help?

- Check console logs (F12 in browser)
- Review Hardhat node terminal for transaction logs
- Create an issue on GitHub

---

**Enjoy building with blockchain! 🎓⛓️**
