#!/usr/bin/env node

/**
 * SMTP Connection Test Script
 * Tests if SMTP ports are accessible from your network
 */

const net = require('net');

const SMTP_SERVERS = [
  { host: 'smtp.gmail.com', port: 587, name: 'Gmail TLS' },
  { host: 'smtp.gmail.com', port: 465, name: 'Gmail SSL' },
  { host: 'smtp.gmail.com', port: 25, name: 'Gmail Plain' },
];

function testConnection(host, port, name) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timeout = 5000; // 5 seconds

    socket.setTimeout(timeout);

    socket.on('connect', () => {
      console.log(`✅ ${name} (${host}:${port}) - CONNECTED`);
      socket.destroy();
      resolve({ success: true, host, port, name });
    });

    socket.on('timeout', () => {
      console.log(`❌ ${name} (${host}:${port}) - TIMEOUT (Port likely blocked)`);
      socket.destroy();
      resolve({ success: false, host, port, name, error: 'timeout' });
    });

    socket.on('error', (err) => {
      console.log(`❌ ${name} (${host}:${port}) - ERROR: ${err.message}`);
      socket.destroy();
      resolve({ success: false, host, port, name, error: err.message });
    });

    console.log(`Testing ${name} (${host}:${port})...`);
    socket.connect(port, host);
  });
}

async function runTests() {
  console.log('='.repeat(60));
  console.log('SMTP Connection Test');
  console.log('='.repeat(60));
  console.log('');

  const results = [];

  for (const server of SMTP_SERVERS) {
    const result = await testConnection(server.host, server.port, server.name);
    results.push(result);
    console.log('');
  }

  console.log('='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`✅ Successful: ${successful.length}/${results.length}`);
  console.log(`❌ Failed: ${failed.length}/${results.length}`);
  console.log('');

  if (failed.length === results.length) {
    console.log('⚠️  ALL SMTP PORTS ARE BLOCKED!');
    console.log('');
    console.log('Possible causes:');
    console.log('1. Corporate/University firewall blocking SMTP');
    console.log('2. ISP blocking SMTP ports (common with Jio, Airtel)');
    console.log('3. VPS/Cloud provider blocking (AWS, GCP, Azure)');
    console.log('4. Local firewall/antivirus blocking');
    console.log('');
    console.log('Solutions:');
    console.log('1. Use VPN to bypass restrictions');
    console.log('2. Use alternative email service (SendGrid, Mailgun, AWS SES)');
    console.log('3. Enable development mode: FORCE_EMAIL_DEV_MODE=true in .env');
    console.log('4. Contact your network administrator or ISP');
  } else if (successful.length > 0) {
    console.log('✅ At least one SMTP port is accessible!');
    console.log('Your email configuration should work.');
  }

  console.log('');
  console.log('='.repeat(60));
}

runTests().catch(console.error);
